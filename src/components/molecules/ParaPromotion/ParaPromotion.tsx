import type { ReactNode } from 'react';
import { Fragment } from 'react';

interface PromoLink {
  label: string;
  href: string;
}

export interface ParaPromotionProps {
  heading: string;
  body?: ReactNode;
  links: PromoLink[];
  blueBar?: boolean;
  imageSrc?: string;
  imageAlt?: string;
}

export function ParaPromotion({
  heading,
  body,
  links,
  blueBar = false,
  imageSrc,
  imageAlt,
}: ParaPromotionProps) {
  const multipleLinks = links.length > 1;

  return (
    <div className={`paragraph paragraph--type--para-promotion${blueBar ? ' blue-bar' : ''}`}>
      {imageSrc && (
        <div className="media--image--figure">
          <figure className="imgcapt">
            <picture>
              <img loading="eager" src={imageSrc} alt={imageAlt} />
            </picture>
          </figure>
        </div>
      )}
      <div>
        <h2>{heading}</h2>
        {body && <p>{body}</p>}
        {multipleLinks ? (
          <div className="promo-links">
            {links.map((link) => (
              <Fragment key={link.href}>
                <a href={link.href}>{link.label}</a>
                <br />
              </Fragment>
            ))}
          </div>
        ) : (
          <div className="promo-link">
            <a href={links[0].href}>{links[0].label}</a>
            <br />
          </div>
        )}
      </div>
    </div>
  );
}
