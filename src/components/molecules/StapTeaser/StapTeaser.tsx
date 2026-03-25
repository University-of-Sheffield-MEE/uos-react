import { ProfilePicModal } from '../ProfilePicModal';

export interface StapTeaserProps {
  href: string;
  name: string;
  honorific?: string;
  jobTitle: string;
  department: string;
  email?: string;
  phone?: string;
  extraText?: string;
  imageSrc?: string;
  imageAlt?: string;
  modalImageSrc?: string;
  initials?: string;
  photoAriaLabel?: string;
}

export function StapTeaser({
  href,
  name,
  honorific,
  jobTitle,
  department,
  email,
  phone,
  extraText,
  imageSrc,
  imageAlt,
  modalImageSrc,
  initials,
  photoAriaLabel,
}: StapTeaserProps) {
  return (
    <div className="stap-teaser">
      <div className="summary-text">
        <div className="stap-teaser__info">
          <h3>
            <a href={href} className="stretched-link">
              {honorific ? `${honorific} ` : ''}{name}
            </a>
          </h3>
          <a href={href}>
            <span className="jobtitle">{jobTitle}</span>
            <br />
            <span className="deptname">{department}</span>
          </a>
          {extraText && (
            <p>{extraText}</p>
          )}
        </div>

        {(email || phone) && (
          <dl className="stap-contact">
            {email && (
              <>
                <dt className="sr-only">Email</dt>
                <dd>
                  <strong>
                    <a href={`mailto:${email}`}>{email}</a>
                  </strong>
                </dd>
              </>
            )}
            {phone && (
              <>
                <dt className="sr-only">Telephone</dt>
                <dd>
                  <strong className="telnum">
                    <a href={`tel:${phone}`}>{phone}</a>
                  </strong>
                </dd>
              </>
            )}
          </dl>
        )}
      </div>

      <a href={href} aria-label={photoAriaLabel}>
        <div className="profilepic">
          {imageSrc ? (
            <>
              <div className="media--image--figure">
                <figure className="imgcapt">
                  <picture>
                    <img
                      loading="eager"
                      width={180}
                      height={180}
                      src={imageSrc}
                      alt={imageAlt}
                    />
                  </picture>
                  <figcaption></figcaption>
                </figure>
              </div>
              <button className="enlarge">
                <span className="show-for-sr">Open staff member portrait in a modal window</span>
              </button>
              {modalImageSrc && (
                <ProfilePicModal
                  src={modalImageSrc}
                  alt={`Profile picture of ${imageAlt}`}
                />
              )}
            </>
          ) : initials ? (
            <div className="profileinitials">{initials}</div>
          ) : null}
        </div>
      </a>
    </div>
  );
}
