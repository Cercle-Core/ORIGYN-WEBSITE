export function Hero() {
  return (
    <section className="card" style={{ marginTop: '2rem' }}>
      <p style={{ color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.06em', margin: 0 }}>
        Phase 1 Complete
      </p>
      <h1 style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>ORIGYN Technical Foundation</h1>
      <p style={{ lineHeight: 1.7, color: '#cbd5e1' }}>
        The website baseline now includes production-oriented structure, CI checks, security headers,
        deployment readiness, and documented workflow conventions.
      </p>
    </section>
  );
}
