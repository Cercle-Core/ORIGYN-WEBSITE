/**
 * System Flow Diagram
 * Visual flow: Data → Model → Control → Actuation
 * SVG-based for crisp rendering and fast loading.
 */
export default function SystemFlowDiagram({ steps = [], variant = 'compact', className = '' }) {
  const defaultSteps = steps.length
    ? steps
    : [
        { label: 'Data', desc: 'Ingest & validate' },
        { label: 'Model', desc: 'Inference' },
        { label: 'Control', desc: 'Optimization' },
        { label: 'Actuation', desc: 'Real-time' },
      ];

  const isDetailed = variant === 'detailed';

  return (
    <div className={`overflow-x-auto py-8 ${className}`}>
      <div className="flex flex-wrap items-stretch justify-center gap-4 md:gap-6 min-w-max px-4">
        {defaultSteps.map((step, i) => {
          const isFocusStep = isDetailed && i === 1;

          return (
            <div key={i} className="flex items-center">
              <div
                className={`
                  flex flex-col justify-center
                  w-36 h-28 md:w-44 md:h-32
                  rounded-lg border
                  px-4
                  transition-all duration-200 ease-smooth
                  ${isFocusStep
                    ? 'border-accent/40 bg-gradient-to-b from-primary-700/60 to-neutral-900/90 shadow-[0_0_28px_-16px_rgba(59,130,246,0.6)]'
                    : 'border-neutral-700 bg-neutral-900/80'}
                `}
              >
                <span className="text-caption font-mono text-accent/80 mb-1">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-h4 font-display text-neutral-100 mb-1">
                  {step.label}
                </span>
                {step.desc && (
                  <span className="text-caption text-neutral-400">
                    {step.desc}
                  </span>
                )}
                {isDetailed && step.meta && (
                  <span className="text-caption text-neutral-500 mt-1">
                    {step.meta}
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
                    aria-hidden="true"
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
          );
        })}
      </div>
    </div>
  );
}
