export interface SiteHeaderProps {
  logoHref?: string;
  logoSrc?: string;
  logoSrcsetDesktop?: string | null;
  logoAlt?: string;
  isMgmtLogo?: boolean;
}

export function SiteHeader({
  logoHref = '/?home',
  logoSrc = '/themes/custom/uos_public/images/logos/uos-crest.svg',
  logoSrcsetDesktop = null,
  logoAlt = 'University of Sheffield homepage',
  isMgmtLogo = false,
}: SiteHeaderProps) {
  return (
    <header className="site-header" role="banner" aria-label="Site header">
      <div className="header row">
        <div className={`logo${isMgmtLogo ? ' mgmt-logo' : ''}`}>
          <a href={logoHref}>
            <picture>
              {logoSrcsetDesktop && (
                <source media="(min-width: 768px)" srcSet={logoSrcsetDesktop} />
              )}
              <img className="resp" alt={logoAlt} src={logoSrc} />
            </picture>
          </a>
        </div>
        <div className="meganav">
          <div className="region region-header">
            <div id="block-globalnav" className="block-globalnav block block-fixed-block-content block-fixed-block-contentglobal-nav">
              <nav className="block-uos-globalnav" role="navigation" aria-label="Global menu">
                <ul>
                  <li>
                    Study
                    <ul>
                      <li><a href="/study">Study at Sheffield</a></li>
                    </ul>
                  </li>
                  <li>
                    Fees and funding
                    <ul>
                      <li><a href="/undergraduate/fees">Undergraduate fees</a></li>
                    </ul>
                  </li>
                  <li>
                    Research
                    <ul>
                      <li><a href="/research">Research</a></li>
                    </ul>
                  </li>
                  <li>
                    Collaborate
                    <ul>
                      <li><a href="/collaborate">Collaborate with us</a></li>
                    </ul>
                  </li>
                  <li>
                    About
                    <ul>
                      <li><a href="/about">About the University</a></li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
