import type { ReactNode } from 'react';

export interface FeaturedImageProps {
  imageSrc: string;
  imageAlt: string;
  imageWidth?: number;
  imageHeight?: number;
  figcaption?: string;
  heading?: string;
  bodyText?: ReactNode;
  featTitle?: string;
  showLinkArrow?: boolean;
}

export function FeaturedImage({
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  figcaption,
  heading,
  bodyText,
  featTitle,
  showLinkArrow = false,
}: FeaturedImageProps) {
  return (
    <div className="featured-image">
      <div className="img_container">
        <div className="media--image--figure">
          <figure className="imgcapt">
            <picture>
              <img src={imageSrc} alt={imageAlt} width={imageWidth} height={imageHeight} />
            </picture>
            {figcaption && <figcaption>{figcaption}</figcaption>}
          </figure>
        </div>
      </div>
      <div className="img_descript">
        <div className="descripttext">
          {heading && <h3>{heading}</h3>}
          {bodyText && <p>{bodyText}</p>}
          {featTitle && <p className="feat-title">{featTitle}</p>}
        </div>
        {showLinkArrow && (
          <div className="link-arrow">
            <div className="fmarrow"><i className="fas fa-arrow-right"></i></div>
          </div>
        )}
      </div>
    </div>
  );
}
