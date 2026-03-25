import { SiteSearchInput } from '../../atoms/SiteSearchInput';
import { SearchSubmitButton } from '../../atoms/SearchSubmitButton';

export interface SiteSearchProps {
  action?: string;
  inputName?: string;
  placeholder?: string;
  toggleAriaLabel?: string;
}

export function SiteSearch({
  action = '/find',
  inputName = 'query',
  placeholder = 'Search our site',
  toggleAriaLabel = 'Open site search dropdown',
}: SiteSearchProps) {
  return (
    <div className="site-search" role="search">
      <div className="site-search-wrapper search-autocomplete">
        <form action={action} method="get">
          <label htmlFor="site-search-box" className="show-for-sr">Search sheffield.ac.uk</label>
          <div className="search-autocomplete__inputs">
            <SiteSearchInput
              id="site-search-box"
              name={inputName}
              placeholder={placeholder}
              ariaLabel={placeholder}
            />
            <input type="hidden" name="f.Tabs|AllDocumentsFill" value="All results" />
          </div>
          <SearchSubmitButton ariaLabel="Site search" />
        </form>
      </div>
      <button
        className="site-search-toggle hide-for-medium"
        type="button"
        aria-label={toggleAriaLabel}
      >
        <i className="fas fa-search"></i>
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
}
