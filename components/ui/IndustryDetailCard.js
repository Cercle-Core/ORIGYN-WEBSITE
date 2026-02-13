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
  className = '',
}) {
  return (
    <article
      id={id}
      className={`
        rounded-lg p-6
        bg-neutral-900/50 border border-neutral-800
        transition-all duration-200 ease-smooth
        hover:border-neutral-700
        ${className}
      `}
    >
      <h3 className="text-h4 font-display text-neutral-100 mb-4">
        {title}
      </h3>
      <div className="space-y-4">
        <div>
          <h4 className="text-caption font-display text-neutral-500 uppercase tracking-wider mb-2">
            Problem
          </h4>
          <p className="text-body text-neutral-400">
            {problem}
          </p>
        </div>
        <div>
          <h4 className="text-caption font-display text-neutral-500 uppercase tracking-wider mb-2">
            Platform solution
          </h4>
          <p className="text-body text-neutral-400">
            {solution}
          </p>
        </div>
        <div>
          <h4 className="text-caption font-display text-neutral-500 uppercase tracking-wider mb-2">
            Strategic advantage
          </h4>
          <p className="text-body text-neutral-400">
            {advantage}
          </p>
        </div>
      </div>
    </article>
  );
}
