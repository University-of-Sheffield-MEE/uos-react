interface PaginationItem {
  label: string;
  href: string;
  isCurrent?: boolean;
  isNext?: boolean;
  isLast?: boolean;
  isEllipsis?: boolean;
}

export interface PaginationProps {
  items: PaginationItem[];
}

export function Pagination({ items }: PaginationProps) {
  return (
    <ul className="pagination pager__items js-pager__items">
      {items.map((item, index) => {
        if (item.isEllipsis) {
          return (
            <li key={index} className="pager__item pager__item--ellipsis" role="presentation">
              {item.label}
            </li>
          );
        }

        if (item.isNext) {
          return (
            <li key={index} className="pager__item pager__item--next pagination-next">
              <a href={item.href} title="Go to next page" rel="next">
                <span className="show-for-sr">Next page</span>
                <span aria-hidden="true">Next ›</span>
              </a>
            </li>
          );
        }

        if (item.isLast) {
          return (
            <li key={index} className="pager__item pager__item--last">
              <a href={item.href} title="Go to last page">
                <span className="show-for-sr">Last page</span>
                <span aria-hidden="true">Last »</span>
              </a>
            </li>
          );
        }

        if (item.isCurrent) {
          return (
            <li key={index} className="pager__item is-active current">
              <a href={item.href} title="Current page" aria-current="page">
                <span className="show-for-sr">
                  Current page
                </span>
                {item.label}
              </a>
            </li>
          );
        }

        return (
          <li key={index} className="pager__item">
            <a href={item.href} title={`Go to page ${item.label}`}>
              <span className="show-for-sr">
                Page
              </span>
              {item.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
