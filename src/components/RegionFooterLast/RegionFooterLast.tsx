interface SocialLink {
  href: string;
  src: string;
  alt: string;
}

const defaultSocialLinks: SocialLink[] = [
  {
    href: 'https://instagram.com/theuniversityofsheffield',
    src: 'https://cdn.sheffield.ac.uk/sites/default/files/styles/original/public/2022-10/social-in.png?itok=UpurzD83',
    alt: 'Instagram logo',
  },
  {
    href: 'https://www.linkedin.com/school/university-of-sheffield/',
    src: 'https://cdn.sheffield.ac.uk/sites/default/files/styles/original/public/2022-10/social-li.png?itok=pBCn-VE3',
    alt: 'LinkedIn',
  },
  {
    href: 'https://www.tiktok.com/@sheffielduni',
    src: 'https://cdn.sheffield.ac.uk/sites/default/files/styles/original/public/2022-10/social-tt.png?itok=G8v7iLhy',
    alt: 'TikTok',
  },
  {
    href: 'https://bsky.app/profile/sheffielduni.bsky.social',
    src: 'https://sheffield.ac.uk/sites/default/files/styles/original/public/2025-10/social-icon-bluesky2.png?h=ebc76fda&itok=vfSDiDHf',
    alt: 'Bluesky butterfly logo',
  },
  {
    href: 'https://www.threads.com/@theuniversityofsheffield',
    src: 'https://sheffield.ac.uk/sites/default/files/styles/original/public/2025-10/social-icon-threads.png?h=ebc76fda&itok=TswsZn-u',
    alt: 'Threads logo',
  },
  {
    href: 'https://www.weibo.com/sheffielduni',
    src: 'https://cdn.sheffield.ac.uk/sites/default/files/styles/original/public/2022-10/social-wb.png?itok=c0RLZdQP',
    alt: 'Weibo',
  },
];

export interface RegionFooterLastProps {
  socialLinks?: SocialLink[];
}

export function RegionFooterLast({ socialLinks = defaultSocialLinks }: RegionFooterLastProps) {
  return (
    <div className="region region-footer_last">
      <div className="social">
        {socialLinks.map((link) => (
          <a key={link.href} href={link.href}>
            <img src={link.src} alt={link.alt} width={34} height={34} loading="lazy" />
          </a>
        ))}
      </div>
    </div>
  );
}
