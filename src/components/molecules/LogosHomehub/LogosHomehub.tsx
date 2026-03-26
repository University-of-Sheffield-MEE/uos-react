interface LogoItem {
  src: string;
  alt: string;
  href?: string;
  ariaLabel?: string;
}

export interface LogosHomehubProps {
  description?: string;
  logos: LogoItem[];
  showScrollArrows?: boolean;
}

export function LogosHomehub({
  description,
  logos,
  showScrollArrows = false,
}: LogosHomehubProps) {
  return (
    <div className="logos logos-homehub full-width">
      <div className={`row-width${showScrollArrows ? ' scrollarrows' : ''}`}>
        {description && <p>{description}</p>}
        <div className="logo-container">
          {logos.map((logo, index) => {
            const inner = (
              <div className="media--image--figure">
                <figure className="imgcapt">
                  <picture>
                    <img
                      loading="eager"
                      width="128"
                      height="72"
                      src={logo.src}
                      alt={logo.alt}
                    />
                  </picture>
                </figure>
              </div>
            );

            if (logo.href) {
              return (
                <a
                  key={index}
                  className="home-hub-logos"
                  href={logo.href}
                  target="_blank"
                  aria-label={logo.ariaLabel}
                >
                  {inner}
                </a>
              );
            }

            return (
              <span key={index} className="home-hub-logos">
                {inner}
              </span>
            );
          })}
        </div>
        {showScrollArrows && (
          <div className="scrollarrows">
            <button className="left" aria-label="Scroll left">
              <i className="fas fa-chevron-left" aria-hidden="true" />
            </button>
            <button className="right" aria-label="Scroll right">
              <i className="fas fa-chevron-right" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
