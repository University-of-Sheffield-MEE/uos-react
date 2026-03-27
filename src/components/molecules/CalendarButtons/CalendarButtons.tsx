export interface CalendarButtonsProps {
  googleCalendarHref: string;
  icalHref: string;
  outlookHref: string;
}

export function CalendarButtons({
  googleCalendarHref,
  icalHref,
  outlookHref,
}: CalendarButtonsProps) {
  return (
    <div className="calendar-buttons">
      <a href={googleCalendarHref}>
        <i className="fab fa-google"></i>
        &nbsp; Add to Google Calendar
      </a>
      <br />
      <a href={icalHref}>
        <i className="fab fa-apple"></i>
        &nbsp; Add to Calendar
      </a>
      <br />
      <a href={outlookHref}>
        <i className="fab fa-microsoft"></i>
        &nbsp; Add to Outlook
      </a>
    </div>
  );
}
