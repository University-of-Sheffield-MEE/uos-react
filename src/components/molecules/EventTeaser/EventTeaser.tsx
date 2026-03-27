import { TeaserThumb } from '../../atoms/TeaserThumb';
import { EventDetails } from '../../atoms/EventDetails';

export interface EventTeaserProps {
  title: string;
  href?: string;
  target?: string;
  dateText: string;
  venueText: string;
  thumbnailSrc?: string;
  thumbnailAlt?: string;
  v2?: boolean;
}

export function EventTeaser({
  title,
  href,
  target,
  dateText,
  venueText,
  thumbnailSrc,
  thumbnailAlt = '',
  v2 = false,
}: EventTeaserProps) {
  const rootClass = `event-teaser${v2 ? ' event-teaser--v2' : ''}`;

  const titleEl = href ? (
    <a href={href} target={target} rel={target === '_blank' ? 'noreferrer' : undefined}>
      {title}
    </a>
  ) : (
    title
  );

  return (
    <div className={rootClass}>
      {thumbnailSrc && (
        <TeaserThumb src={thumbnailSrc} alt={thumbnailAlt} />
      )}
      <div className="teaser-text">
        {v2 ? (
          <>
            <div className="teaser-text__title">
              <h2>{titleEl}</h2>
            </div>
            <div className="teaser-text__info">
              <EventDetails variant="ev-date" iconClass="fas fa-calendar-alt" text={dateText} />
              <div className="event-details ev-venue">
                <div className="ev-venue">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>{venueText}</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <h2>{titleEl}</h2>
            <EventDetails variant="ev-date" iconClass="fas fa-calendar-alt" text={dateText} />
            <div className="event-details ev-venue">
              <i className="fas fa-map-marker-alt"></i>
              <span>{venueText}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
