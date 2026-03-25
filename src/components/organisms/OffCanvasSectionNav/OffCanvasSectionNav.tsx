interface NavItemLevel3 {
  label: string;
  href?: string;
}

interface NavItemLevel2 {
  label: string;
  href?: string;
  children?: NavItemLevel3[];
}

interface NavItemLevel1 {
  label: string;
  href?: string;
  children?: NavItemLevel2[];
}

export interface OffCanvasSectionNavProps {
  sectionTitle: string;
  sectionHref: string;
  items: NavItemLevel1[];
}

function renderLevel3(items: NavItemLevel3[]) {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>
          {item.href ? (
            <a href={item.href}>{item.label}</a>
          ) : (
            item.label
          )}
        </li>
      ))}
    </ul>
  );
}

function renderLevel2(items: NavItemLevel2[]) {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>
          {item.href ? (
            <a href={item.href}>{item.label}</a>
          ) : (
            item.label
          )}
          {item.children && item.children.length > 0 && renderLevel3(item.children)}
        </li>
      ))}
    </ul>
  );
}

export function OffCanvasSectionNav({
  sectionTitle,
  sectionHref,
  items,
}: OffCanvasSectionNavProps) {
  return (
    <div className="section-navigation">
      <div>
        <div className="views-field views-field-label">
          <div className="field-content section-title row">
            <div className="section-title-holder">
              <h4 className="off-canv">
                <a href={sectionHref} hrefLang="en">{sectionTitle}</a>
              </h4>
            </div>
          </div>
        </div>
        <div className="views-field views-field-field-section-navigation">
          <div className="field-content">
            <div className="block block-layout-builder block-field-blockparagraphfrom-libraryfield-reusable-paragraph">
              <div className="paragraph paragraph--type--para-section-nav paragraph--view-mode--default">
                <nav role="navigation" className="desktop-section-navigation">
                  <ul>
                    {items.map((item, i) => (
                      <li key={i}>
                        {item.href ? (
                          <a href={item.href}>{item.label}</a>
                        ) : (
                          item.label
                        )}
                        {item.children && item.children.length > 0 && renderLevel2(item.children)}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
