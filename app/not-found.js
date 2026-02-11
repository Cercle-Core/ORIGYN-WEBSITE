import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="container" style={{ paddingBlock: '4rem' }}>
      <h1>404: Page not found</h1>
      <p style={{ color: '#cbd5e1' }}>The page you are looking for does not exist.</p>
      <Link href="/" style={{ color: '#38bdf8' }}>
        Return home
      </Link>
    </main>
  );
}
