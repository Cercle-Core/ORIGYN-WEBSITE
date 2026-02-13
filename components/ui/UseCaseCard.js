/**
 * Use Case Card
 * Structured case: title, description, key benefits.
 * Used on Use Cases page.
 */
export default function UseCaseCard({
  title,
  description,
  benefits = [],
  href,
  className = '',
}) {
  return (
    <div
      className={`
        rounded-lg p-6
        bg-neutral-900/50 border border-neutral-800
        transition-all duration-200 ease-smooth
        hover:border-neutral-700
        ${className}
      `}
    >
      <h3 className="text-h4 font-display text-neutral-100 mb-3">
        {title}
      </h3>
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
        <a
          href={href}
          className="text-caption text-accent hover:text-accent-hover transition-colors"
        >
          Learn more →
        </a>
      )}
    </div>
  );
}
