export interface EventCardLinkProps {
  imageSrc: string;
  imageAlt: string;
  href: string;
  title: string;
  linkTitle?: string;
  date: string;
  time?: string;
  venue?: string;
  venueCombinedWithDate?: boolean;
  showArrowInTitle?: boolean;
}

export function EventCardLink({
  imageSrc,
  imageAlt,
  href,
  title,
  linkTitle,
  date,
  time,
  venue,
  venueCombinedWithDate = false,
  showArrowInTitle = false,
}: EventCardLinkProps) {
  return (
    <div className="event-card-link">
      <img loading="lazy" src={imageSrc} alt={imageAlt} />
      <div className="details-flex">
        <div className="details">
          <h2 className="field-ev-title">
            <a href={href} title={linkTitle}>
              {title}
              {showArrowInTitle && (
                <i className="fas fa-arrow-right" aria-hidden="true"></i>
              )}
            </a>
          </h2>
          {venueCombinedWithDate ? (
            <div className="event-details ev-date">
              <i className="fas fa-calendar-alt" aria-hidden="true"></i>
              <span>{date}</span>
              {venue && (
                <div className="event-details ev-venue" aria-label="Event Venue">
                  <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                  <span>{venue}</span>
                </div>
              )}
            </div>
          ) : (
            <>
              <div className="event-details ev-date">
                <i className="fas fa-calendar-alt"></i>
                <span>{date}</span>
              </div>
              {time && (
                <div className="event-details ev-time">
                  <i className="fas fa-clock"></i>
                  <span>{time}</span>
                </div>
              )}
              {venue && (
                <div className="event-details ev-venue">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>{venue}</span>
                </div>
              )}
            </>
          )}
        </div>
        <div className="link-arrow">
          <div className="scarrow">
            <i className="fas fa-sm fa-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
