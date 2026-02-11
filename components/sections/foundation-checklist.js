const checklist = [
  'Scalable Next.js App Router architecture',
  'Reusable component and utility boundaries',
  'Production metadata and error boundaries',
  'GitHub templates and CI quality gates',
  'Vercel-ready environment strategy'
];

export function FoundationChecklist() {
  return (
    <section className="card" style={{ marginTop: '1rem' }}>
      <h2 style={{ marginTop: 0 }}>Technical baseline checklist</h2>
      <ul style={{ paddingLeft: '1rem', marginBottom: 0 }}>
        {checklist.map((item) => (
          <li key={item} style={{ marginBottom: '0.45rem', color: '#e2e8f0' }}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
