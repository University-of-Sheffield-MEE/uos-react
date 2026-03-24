interface MenuItem {
  label: string;
  href: string;
}

export interface BottomBarProps {
  menuItems?: MenuItem[];
  copyrightText?: string;
}

const defaultMenuItems: MenuItem[] = [
  { label: 'Feedback', href: 'https://www.sheffield.ac.uk/contact/comments' },
  { label: 'Privacy', href: 'https://www.sheffield.ac.uk/privacy' },
  { label: 'Accessibility', href: 'https://www.sheffield.ac.uk/accessibility' },
  { label: 'FOI', href: 'https://www.sheffield.ac.uk/foi' },
  { label: 'Modern slavery statement', href: 'https://www.sheffield.ac.uk/procurement/modern-slavery' },
];

export function BottomBar({
  menuItems = defaultMenuItems,
  copyrightText = '© 2026 The University of Sheffield',
}: BottomBarProps) {
  return (
    <div className="bottom-bar panel">
      <div className="row">
        <div className="large-7 columns">
          <nav role="navigation">
            <ul className="menu">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="large-5 columns copyright">
          {copyrightText}
        </div>
      </div>
    </div>
  );
}
