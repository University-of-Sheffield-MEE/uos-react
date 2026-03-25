import type { Meta, StoryObj } from '@storybook/react';
import { FootIcons } from '../../components/organisms/FootIcons';

const meta: Meta<typeof FootIcons> = {
  title: 'Organisms/FootIcons',
  component: FootIcons,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FootIcons>;

export const Default: Story = {
  args: {
    awardLinks: [
      {
        href: 'https://sheffield.ac.uk/about/rankings',
        src: 'https://sheffield.ac.uk/themes/custom/common/uos/images/WORLD100_stamp_white.png',
        alt: 'A World Top 100 University',
      },
      {
        href: 'https://sheffield.ac.uk/about/rankings',
        src: 'https://sheffield.ac.uk/themes/custom/common/uos/images/russell.png',
        alt: 'Russell Group',
      },
      {
        href: 'https://sheffield.ac.uk/about/queens-prize',
        src: 'https://sheffield.ac.uk/themes/custom/common/uos/images/QAP.png',
        alt: "Five Queen's Anniversary Prizes",
      },
    ],
    socialLinks: [
      {
        href: 'https://instagram.com/theuniversityofsheffield',
        src: 'https://cdn.sheffield.ac.uk/sites/default/files/styles/original/public/2022-10/social-in.png',
        alt: 'Instagram logo',
      },
      {
        href: 'https://www.linkedin.com/school/university-of-sheffield/',
        src: 'https://cdn.sheffield.ac.uk/sites/default/files/styles/original/public/2022-10/social-li.png',
        alt: 'LinkedIn',
      },
      {
        href: 'https://www.tiktok.com/@sheffielduni',
        src: 'https://cdn.sheffield.ac.uk/sites/default/files/styles/original/public/2022-10/social-tt.png',
        alt: 'TikTok',
      },
      {
        href: 'https://bsky.app/profile/sheffielduni.bsky.social',
        src: 'https://sheffield.ac.uk/sites/default/files/styles/original/public/2025-10/social-icon-bluesky2.png',
        alt: 'Bluesky butterfly logo',
      },
      {
        href: 'https://www.threads.com/@theuniversityofsheffield',
        src: 'https://sheffield.ac.uk/sites/default/files/styles/original/public/2025-10/social-icon-threads.png',
        alt: 'Threads logo',
      },
      {
        href: 'https://www.weibo.com/sheffielduni',
        src: 'https://cdn.sheffield.ac.uk/sites/default/files/styles/original/public/2022-10/social-wb.png',
        alt: 'Weibo',
      },
    ],
  },
};
