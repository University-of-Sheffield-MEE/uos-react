import { NewsDate } from '../../atoms/NewsDate';

interface NewsCard {
  href: string;
  ariaLabel: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description?: string;
  date: string;
  dateTime: string;
  newsSource?: string;
}

export interface FeaturedNewsProps {
  isPara?: boolean;
  isRecent?: boolean;
  sectionTitle?: string;
  featuredCard: NewsCard;
  secondaryCards: NewsCard[];
  viewAllLink?: { href: string; label: string };
}

export function FeaturedNews({
  isPara = false,
  isRecent = false,
  sectionTitle,
  featuredCard,
  secondaryCards,
  viewAllLink,
}: FeaturedNewsProps) {
  return (
    <div className={`featured-news${isPara ? ' para' : ''}${isRecent ? ' recent' : ''}`}>
      {sectionTitle && <h2 className="field-multi-title">{sectionTitle}</h2>}
      <div className="views-element-container">
        <div className="newscard mainfeat">
          <a href={featuredCard.href} aria-label={featuredCard.ariaLabel}>
            <div className="thumb">
              <img src={featuredCard.imageSrc} alt={featuredCard.imageAlt} />
            </div>
            <div className="card-content">
              <h2>{featuredCard.title}</h2>
              {featuredCard.description && <p>{featuredCard.description}</p>}
              {featuredCard.newsSource && (
                <span className="news-src">{featuredCard.newsSource}</span>
              )}
              <div className="bottomrow">
                <NewsDate label={featuredCard.date} datetime={featuredCard.dateTime} />
                <div className="link-arrow">
                  <div className="ncarrow">
                    <i className="fas fa-sm fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        {secondaryCards.map((card, index) => (
          <div className="newscard" key={index}>
            <a href={card.href} aria-label={card.ariaLabel}>
              <div className="thumb">
                <img src={card.imageSrc} alt={card.imageAlt} />
              </div>
              <div className="card-content">
                <h3>{card.title}</h3>
                {card.description && <p>{card.description}</p>}
                {card.newsSource && (
                  <span className="news-src">{card.newsSource}</span>
                )}
                <div className="bottomrow">
                  <NewsDate label={card.date} datetime={card.dateTime} />
                  <div className="link-arrow">
                    <div className="ncarrow">
                      <i className="fas fa-sm fa-arrow-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
      {viewAllLink && (
        <a className="featured-news-view-all-link" href={viewAllLink.href}>
          {viewAllLink.label}
        </a>
      )}
    </div>
  );
}
