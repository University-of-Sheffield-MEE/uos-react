import type { Meta, StoryObj } from '@storybook/react';
import { SiteHeader } from '../../components/organisms/SiteHeader';

const meta: Meta<typeof SiteHeader> = {
  title: 'Organisms/SiteHeader',
  component: SiteHeader,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The global site header containing the institution logo and primary mega-navigation, rendered as a banner landmark.\n\n[Example page](https://sheffield.ac.uk/management/mba/student-and-alumni-insight/mba-blog-archive/mbas-journey-industry-40-key-takeaways-germanys-tech-leaders)',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SiteHeader>;

export const Default: Story = {
  args: {
    logoHref: '/?home',
    logoSrc: 'https://sheffield.ac.uk/themes/custom/uos_public/images/logos/uos-crest.svg',
    logoAlt: 'University of Sheffield homepage',
    logoSrcsetDesktop: 'https://sheffield.ac.uk/themes/custom/uos_public/images/logos/uos-crest.svg',
    isSubsiteLogo: false,
    navItems: [
      {
        label: 'Study',
        children: [
          { label: 'Courses', href: '/courses' },
          { label: 'Studying at Sheffield', href: '/study/home' },
        ],
      },
      {
        label: 'Research',
        children: [
          { label: 'Our research', href: '/research/home' },
        ],
      },
      {
        label: 'About',
        children: [
          { label: 'About us', href: '/about' },
        ],
      },
    ],
  },
};

export const SubsiteLogo: Story = {
  args: {
    logoHref: '/management?home',
    logoSrc: 'https://sheffield.ac.uk/themes/custom/uos_public/images/mgmt/tuosmgmt.png',
    logoAlt: 'University of Sheffield Management School homepage',
    logoSrcsetDesktop: 'https://sheffield.ac.uk/themes/custom/uos_public/images/mgmt/tuosmgmt.png',
    isSubsiteLogo: true,
    navItems: [
      {
        label: 'Study',
        children: [
          { label: 'Courses', href: '/courses' },
        ],
      },
      {
        label: 'About',
        children: [
          { label: 'About us', href: '/about' },
        ],
      },
    ],
  },
};
