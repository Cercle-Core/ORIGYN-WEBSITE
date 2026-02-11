import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="container py-16">
      <h1 className="text-3xl font-semibold">404: Page not found</h1>
      <p className="mt-2 text-slate-300">The page you are looking for does not exist.</p>
      <Link href="/" className="mt-4 inline-block text-brand hover:underline">
        Return home
      </Link>
    </main>
  );
}
