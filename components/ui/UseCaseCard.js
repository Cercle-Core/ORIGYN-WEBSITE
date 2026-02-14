/**
 * Use Case Card
 * Structured case: title, description, key benefits.
 * Used on Use Cases page.
 */
export default function UseCaseCard({
  title,
  description,
  benefits = [],
  outcome,
  href,
  className = '',
}) {
  return (
    <article
      className={`
        group rounded-lg p-6 h-full
        bg-neutral-900/50 border border-neutral-800
        transition-all duration-200 ease-smooth
        hover:border-neutral-700
        ${className}
      `}
    >
      <h3 className="text-h4 font-display text-neutral-100 mb-2">
        {title}
      </h3>

      {outcome && (
        <p className="text-caption text-accent mb-4 pb-4 border-b border-neutral-800/80">
          {outcome}
        </p>
      )}

      <p className="text-body text-neutral-400 mb-4">
        {description}
      </p>
      {benefits.length > 0 && (
        <ul className="space-y-2 mb-4">
          {benefits.map((b, i) => (
            <li key={i} className="text-caption text-neutral-500 flex items-start gap-2">
              <span className="text-accent shrink-0">•</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
      {href && (
        <div className="pt-4 mt-5 border-t border-neutral-800/80">
          <a
            href={href}
            className="inline-flex items-center gap-2 text-caption text-accent transition-all duration-200 hover:text-accent-hover group-hover:translate-x-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900 rounded"
          >
            Learn more
            <span aria-hidden="true">→</span>
          </a>
        </div>
      )}
    </article>
  );
}
