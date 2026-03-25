export interface UosButtonProps {
  href: string;
  label: string;
  title?: string;
}

export function UosButton({ href, label, title }: UosButtonProps) {
  return (
    <a className="uosbutton" href={href} title={title}>
      {label}
    </a>
  );
}
