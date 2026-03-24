import type { Meta, StoryObj } from '@storybook/react';
import { SiteHeader } from '../components/SiteHeader';

const meta: Meta<typeof SiteHeader> = {
  title: 'Components/SiteHeader',
  component: SiteHeader,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SiteHeader>;

export const Default: Story = {
  args: {
    logoHref: '/?home',
    logoSrc: '/themes/custom/uos_public/images/logos/uos-crest.svg',
    logoSrcsetDesktop: null,
    logoAlt: 'University of Sheffield homepage',
    isMgmtLogo: false,
  },
};

export const ManagementSchool: Story = {
  args: {
    logoHref: '/management?home',
    logoSrc: '/themes/custom/uos_public/images/mgmt/tuosmgmt.png',
    logoSrcsetDesktop: null,
    logoAlt: 'University of Sheffield Management School homepage',
    isMgmtLogo: true,
  },
};
