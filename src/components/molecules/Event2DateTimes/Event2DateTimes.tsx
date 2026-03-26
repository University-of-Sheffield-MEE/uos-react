export interface Event2DateTimesProps {
  isEventListing?: boolean;
  hasTakenPlace?: boolean;
  dateTimeText?: string;
  isEventToday?: boolean;
  registrationHref?: string;
  registrationLabel?: string;
  googleCalendarHref?: string;
  appleCalendarHref?: string;
  outlookCalendarHref?: string;
}

export function Event2DateTimes({
  isEventListing = true,
  hasTakenPlace = false,
  dateTimeText,
  isEventToday = false,
  registrationHref,
  registrationLabel,
  googleCalendarHref,
  appleCalendarHref,
  outlookCalendarHref,
}: Event2DateTimesProps) {
  return (
    <div className={`event2-date-times${isEventListing ? ' event2-date-times--event-listing' : ''}`}>
      <h2>Event details</h2>
      {hasTakenPlace ? (
        <p>This event has taken place.</p>
      ) : (
        <ul>
          <li className={`event-time ev-date${isEventToday ? ' event-today' : ''}`}>
            <div className="ev-singledate" aria-label="Event date and time">
              <i className="fas fa-sm fa-calendar"></i> {dateTimeText}
              <button className={`add-to-cal${isEventToday ? ' event-today' : ''}`}>Add to calendar</button>
            </div>
            {registrationHref && (
              <div className="ev-link">
                <i className="fa fa-sm fa-ticket-alt" aria-hidden="true"></i>{' '}
                <a href={registrationHref} target="_blank" rel="noreferrer">{registrationLabel}</a>
              </div>
            )}
          </li>
          <div className="calendar-buttons">
            {googleCalendarHref && (
              <>
                <a href={googleCalendarHref}>
                  <i className="fab fa-google"></i>&nbsp; Add to Google Calendar
                </a>
                <br />
              </>
            )}
            {appleCalendarHref && (
              <>
                <a href={appleCalendarHref}>
                  <i className="fab fa-apple"></i>&nbsp; Add to Calendar
                </a>
                <br />
              </>
            )}
            {outlookCalendarHref && (
              <a href={outlookCalendarHref}>
                <i className="fab fa-microsoft"></i>&nbsp; Add to Outlook
              </a>
            )}
          </div>
        </ul>
      )}
    </div>
  );
}
