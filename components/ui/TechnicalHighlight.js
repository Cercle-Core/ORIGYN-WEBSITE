/**
 * Technical Highlight Panels
 * For: key architectural claims, core system advantages, data pipeline flow
 * Structure: border accent, title, technical explanation, optional mini diagram
 *
 * When to use: Architecture page, technical credibility sections
 * When NOT to use: General marketing copy (use Card instead)
 */
export default function TechnicalHighlight({
  title,
  children,
  diagram,
  className = '',
}) {
  return (
    <div
      className={`
        rounded-lg p-6
        bg-neutral-900/30 border-l-4 border-accent
        ${className}
      `}
    >
      <h4 className="text-h4 font-display text-neutral-100 mb-3">
        {title}
      </h4>
      <div className="text-body text-neutral-400 space-y-2">
        {children}
      </div>
      {diagram && (
        <div className="mt-4 p-4 bg-primary-800/50 rounded border border-neutral-800">
          {diagram}
        </div>
      )}
    </div>
  );
}
