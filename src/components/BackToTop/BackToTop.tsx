export interface BackToTopProps {}

export function BackToTop(_props: BackToTopProps) {
  return (
    <button className="backtotop" aria-label="Scroll to top of page">
      <i className="fas fa-angle-up fa-2x" aria-hidden="true"></i>
    </button>
  );
}
