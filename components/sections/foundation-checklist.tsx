const checklist = [
  'Scalable Next.js App Router architecture',
  'Reusable component and utility boundaries',
  'Production metadata and error boundaries',
  'GitHub templates and CI quality gates',
  'Vercel-ready environment strategy'
];

export function FoundationChecklist() {
  return (
    <section className="card mt-4">
      <h2 className="mt-0 text-xl font-semibold">Technical baseline checklist</h2>
      <ul className="mb-0 list-disc space-y-2 pl-5">
        {checklist.map((item) => (
          <li key={item} className="text-slate-200">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
