export interface EvLinkProps {
  href: string;
  label: string;
}

export function EvLink({ href, label }: EvLinkProps) {
  return (
    <div className="ev-link">
      <i className="fa fa-sm fa-ticket-alt" aria-hidden="true"></i>
      <a href={href} target="_blank" rel="noreferrer">{label}</a>
    </div>
  );
}
