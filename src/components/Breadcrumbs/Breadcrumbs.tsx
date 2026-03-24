export interface BreadcrumbItem {
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
        const isLast = index === items.length - 1;
        return isLast ? (
          <li key={index} className="current">{item.label}</li>
        ) : (
          <li key={index}><a href={item.href}>{item.label}</a></li>
        );
      })}
    </ul>
  );
}
