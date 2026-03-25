import { useState } from 'react';

export interface SocialLink {
  href: string;
  iconClass: string;
  label: string;
}

export interface ContactInfoProps {
  email: string;
  emailHref: string;
  phone?: string;
  phoneHref?: string;
  location?: string;
  officeHours?: string;
  fullAddress?: string;
  socialLinks?: SocialLink[];
}

export function ContactInfo({
  email,
  emailHref,
  phone,
  phoneHref,
  location,
  officeHours,
  fullAddress,
  socialLinks,
}: ContactInfoProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="contactinfo">
      <strong>
        <a href={emailHref} title="Email">
          <i className="fas fa-envelope"></i> {email}
        </a>
      </strong>

      {phone && phoneHref && (
        <>
          <br />
          <strong className="telnum">
            <a href={phoneHref} title="Telephone">
              <i className="fas fa-phone"></i> {phone}
            </a>
          </strong>
        </>
      )}

      {location && (
        <div className="loclink">
          <i className="fas fa-map-marker"></i>
          {' '}{location}
        </div>
      )}

      {officeHours && (
        <div className="officehours">
          <i className="fas fa-clock"></i> {officeHours}
        </div>
      )}

      {fullAddress && (
        <>
          <p></p>
          <p>
            <span
              className="showfull"
              onClick={() => setExpanded(!expanded)}
              style={{ cursor: 'pointer' }}
            >
              Full contact details <i className={`fas fa-angle-${expanded ? 'up' : 'down'}`}></i>
            </span>
          </p>

          {expanded && (
            <div className="fullcontact">
              <div className="address">
                {fullAddress.split('\n').map((line, i, arr) => (
                  i < arr.length - 1 ? (
                    <span key={i}>{line}<br /></span>
                  ) : (
                    <span key={i}>{line}<br /></span>
                  )
                ))}
              </div>
              <div className="social">
                {socialLinks && socialLinks.map((link, i) => (
                  <a key={i} href={link.href} title={link.label}>
                    <i className={link.iconClass}></i>
                  </a>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
