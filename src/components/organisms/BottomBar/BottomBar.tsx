interface BottomBarLink {
  label: string;
  href: string;
}

export interface BottomBarProps {
  links?: BottomBarLink[];
  copyrightText?: string;
}

const defaultLinks: BottomBarLink[] = [
  { label: 'Feedback', href: 'https://www.sheffield.ac.uk/contact/comments' },
  { label: 'Privacy', href: 'https://www.sheffield.ac.uk/privacy' },
  { label: 'Accessibility', href: 'https://www.sheffield.ac.uk/accessibility' },
  { label: 'FOI', href: 'https://www.sheffield.ac.uk/foi' },
  { label: 'Modern slavery statement', href: 'https://www.sheffield.ac.uk/procurement/modern-slavery' },
];

export function BottomBar({
  links = defaultLinks,
  copyrightText = '© 2026 The University of Sheffield',
}: BottomBarProps) {
  return (
    <div className="bottom-bar panel">
      <div className="row">
        <div className="large-7 columns">
          <div className="region region-footer_first">
            <nav
              role="navigation"
              aria-labelledby="block-uos-public-footer-menu"
              id="block-uos-public-footer"
              className="block-uos-public-footer"
            >
              <h2
                className="block-title visually-hidden"
                id="block-uos-public-footer-menu"
              >
                Footer menu
              </h2>
              <ul className="menu">
                {links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        <div className="large-5 columns copyright">{copyrightText}</div>
      </div>
    </div>
  );
}
