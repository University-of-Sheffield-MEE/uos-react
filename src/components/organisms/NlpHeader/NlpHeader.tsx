export interface NlpHeaderProps {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  scrollTarget?: string;
}

export function NlpHeader({
  title,
  description,
  imageSrc,
  imageAlt = '',
  scrollTarget = '.region.region-breadcrumbs',
}: NlpHeaderProps) {
  return (
    <div className="nlpheader">
      <div className="lpaspect">
        {imageSrc && (
          <div className="lpheaderimg">
            <div className="media--image--figure">
              <figure className="imgcapt">
                <img loading="eager" src={imageSrc} alt={imageAlt} />
              </figure>
            </div>
          </div>
        )}
        <div className="lpcontent">
          <div>
            <h1>{title}</h1>
          </div>
          <p>{description}</p>
          <div className="arrow">
            <button
              tabIndex={0}
              aria-label="Scroll to content"
              className="js-scroll-to"
              data-scrollto={scrollTarget}
            >
              <i className="fas fa-arrow-down fa-2x"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
