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
        group block rounded-lg p-6 h-full
        bg-neutral-900/50 border border-neutral-800
        transition-all duration-200 ease-smooth
        hover:border-accent/30 hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.15)]
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900
        ${className}
      `}
    >
      <h3 className="text-h4 font-display text-neutral-100 mb-2">
        {title}
      </h3>
      <p className="text-body text-neutral-400 mb-4">
        {problem}
      </p>
      <div className="pt-3 mt-auto border-t border-neutral-800/80">
        <span className="inline-flex items-center gap-2 text-caption text-accent transition-all duration-200 group-hover:text-accent-hover group-hover:translate-x-0.5">
          Learn more
          <span aria-hidden="true">→</span>
        </span>
      </div>
    </a>
  );
}
