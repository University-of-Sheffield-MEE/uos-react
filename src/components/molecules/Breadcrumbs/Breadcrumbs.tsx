interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: Array<BreadcrumbItem>;
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <ul className="breadcrumbs">
      {items.map((item, index) => {
        const isCurrent = index === items.length - 1;
        return (
          <li key={index} className={isCurrent ? 'current' : undefined}>
            {isCurrent ? item.label : <a href={item.href}>{item.label}</a>}
          </li>
        );
      })}
    </ul>
  );
}
