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
  const content = (
    <div
      className={`
        rounded-lg p-6
        bg-neutral-900/50 border border-neutral-800
        transition-all duration-200 ease-smooth
        hover:border-neutral-700
        ${className}
      `}
    >
      <h4 className="text-h4 font-display text-neutral-100 mb-2">
        {name}
      </h4>
      <p className="text-body text-neutral-400 mb-4">
        {useCase}
      </p>
      {href && (
        <a
          href={href}
          className="text-caption text-accent hover:text-accent-hover transition-colors"
        >
          Documentation →
        </a>
      )}
    </div>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }
  return content;
}
