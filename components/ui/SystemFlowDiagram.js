/**
 * System Flow Diagram
 * Visual flow: Data → Model → Control → Actuation
 * SVG-based for crisp rendering and fast loading.
 */
export default function SystemFlowDiagram({ steps = [], className = '' }) {
  const defaultSteps = steps.length
    ? steps
    : [
        { label: 'Data', desc: 'Ingest & validate' },
        { label: 'Model', desc: 'Inference' },
        { label: 'Control', desc: 'Optimization' },
        { label: 'Actuation', desc: 'Real-time' },
      ];

  return (
    <div className={`overflow-x-auto py-8 ${className}`}>
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 min-w-max px-4">
        {defaultSteps.map((step, i) => (
          <div key={i} className="flex items-center">
            <div
              className="
                flex flex-col items-center justify-center
                w-28 h-20 md:w-36 md:h-24
                rounded-lg border border-neutral-700
                bg-neutral-900/80
                px-4
              "
            >
              <span className="text-caption font-mono text-accent/80 mb-1">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-h4 font-display text-neutral-100">
                {step.label}
              </span>
              {step.desc && (
                <span className="text-caption text-neutral-500 mt-0.5">
                  {step.desc}
                </span>
              )}
            </div>
            {i < defaultSteps.length - 1 && (
              <div className="hidden sm:block mx-2 md:mx-4 text-neutral-600">
                <svg
                  className="w-6 h-6 md:w-8 md:h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
