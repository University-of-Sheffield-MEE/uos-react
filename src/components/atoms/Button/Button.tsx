export interface ButtonProps {
  label: string;
  href?: string;
  as?: 'a' | 'button' | 'input';
  primary?: boolean;
  success?: boolean;
  menu?: boolean;
  radius?: boolean;
  showBurgerIcon?: boolean;
  role?: string;
  dataToggle?: string;
  ariaExpanded?: boolean;
  ariaControls?: string;
  value?: string;
}

export function Button({
  label,
  href,
  as: Tag = 'a',
  primary = false,
  success = false,
  menu = false,
  radius = false,
  showBurgerIcon = false,
  role,
  dataToggle,
  ariaExpanded,
  ariaControls,
  value,
}: ButtonProps) {
  const className =
    `button${primary ? ' primary' : ''}${success ? ' success' : ''}${menu ? ' menu' : ''}${radius ? ' radius' : ''}`;

  if (Tag === 'input') {
    return (
      <input
        className={className}
        type="submit"
        value={value ?? label}
        role={role}
        aria-expanded={ariaExpanded}
        aria-controls={ariaControls}
      />
    );
  }

  if (Tag === 'button') {
    return (
      <button
        className={className}
        role={role}
        aria-expanded={ariaExpanded}
        aria-controls={ariaControls}
      >
        {label}
        {showBurgerIcon && <span className="section-title-burger" aria-hidden="true"></span>}
      </button>
    );
  }

  return (
    <a
      className={className}
      href={href}
      role={role}
      data-toggle={dataToggle}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
    >
      {label}
      {showBurgerIcon && <span className="section-title-burger" aria-hidden="true"></span>}
    </a>
  );
}
