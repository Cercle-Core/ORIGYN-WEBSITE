/**
 * Container
 * Content max-width wrapper. Use inside Section for readable measure.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.className]
 */
export default function Container({ children, className = '' }) {
  return (
    <div className={`max-w-[var(--max-content)] mx-auto px-4 md:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
