import type { Meta, StoryObj } from '@storybook/react';
import { SectionTitleWrapper } from '../components/SectionTitleWrapper';

const meta: Meta<typeof SectionTitleWrapper> = {
  title: 'Components/SectionTitleWrapper',
  component: SectionTitleWrapper,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SectionTitleWrapper>;

export const Default: Story = {
  args: {
    sectionTitle: 'Management School',
    sectionHref: '/management',
  },
};

export const LongTitle: Story = {
  args: {
    sectionTitle: 'School of Chemical, Materials and Biological Engineering',
    sectionHref: '/cmbe',
  },
};

export const UndergraduateStudy: Story = {
  args: {
    sectionTitle: 'Undergraduate study',
    sectionHref: '/undergraduate/courses',
  },
};
