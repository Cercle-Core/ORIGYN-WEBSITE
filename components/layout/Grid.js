/**
 * Grid System
 * 12-column grid on desktop, 8 on tablet, 4 on mobile.
 * Uses design tokens: gutter (24px).
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.className]
 */
export default function Grid({ children, className = '' }) {
  return (
    <div
      className={`
        grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12
        gap-6
        max-w-[var(--max-content)] mx-auto
        ${className}
      `}
    >
      {children}
    </div>
  );
}
