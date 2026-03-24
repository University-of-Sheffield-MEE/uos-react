export function SiteSearch() {
  return (
    <div className="site-search" role="search">
      <div className="site-search-wrapper search-autocomplete">
        <form action="/find" method="get">
          <label htmlFor="site-search-box" className="show-for-sr">Search sheffield.ac.uk</label>
          <div className="search-autocomplete__inputs">
            <input
              id="site-search-box"
              className="site-search-input"
              type="search"
              name="query"
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
  );
}
