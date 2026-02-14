/**
 * Contact form API route with rate limiting.
 * Rate limit: 5 submissions per 15 minutes per IP.
 * Integrate with Resend, SendGrid, or your email service via CONTACT_EMAIL_* env vars.
 */
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX = 5;

// In-memory store (use Redis/Vercel KV for production multi-instance)
const rateLimitStore = new Map();

function getClientIp(request) {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown'
  );
}

function isRateLimited(ip) {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (!record) return false;

  if (now > record.resetAt) {
    rateLimitStore.delete(ip);
    return false;
  }

  return record.count >= RATE_LIMIT_MAX;
}

function recordRequest(ip) {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (!record || now > record.resetAt) {
    rateLimitStore.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
  } else {
    record.count += 1;
  }
}

export async function POST(request) {
  const ip = getClientIp(request);

  if (isRateLimited(ip)) {
    return new Response(
      JSON.stringify({
        error: 'Too many requests. Please try again in 15 minutes.',
      }),
      {
        status: 429,
        headers: {
          'Content-Type': 'application/json',
          'Retry-After': '900',
        },
      }
    );
  }

  try {
    const body = await request.json();
    const { name, email, type, message } = body;

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Name, email, and message are required.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Basic validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email address.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    recordRequest(ip);

    // TODO: Integrate with your email service (Resend, SendGrid, etc.)
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({ from: '...', to: 'hello@origyn.io', ... });
    // For now, log to console (replace with your email integration)
    console.log('[Contact form]', { name, email, type, message });

    return new Response(
      JSON.stringify({ success: true, message: 'Thank you for reaching out.' }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (err) {
    console.error('[Contact API]', err);
    return new Response(
      JSON.stringify({ error: 'Something went wrong. Please try again.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
