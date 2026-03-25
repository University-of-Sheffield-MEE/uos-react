interface NavLink {
  label: string;
  href: string;
  featured?: boolean;
}

interface NavGroup {
  heading: {
    label: string;
    href: string;
    featured?: boolean;
  };
  links: NavLink[];
}

interface NavItem {
  label: string;
  href?: string;
  groups: NavGroup[];
}

export interface SiteHeaderProps {
  logoHref?: string;
  logoSrc?: string;
  logoSrcDesktop?: string;
  logoAlt?: string;
  logoClassName?: string;
  navItems: NavItem[];
}

export function SiteHeader({
  logoHref = '/?home',
  logoSrc = '/themes/custom/uos_public/images/logos/uos-crest.svg',
  logoSrcDesktop,
  logoAlt = 'University of Sheffield homepage',
  logoClassName = 'logo',
  navItems,
}: SiteHeaderProps) {
  return (
    <header className="site-header" role="banner" aria-label="Site header">
      <div className="header row">
        <div className={logoClassName}>
          <a href={logoHref}>
            <picture>
              {logoSrcDesktop && (
                <source media="(min-width: 768px)" srcSet={logoSrcDesktop} />
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
                  {navItems.map((item, i) => (
                    <li key={i}>
                      {item.href ? <a href={item.href}>{item.label}</a> : item.label}
                      {item.groups.length > 0 && (
                        <ul>
                          {item.groups.map((group, j) => (
                            <li key={j}>
                              <a
                                className={group.heading.featured ? 'uoslink' : undefined}
                                href={group.heading.href}
                              >
                                {group.heading.label}
                              </a>
                              {group.links.length > 0 && (
                                <ul>
                                  {group.links.map((link, k) => (
                                    <li key={k}>
                                      <a
                                        className={link.featured ? 'uoslink' : undefined}
                                        href={link.href}
                                      >
                                        {link.label}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
