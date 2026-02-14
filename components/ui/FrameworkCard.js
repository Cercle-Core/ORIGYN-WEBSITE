/**
 * Framework Card
 * Framework name, use case, optional link.
 * Used on Developers page for AI frameworks.
 */
export default function FrameworkCard({
  name,
  useCase,
  href,
  className = '',
}) {
  const cardClass = `
    group rounded-lg p-6 h-full
    bg-neutral-900/50 border border-neutral-800
    transition-all duration-200 ease-smooth
    hover:border-neutral-700
    ${className}
  `;

  const content = (
    <>
      <h4 className="text-h4 font-display text-neutral-100 mb-2">
        {name}
      </h4>
      <p className="text-body text-neutral-400 mb-4">
        {useCase}
      </p>
      {href && (
        <div className="pt-3 mt-auto border-t border-neutral-800/80">
          <span className="inline-flex items-center gap-2 text-caption text-accent transition-all duration-200 group-hover:text-accent-hover group-hover:translate-x-0.5">
            Documentation
            <span aria-hidden="true">→</span>
          </span>
        </div>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`${cardClass} block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900`}
      >
        {content}
      </a>
    );
  }

  return <div className={cardClass}>{content}</div>;
}
