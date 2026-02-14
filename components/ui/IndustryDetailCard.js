/**
 * Industry Detail Card
 * Problem, Platform solution, Strategic advantage.
 * Used on Industries page.
 */
export default function IndustryDetailCard({
  title,
  problem,
  solution,
  advantage,
  id,
  outcome,
  href,
  className = '',
}) {
  return (
    <article
      id={id}
      className={`
        group rounded-lg p-6 h-full
        bg-neutral-900/50 border border-neutral-800
        transition-all duration-200 ease-smooth
        hover:border-neutral-700
        ${className}
      `}
    >
      <h3 className="text-h4 font-display text-neutral-100 mb-3">
        {title}
      </h3>

      {outcome && (
        <p className="text-caption text-accent mb-4 pb-4 border-b border-neutral-800/80">
          {outcome}
        </p>
      )}

      <div className="space-y-4">
        <div>
          <h4 className="text-caption font-display text-neutral-500 uppercase tracking-wider mb-2">
            Problem
          </h4>
          <p className="text-body text-neutral-400">
            {problem}
          </p>
        </div>
        <div className="pt-3 border-t border-neutral-800/70">
          <h4 className="text-caption font-display text-neutral-500 uppercase tracking-wider mb-2">
            Platform solution
          </h4>
          <p className="text-body text-neutral-400">
            {solution}
          </p>
        </div>
        <div className="pt-3 border-t border-neutral-800/70">
          <h4 className="text-caption font-display text-neutral-500 uppercase tracking-wider mb-2">
            Strategic advantage
          </h4>
          <p className="text-body text-neutral-400">
            {advantage}
          </p>
        </div>
      </div>

      {href && (
        <div className="pt-4 mt-5 border-t border-neutral-800/80">
          <a
            href={href}
            className="inline-flex items-center gap-2 text-caption text-accent transition-all duration-200 hover:text-accent-hover group-hover:translate-x-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900 rounded"
          >
            Explore industry
            <span aria-hidden="true">→</span>
          </a>
        </div>
      )}
    </article>
  );
}
