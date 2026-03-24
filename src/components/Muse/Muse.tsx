export interface MuseProps {
  searchAction?: string;
  searchQueryParam?: string;
}

export function Muse({
  searchAction = '/find',
  searchQueryParam = 'query',
}: MuseProps) {
  return (
    <div className="muse-bar-container">
      <div className="muse-bar smooth-criminal">
        <nav className="muse" aria-label="MUSE menu">
          <ul className="muse-nav">
            <li className="switcher-container">
              <a className="switcher-button" href="/">
                <i title="Home" className="fas fa-home fa-lg"></i>
              </a>
            </li>
          </ul>
        </nav>

        <div className="site-search" role="search">
          <div className="site-search-wrapper search-autocomplete">
            <form action={searchAction} method="get">
              <label htmlFor="site-search-box" className="show-for-sr">Search sheffield.ac.uk</label>
              <div className="search-autocomplete__inputs">
                <input
                  id="site-search-box"
                  className="site-search-input"
                  type="search"
                  name={searchQueryParam}
                  autoComplete="off"
                  placeholder="Search our site"
                  aria-label="Search our site"
                  aria-autocomplete="list"
                  aria-haspopup="true"
                  required
                />
                <input type="hidden" name="f.Tabs|AllDocumentsFill" value="All results" />
              </div>
              <button type="submit" aria-label="Site search">
                <i className="fas fa-search"></i>
              </button>
            </form>
          </div>
          <button className="site-search-toggle hide-for-medium" type="button" aria-label="Open site search dropdown">
            <i className="fas fa-search"></i>
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
