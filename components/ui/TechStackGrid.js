/**
 * Tech Stack Grid
 * Logos/icons + labels for languages, frameworks, deployment.
 * Used on Developers page.
 */
export default function TechStackGrid({ items = [], title, className = '' }) {
  return (
    <div className={className}>
      {title && (
        <h3 className="text-h4 font-display text-neutral-100 mb-4">
          {title}
        </h3>
      )}
      <div className="flex flex-wrap gap-3">
        {items.map((item, i) => (
          <div
            key={i}
            className="
              inline-flex items-center gap-2
              px-4 py-2
              rounded-md
              bg-neutral-900/80 border border-neutral-800
              text-body text-neutral-300
              transition-colors hover:border-neutral-700
            "
          >
            {item.icon && (
              <span className="text-accent font-mono text-caption">
                {item.icon}
              </span>
            )}
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
