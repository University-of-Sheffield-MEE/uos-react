export interface EventButtonProps {
  href: string;
  label: string;
}

export function EventButton({ href, label }: EventButtonProps) {
  return (
    <div className="eventbutton">
      <a href={href}>{label}</a>
    </div>
  );
}
