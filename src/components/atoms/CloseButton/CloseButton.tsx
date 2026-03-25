export interface CloseButtonProps {
  label?: string;
  ariaLabel?: string;
  onClick?: () => void;
}

export function CloseButton({
  label = 'Close menu ×',
  ariaLabel = 'Close menu',
  onClick,
}: CloseButtonProps) {
  return (
    <button
      className="close-button"
      aria-label={ariaLabel}
      type="button"
      data-close=""
      onClick={onClick}
    >
      <span aria-hidden="true">{label}</span>
    </button>
  );
}
