/**
 * CTA Button
 * Variants: primary, secondary, ghost, danger
 * States: default, hover, active, disabled
 *
 * When to use: CTAs, navigation actions, form submissions
 * When NOT to use: Links that navigate (use Link instead)
 */
export default function Button({
  children,
  variant = 'primary',
  disabled = false,
  className = '',
  ...props
}) {
  const base = `
    inline-flex items-center justify-center
    h-10 px-6
    text-body font-medium
    rounded-md
    transition-all duration-200 ease-smooth
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-900
  `;

  const variants = {
    primary: `
      bg-accent text-white
      hover:bg-accent-hover
      active:scale-[0.98]
      disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100
      focus:ring-accent
    `,
    secondary: `
      border border-neutral-600 bg-transparent text-neutral-100
      hover:border-neutral-500 hover:bg-neutral-800/50
      active:scale-[0.98]
      disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100
      focus:ring-neutral-500
    `,
    ghost: `
      bg-transparent text-neutral-300
      hover:bg-neutral-800/50 hover:text-neutral-100
      active:scale-[0.98]
      disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100
      focus:ring-neutral-500
    `,
    danger: `
      bg-error/90 text-white
      hover:bg-error
      active:scale-[0.98]
      disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100
      focus:ring-error
    `,
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
