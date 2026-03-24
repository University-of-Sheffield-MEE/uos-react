import type { ReactNode } from 'react';

interface NavChild {
  label: string;
  href: string;
  children?: Array<{ label: string; href: string }>;
}

interface NavItem {
  label: string;
  href?: string;
  children?: NavChild[];
}

export interface OffCanvasWrapperProps {
  sectionTitle: string;
  sectionTitleHref: string;
  navItems: NavItem[];
  children: ReactNode;
}

function renderNavItems(items: NavItem[] | NavChild[]): ReactNode {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item.href ? <a href={item.href}>{item.label}</a> : item.label}
          {item.children && item.children.length > 0 && renderNavItems(item.children)}
        </li>
      ))}
    </ul>
  );
}

export function OffCanvasWrapper({
  sectionTitle,
  sectionTitleHref,
  navItems,
  children,
}: OffCanvasWrapperProps) {
  return (
    <div className="off-canvas-wrapper">
      <div
        className="inner-wrap off-canvas-wrapper-inner"
        id="inner-wrap"
        data-off-canvas-wrapper=""
      >
        <aside
          id="left-off-canvas-menu"
          className="off-canvas left-off-canvas-menu position-left"
          role="complementary"
          data-off-canvas=""
          data-transition="overlap"
        >
          <div className="region region-left_off_canvas">
            <button
              className="close-button"
              aria-label="Close menu"
              type="button"
              data-close=""
            >
              <span aria-hidden="true">Close menu ×</span>
            </button>
            <div className="section-navigation">
              <div className="section-title-holder">
                <h4 className="off-canv">
                  <a href={sectionTitleHref} hrefLang="en">
                    {sectionTitle}
                  </a>
                </h4>
              </div>
              {renderNavItems(navItems)}
            </div>
          </div>
        </aside>
        <div className="off-canvas-content" data-off-canvas-content="">
          {children}
        </div>
      </div>
    </div>
  );
}
