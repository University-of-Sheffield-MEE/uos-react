export interface RelLinkProps {
  href: string;
  label: string;
  title?: string;
}

export function RelLink({ href, label, title }: RelLinkProps) {
  return (
    <a href={href} title={title} className="rellink">
      <div className="linktext">{label}</div>
      <div className="arrow"><i className="fas fa-arrow-right"></i></div>
    </a>
  );
}
