export interface SignpostCardProps {
  href: string;
  ariaLabel: string;
  imageSrc: string;
  imageAlt?: string;
  title: string;
  body: string;
  linkText?: string;
}

export function SignpostCard({
  href,
  ariaLabel,
  imageSrc,
  imageAlt = '',
  title,
  body,
  linkText,
}: SignpostCardProps) {
  return (
    <a aria-label={ariaLabel} href={href} className="signpost-card">
      <div className="uosblock paragraph paragraph--type--para-signpost-card paragraph--view-mode--default">
        <div className="media--image--figure">
          <figure className="imgcapt">
            <picture>
              <img loading="eager" width={375} height={211} src={imageSrc} alt={imageAlt} />
            </picture>
          </figure>
        </div>

        <h3 className="field-sc-title">{title}</h3>

        <p>{body}</p>

        {linkText && <p className="field-sc-link">{linkText}</p>}

        <div className="link-arrow">
          <div className="scarrow"><i className="fas fa-sm fa-arrow-right"></i></div>
        </div>
      </div>
    </a>
  );
}
