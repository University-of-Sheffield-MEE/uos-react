import { StapContact } from '../StapContact';
import { ProfilePicModal } from '../ProfilePicModal';

export interface StapCardProps {
  href: string;
  ariaLabel: string;
  name: string;
  jobTitle: string;
  deptName: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  modalImageSrc?: string;
  profileInitials?: string;
  email?: string;
  phone?: string;
}

export function StapCard({
  href,
  ariaLabel,
  name,
  jobTitle,
  deptName,
  description,
  imageSrc,
  imageAlt,
  modalImageSrc,
  profileInitials,
  email,
  phone,
}: StapCardProps) {
  return (
    <div className="stap-card">
      <a href={href} aria-label={ariaLabel}>
        <div className="profilepic">
          {imageSrc ? (
            <div className="media--image--figure">
              <figure className="imgcapt">
                <picture>
                  <img loading="eager" width={180} height={180} src={imageSrc} alt={imageAlt} />
                </picture>
              </figure>
            </div>
          ) : (
            profileInitials && (
              <div className="profileinitials">{profileInitials}</div>
            )
          )}
          {modalImageSrc && (
            <button className="enlarge">
              <span className="show-for-sr">Open staff member portrait in a modal window</span>
            </button>
          )}
          {modalImageSrc && (
            <ProfilePicModal
              src={modalImageSrc}
              alt={`Profile picture of ${name}`}
            />
          )}
        </div>
      </a>
      <div className="summary-text">
        <div className="stap-card__info">
          <h3>
            <a href={href} className="stretched-link">{name}</a>
          </h3>
          <a href={href}>
            <span className="jobtitle">{jobTitle}</span>
            <br />
            <span className="deptname">{deptName}</span>
            <br />
            {description && <p>{description}</p>}
          </a>
        </div>
        {email && (
          <StapContact email={email} telephone={phone} />
        )}
      </div>
    </div>
  );
}
