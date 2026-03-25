import type { Meta, StoryObj } from '@storybook/react';
import { SectionTitleBanner } from '../../components/atoms/SectionTitleBanner';

const meta: Meta<typeof SectionTitleBanner> = {
  title: 'Atoms/SectionTitleBanner',
  component: SectionTitleBanner,
  tags: ['autodocs'],
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
