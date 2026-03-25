export interface SearchSubmitButtonProps {
  ariaLabel?: string;
}

export function SearchSubmitButton({
  ariaLabel = 'Site search',
}: SearchSubmitButtonProps) {
  return (
    <button type="submit" className="search-submit-button" aria-label={ariaLabel}>
      <i className="fas fa-search"></i>
    </button>
  );
}
