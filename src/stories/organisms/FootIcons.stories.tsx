import type { Meta, StoryObj } from '@storybook/react';
import { FootIcons } from '../../components/organisms/FootIcons';

const meta: Meta<typeof FootIcons> = {
  title: 'Organisms/FootIcons',
  component: FootIcons,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Footer icons section displaying university award badges and social media channel links, always rendered with fixed static content.\n\n[Example page](https://sheffield.ac.uk/management/mba/student-and-alumni-insight/mba-blog-archive/mbas-journey-industry-40-key-takeaways-germanys-tech-leaders)',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FootIcons>;

export const Default: Story = {
  args: {
    awards: [
      { href: '//www.sheffield.ac.uk/about/rankings', src: 'https://sheffield.ac.uk/themes/custom/common/uos/images/WORLD100_stamp_white.png', alt: 'A World Top 100 University' },
      { href: '//www.sheffield.ac.uk/about/rankings', src: 'https://sheffield.ac.uk/themes/custom/common/uos/images/russell.png', alt: 'Russell Group' },
      { href: '//www.sheffield.ac.uk/about/queens-prize', src: 'https://sheffield.ac.uk/themes/custom/common/uos/images/QAP.png', alt: "Five Queen's Anniversary Prizes" },
    ],
    socialLinks: [
      { href: 'https://instagram.com/theuniversityofsheffield', src: 'https://cdn.sheffield.ac.uk/sites/default/files/styles/original/public/2022-10/social-in.png?itok=UpurzD83', alt: 'Instagram logo' },
      { href: 'https://www.linkedin.com/school/university-of-sheffield/', src: 'https://cdn.sheffield.ac.uk/sites/default/files/styles/original/public/2022-10/social-li.png?itok=pBCn-VE3', alt: 'LinkedIn' },
      { href: 'https://www.tiktok.com/@sheffielduni', src: 'https://cdn.sheffield.ac.uk/sites/default/files/styles/original/public/2022-10/social-tt.png?itok=G8v7iLhy', alt: 'TikTok' },
      { href: 'https://bsky.app/profile/sheffielduni.bsky.social', src: 'https://sheffield.ac.uk/sites/default/files/styles/original/public/2025-10/social-icon-bluesky2.png?h=ebc76fda&itok=vfSDiDHf', alt: 'Bluesky butterfly logo' },
      { href: 'https://www.threads.com/@theuniversityofsheffield', src: 'https://sheffield.ac.uk/sites/default/files/styles/original/public/2025-10/social-icon-threads.png?h=ebc76fda&itok=TswsZn-u', alt: 'Threads logo' },
      { href: 'https://www.weibo.com/sheffielduni', src: 'https://cdn.sheffield.ac.uk/sites/default/files/styles/original/public/2022-10/social-wb.png?itok=c0RLZdQP', alt: 'Weibo' },
    ],
  },
};
