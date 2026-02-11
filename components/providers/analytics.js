'use client';

export function Analytics() {
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  return (
    <script
      defer
      src="/_vercel/insights/script.js"
      data-project-id={process.env.NEXT_PUBLIC_VERCEL_ANALYTICS_ID || ''}
    />
  );
}
