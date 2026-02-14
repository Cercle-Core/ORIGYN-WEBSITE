/**
 * Tech Stack Grid
 * Logos/icons + labels for languages, frameworks, deployment.
 * Used on Developers page.
 */
export default function TechStackGrid({ items = [], title, variant = 'badges', className = '' }) {
  const isCards = variant === 'cards';

  return (
    <div className={className}>
      {title && (
        <h3 className="text-h4 font-display text-neutral-100 mb-4">
          {title}
        </h3>
      )}
      <div className={`grid gap-3 ${isCards ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5' : 'flex flex-wrap'}`}>
        {items.map((item, i) => (
          <div
            key={i}
            className={`
              inline-flex items-center gap-2
              ${isCards ? 'px-4 py-3 justify-center rounded-lg' : 'px-4 py-2 rounded-md'}
              bg-neutral-900/80 border border-neutral-800
              text-body text-neutral-300
              transition-all duration-200
              ${item.featured ? 'border-accent/35 bg-primary-800/90 text-neutral-100 shadow-[0_0_18px_-12px_rgba(59,130,246,0.6)]' : 'hover:border-neutral-700'}
            `}
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
