import { Fragment } from 'react';

export interface ProfileLinkPromoProps {
  links: Array<{ label: string; href: string }>;
}

export function ProfileLinkPromo({ links }: ProfileLinkPromoProps) {
  return (
    <div className="profile-link-promo">
      <h2>Links</h2>
      <p>
        {links.map((link, index) => (
          <Fragment key={index}>
            <a href={link.href}>{link.label}</a>
            <span>&nbsp;</span>
          </Fragment>
        ))}
      </p>
    </div>
  );
}
