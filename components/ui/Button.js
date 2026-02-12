export default function Button({
  as = 'button',
  href,
  variant = 'primary',
  disabled = false,
  children,
  className = '',
  ...props
}) {
  const Comp = as;
  const classes = `btn btn--${variant} ${className}`.trim();

  if (Comp === 'a') {
    return (
      <a
        href={disabled ? undefined : href}
        className={classes}
        aria-disabled={disabled}
        data-disabled={disabled ? 'true' : 'false'}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Comp className={classes} disabled={disabled} {...props}>
      {children}
    </Comp>
  );
}
