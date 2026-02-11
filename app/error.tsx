'use client';

export default function GlobalError({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 p-8 font-sans text-slate-50">
        <h2 className="text-2xl font-semibold">Something went wrong</h2>
        <p className="mt-2 text-slate-300">{error?.message || 'Unexpected application error.'}</p>
        <button onClick={() => reset()} className="mt-4 rounded-md bg-brand px-3 py-2 text-slate-950">
          Try again
        </button>
      </body>
    </html>
  );
}
