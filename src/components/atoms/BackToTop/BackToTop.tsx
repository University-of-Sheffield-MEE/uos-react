export interface BackToTopProps {
  ariaLabel?: string;
  onClick?: () => void;
}

export function BackToTop({
  ariaLabel = 'Scroll to top of page',
  onClick,
}: BackToTopProps) {
  return (
    <button className="backtotop" aria-label={ariaLabel} onClick={onClick}>
      <i className="fas fa-angle-up fa-2x" aria-hidden="true"></i>
    </button>
  );
}
