'use client';

export default function GlobalError({ error, reset }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'system-ui', padding: '2rem', background: '#020617', color: '#f8fafc' }}>
        <h2>Something went wrong</h2>
        <p style={{ color: '#cbd5e1' }}>{error?.message || 'Unexpected application error.'}</p>
        <button onClick={() => reset()} style={{ padding: '0.5rem 0.75rem', cursor: 'pointer' }}>
          Try again
        </button>
      </body>
    </html>
  );
}
