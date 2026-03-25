interface MegaNavLeafItem {
  label: string;
  href?: string;
  isUosLink?: boolean;
}

interface MegaNavSubItem {
  label: string;
  href?: string;
  isUosLink?: boolean;
  children?: MegaNavLeafItem[];
}

interface MegaNavTopItem {
  label: string;
  href?: string;
  children?: MegaNavSubItem[];
}

export interface MegaNavProps {
  items: MegaNavTopItem[];
}

export function MegaNav({ items }: MegaNavProps) {
  return (
    <div className="meganav">
      <div className="region region-header">
        <div
          id="block-globalnav"
          className="block-globalnav block block-fixed-block-content block-fixed-block-contentglobal-nav"
        >
          <nav className="block-uos-globalnav" role="navigation" aria-label="Global menu">
            <ul>
              {items.map((topItem, topIndex) => (
                <li key={topIndex}>
                  {topItem.href ? (
                    <a href={topItem.href}>{topItem.label}</a>
                  ) : (
                    topItem.label
                  )}
                  {topItem.children && topItem.children.length > 0 && (
                    <ul>
                      {topItem.children.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          {subItem.href ? (
                            <a
                              className={subItem.isUosLink ? 'uoslink' : undefined}
                              href={subItem.href}
                            >
                              {subItem.label}
                            </a>
                          ) : (
                            subItem.label
                          )}
                          {subItem.children && subItem.children.length > 0 && (
                            <ul>
                              {subItem.children.map((leafItem, leafIndex) => (
                                <li key={leafIndex}>
                                  <a
                                    className={leafItem.isUosLink ? 'uoslink' : undefined}
                                    href={leafItem.href}
                                  >
                                    {leafItem.label}
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
  );
}
