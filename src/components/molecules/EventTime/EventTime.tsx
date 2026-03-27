export interface EventTimeProps {
  dateText: string;
  isMultiDate?: boolean;
  isToday?: boolean;
  registrationHref?: string;
  registrationLabel?: string;
}

export function EventTime({
  dateText,
  isMultiDate = false,
  isToday = false,
  registrationHref,
  registrationLabel,
}: EventTimeProps) {
  const dateClassName = isMultiDate ? 'ev-multidate' : 'ev-singledate';

  return (
    <li className={`event-time${isToday ? ' event-today' : ''}`}>
      <div className={dateClassName} aria-label="Event date and time">
        <i className="fas fa-sm fa-calendar"></i>
        {' '}{dateText}{' '}
        <button className={`add-to-cal${isToday ? ' event-today' : ''}`}>Add to calendar</button>
      </div>
      {registrationHref && (
        <div className="ev-link">
          <i className="fa fa-sm fa-ticket-alt" aria-hidden="true"></i>
          <a href={registrationHref} target="_blank" rel="noreferrer">{registrationLabel}</a>
        </div>
      )}
    </li>
  );
}
