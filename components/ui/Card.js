/**
 * Feature Card
 * Used for: capabilities, use cases, platform layers
 * Variants: compact, large, highlighted
 *
 * When to use: Feature grids, capability lists
 * When NOT to use: Navigation tiles (use different card style)
 */
export default function Card({
  children,
  variant = 'default',
  icon,
  title,
  description,
  href,
  linkLabel = 'Learn more',
  className = '',
}) {
  const variants = {
    default: 'bg-neutral-900/50 border border-neutral-800',
    compact: 'bg-neutral-900/30 border border-neutral-800 p-4',
    large: 'bg-neutral-900/50 border border-neutral-800 p-8',
    featured: 'bg-gradient-to-b from-primary-700/60 to-neutral-900/80 border border-accent/30 shadow-[0_0_35px_-18px_rgba(59,130,246,0.5)]',
    highlighted: 'bg-accent/15 border border-accent/30',
  };

  return (
    <div
      className={`
        group rounded-lg p-6 h-full
        transition-all duration-200 ease-smooth
        hover:border-neutral-700
        ${variants[variant]}
        ${className}
      `}
    >
      {icon && (
        <div className="mb-4 text-accent">
          {icon}
        </div>
      )}
      {title && (
        <h3 className="text-h4 font-display text-neutral-100 mb-2">
          {title}
        </h3>
      )}
      {description && (
        <p className="text-body text-neutral-400 mb-4">
          {description}
        </p>
      )}
      {children}
      {href && (
        <div className="pt-3 mt-auto border-t border-neutral-800/80">
          <a
            href={href}
            className="inline-flex items-center gap-2 text-caption text-accent transition-all duration-200 hover:text-accent-hover group-hover:translate-x-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900 rounded"
          >
            {linkLabel}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      )}
    </div>
  );
}
