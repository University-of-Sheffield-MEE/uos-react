export interface EventDetailsProps {
  variant?: 'ev-date' | 'ev-venue' | 'ev-time' | 'ev-ticket-details' | null;
  iconClass: string;
  text: string;
  ariaLabel?: string;
}

export function EventDetails({
  variant = null,
  iconClass,
  text,
  ariaLabel,
}: EventDetailsProps) {
  return (
    <div
      className={`event-details${variant ? ` ${variant}` : ''}`}
      aria-label={ariaLabel}
    >
      <i className={iconClass} aria-hidden="true"></i>
      <span>{text}</span>
    </div>
  );
}
