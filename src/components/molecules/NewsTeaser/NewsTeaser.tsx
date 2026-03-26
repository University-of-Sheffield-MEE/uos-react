import { NewsDate } from '../../atoms/NewsDate';

export interface NewsTeaserProps {
  href: string;
  target?: string;
  imageSrc?: string;
  imageAlt?: string;
  title: string;
  summary?: string;
  date: string;
  dateTime: string;
  newsSrc?: string;
}

export function NewsTeaser({
  href,
  target,
  imageSrc,
  imageAlt = '',
  title,
  summary,
  date,
  dateTime,
  newsSrc,
}: NewsTeaserProps) {
  return (
    <a href={href} className="news-teaser-link" target={target}>
      <div className="news-teaser">
        <div className="teaser-thumb">
          {imageSrc && (
            <img loading="lazy" src={imageSrc} alt={imageAlt} />
          )}
        </div>
        <div className="teaser-text">
          <h2>{title}</h2>
          {summary && <p>{summary}</p>}
          <NewsDate datetime={dateTime} label={date} />
          {newsSrc && <span className="news-src">{newsSrc}</span>}
        </div>
      </div>
    </a>
  );
}
