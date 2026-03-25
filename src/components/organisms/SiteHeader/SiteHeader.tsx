import { MegaNav } from '../MegaNav';

interface NavLeafItem {
  label: string;
  href: string;
  title?: string;
}

interface NavSubItem {
  label: string;
  href?: string;
  children?: NavLeafItem[];
}

interface NavTopItem {
  label: string;
  href?: string;
  children?: NavSubItem[];
}

export interface SiteHeaderProps {
  logoHref?: string;
  logoSrc?: string;
  logoAlt?: string;
  logoSrcsetDesktop?: string;
  isSubsiteLogo?: boolean;
  navItems: NavTopItem[];
}

export function SiteHeader({
  logoHref = '/?home',
  logoSrc = '/themes/custom/uos_public/images/logos/uos-crest.svg',
  logoAlt = 'University of Sheffield homepage',
  logoSrcsetDesktop = '/themes/custom/uos_public/images/logos/uos-crest.svg',
  isSubsiteLogo = false,
  navItems,
}: SiteHeaderProps) {
  return (
    <header className="site-header" role="banner" aria-label="Site header">
      <div className="header row">
        <div className={`logo${isSubsiteLogo ? ' mgmt-logo' : ''}`}>
          <a href={logoHref}>
            <picture>
              {!isSubsiteLogo && (
                <source media="(min-width: 768px)" srcSet={logoSrcsetDesktop} />
              )}
              <img className="resp" alt={logoAlt} src={logoSrc} />
            </picture>
          </a>
        </div>
        <MegaNav items={navItems} />
      </div>
    </header>
  );
}
