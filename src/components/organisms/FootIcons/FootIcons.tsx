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
  awards?: AwardLink[];
  socialLinks?: SocialLink[];
}

const defaultAwards: AwardLink[] = [
  { href: '//www.sheffield.ac.uk/about/rankings', src: '/themes/custom/common/uos/images/WORLD100_stamp_white.png', alt: 'A World Top 100 University' },
  { href: '//www.sheffield.ac.uk/about/rankings', src: '/themes/custom/common/uos/images/russell.png', alt: 'Russell Group' },
  { href: '//www.sheffield.ac.uk/about/queens-prize', src: '/themes/custom/common/uos/images/QAP.png', alt: "Five Queen's Anniversary Prizes" },
];

const defaultSocialLinks: SocialLink[] = [
  { href: 'https://instagram.com/theuniversityofsheffield', src: '//cdn.sheffield.ac.uk/sites/default/files/styles/original/public/2022-10/social-in.png?itok=UpurzD83', alt: 'Instagram logo' },
  { href: 'https://www.linkedin.com/school/university-of-sheffield/', src: '//cdn.sheffield.ac.uk/sites/default/files/styles/original/public/2022-10/social-li.png?itok=pBCn-VE3', alt: 'LinkedIn' },
  { href: 'https://www.tiktok.com/@sheffielduni', src: '//cdn.sheffield.ac.uk/sites/default/files/styles/original/public/2022-10/social-tt.png?itok=G8v7iLhy', alt: 'TikTok' },
  { href: 'https://bsky.app/profile/sheffielduni.bsky.social', src: '/sites/default/files/styles/original/public/2025-10/social-icon-bluesky2.png?h=ebc76fda&itok=vfSDiDHf', alt: 'Bluesky butterfly logo' },
  { href: 'https://www.threads.com/@theuniversityofsheffield', src: '/sites/default/files/styles/original/public/2025-10/social-icon-threads.png?h=ebc76fda&itok=TswsZn-u', alt: 'Threads logo' },
  { href: 'https://www.weibo.com/sheffielduni', src: '//cdn.sheffield.ac.uk/sites/default/files/styles/original/public/2022-10/social-wb.png?itok=c0RLZdQP', alt: 'Weibo' },
];

export function FootIcons({
  awards = defaultAwards,
  socialLinks = defaultSocialLinks,
}: FootIconsProps) {
  return (
    <div className="footicons">
      <div className="awards">
        {awards.map((award, index) => (
          <a key={index} href={award.href}>
            <img src={award.src} loading="lazy" alt={award.alt} />
          </a>
        ))}
      </div>

      <div className="region region-footer_last">
        <div className="social">
          <div className="block block-layout-builder block-field-blockblock-contentbasicbody">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.href}>
                <div className="embedded-entity">
                  <div className="media--image--figure">
                    <figure className="imgcapt">
                      <img loading="lazy" src={link.src} width={34} height={34} alt={link.alt} />
                    </figure>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
