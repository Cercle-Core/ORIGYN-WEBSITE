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
export default function Section({
  children,
  divider = false,
  background = 'default',
  className = '',
  id,
  density = 'default',
}) {
  const bgClass = {
    default: 'bg-transparent',
    'primary-800': 'bg-primary-800',
    'primary-900': 'bg-primary-900',
    'neutral-900': 'bg-neutral-900',
  }[background] || 'bg-transparent';

  const densityClass = {
    hero: 'py-24 md:py-32',
    default: 'py-16 md:py-24',
    compact: 'py-12 md:py-16',
  }[density] || 'py-16 md:py-24';

  return (
    <section
      id={id}
      className={`
        w-full max-w-[var(--max-content-wide)] mx-auto
        px-4 md:px-6 lg:px-8
        ${densityClass}
        ${bgClass}
        ${divider ? 'border-b border-neutral-800' : ''}
        ${className}
      `}
    >
      {children}
    </section>
  );
}
