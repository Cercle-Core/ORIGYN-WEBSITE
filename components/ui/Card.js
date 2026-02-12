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
  className = '',
}) {
  const variants = {
    default: 'bg-neutral-900/50 border border-neutral-800',
    compact: 'bg-neutral-900/30 border border-neutral-800 p-4',
    large: 'bg-neutral-900/50 border border-neutral-800 p-8',
    highlighted: 'bg-accent/15 border border-accent/30',
  };

  return (
    <div
      className={`
        rounded-lg p-6
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
