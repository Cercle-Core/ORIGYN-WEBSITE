/**
 * Section Wrapper
 * Reusable layout container for all page sections.
 * Uses design tokens: max-width, padding, optional background/divider.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {boolean} [props.divider] - Add bottom border
 * @param {string} [props.background] - 'default' | 'primary-800' | 'neutral-900'
 * @param {string} [props.className]
 */
export default function Section({ children, divider = false, background = 'default', className = '', id }) {
  const bgClass = {
    default: 'bg-transparent',
    'primary-800': 'bg-primary-800',
    'primary-900': 'bg-primary-900',
    'neutral-900': 'bg-neutral-900',
  }[background] || 'bg-transparent';

  return (
    <section
      id={id}
      className={`
        w-full max-w-[var(--max-content-wide)] mx-auto
        px-4 md:px-6 lg:px-8
        py-16 md:py-24
        ${bgClass}
        ${divider ? 'border-b border-neutral-800' : ''}
        ${className}
      `}
    >
      {children}
    </section>
  );
}
