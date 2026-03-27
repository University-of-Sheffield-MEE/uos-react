export interface AtozListItem {
  label: string;
  href: string;
}

export interface AtozListProps {
  items: Array<AtozListItem>;
}

export function AtozList({ items }: AtozListProps) {
  return (
    <div className="atoz-list">
      {items.map((item) => (
        <span key={item.href}>
          <a href={item.href}>{item.label}</a>
        </span>
      ))}
    </div>
  );
}
