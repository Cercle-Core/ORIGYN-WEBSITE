/**
 * Industry Tiles
 * Card-based: industry title, short problem statement, "Learn more" link
 * Hover: subtle glow or border shift
 *
 * When to use: Industries page, use case grids
 * When NOT to use: Platform capabilities (use Card instead)
 */
export default function IndustryTile({ title, problem, href, className = '' }) {
  return (
    <a
      href={href}
      className={`
        block rounded-lg p-6
        bg-neutral-900/50 border border-neutral-800
        transition-all duration-200 ease-smooth
        hover:border-accent/30 hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.15)]
        ${className}
      `}
    >
      <h3 className="text-h4 font-display text-neutral-100 mb-2">
        {title}
      </h3>
      <p className="text-body text-neutral-400 mb-4">
        {problem}
      </p>
      <span className="text-caption text-accent hover:text-accent-hover transition-colors">
        Learn more →
      </span>
    </a>
  );
}
