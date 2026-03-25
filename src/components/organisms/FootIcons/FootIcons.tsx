interface AwardLink {
  href: string;
  src: string;
  alt: string;
}

interface SocialLink {
  href: string;
  src: string;
  alt: string;
}

export interface FootIconsProps {
  awardLinks: Array<AwardLink>;
  socialLinks: Array<SocialLink>;
}

export function FootIcons({ awardLinks, socialLinks }: FootIconsProps) {
  return (
    <div className="footicons">
      <div className="awards">
        {awardLinks.map((link, index) => (
          <a key={index} href={link.href}>
            <img src={link.src} loading="lazy" alt={link.alt} />
          </a>
        ))}
      </div>
      <div className="region region-footer_last">
        <div className="social">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.href}>
              <img src={link.src} width="34" height="34" alt={link.alt} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
