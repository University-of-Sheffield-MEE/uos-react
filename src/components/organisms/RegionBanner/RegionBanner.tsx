import { SectionTitle } from '../../molecules/SectionTitle';

interface NavLeafItem {
  label: string;
  href?: string;
  isUosLink?: boolean;
}

interface NavLevel2Item {
  label: string;
  href?: string;
  isUosLink?: boolean;
  children?: NavLeafItem[];
}

interface NavTopLevelItem {
  label: string;
  href?: string;
  isUosLink?: boolean;
  children?: NavLevel2Item[];
}

export interface RegionBannerProps {
  sectionLabel: string;
  sectionHref: string;
  items: NavTopLevelItem[];
}

function NavLink({ item }: { item: NavLeafItem }) {
  if (item.href) {
    return (
      <a
        className={item.isUosLink ? 'uoslink' : undefined}
        href={item.href}
      >
        {item.label}
      </a>
    );
  }
  return <>{item.label}</>;
}

export function RegionBanner({ sectionLabel, sectionHref, items }: RegionBannerProps) {
  return (
    <div className="region region-banner">
      <div
        className="views-element-container block-views-block-section-navigation-block-1 block block-views block-views-blocksection-navigation-block-1"
        id="block-views-block-section-navigation-block-1"
      >
        <div>
          <div className="section-navigation">
            <div>
              <div className="views-field views-field-label">
                <div className="field-content section-title row">
                  <SectionTitle sectionLabel={sectionLabel} sectionHref={sectionHref} />
                </div>
              </div>
              <div className="views-field views-field-field-section-navigation">
                <div className="field-content">
                  <div className="block block-layout-builder block-field-blockparagraphfrom-libraryfield-reusable-paragraph">
                    <div className="paragraph paragraph--type--para-section-nav paragraph--view-mode--default">
                      <nav role="navigation" className="desktop-section-navigation">
                        <ul>
                          {items.map((topItem, topIdx) => (
                            <li key={topIdx}>
                              <NavLink item={topItem} />
                              {topItem.children && topItem.children.length > 0 && (
                                <ul>
                                  {topItem.children.map((level2Item, l2Idx) => (
                                    <li key={l2Idx}>
                                      <NavLink item={level2Item} />
                                      {level2Item.children && level2Item.children.length > 0 && (
                                        <ul>
                                          {level2Item.children.map((leafItem, leafIdx) => (
                                            <li key={leafIdx}>
                                              <NavLink item={leafItem} />
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
