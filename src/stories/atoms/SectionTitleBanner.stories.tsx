import type { Meta, StoryObj } from '@storybook/react';
import { SectionTitleBanner } from '../../components/atoms/SectionTitleBanner';

const meta: Meta<typeof SectionTitleBanner> = {
  title: 'Atoms/SectionTitleBanner',
  component: SectionTitleBanner,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A banner region section title displaying the current site section\'s name as a linked heading, used in the region-banner navigation area.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SectionTitleBanner>;

export const Default: Story = {
  args: {
    label: 'Management School',
    href: '/management',
  },
};

export const Library: Story = {
  args: {
    label: 'The University Library',
    href: '/library',
  },
};

export const Undergraduate: Story = {
  args: {
    label: 'Undergraduate study',
    href: '/undergraduate/courses',
  },
};
