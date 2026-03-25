import type { Meta, StoryObj } from '@storybook/react';
import { SectionTitle } from '../../components/molecules/SectionTitle';

const meta: Meta<typeof SectionTitle> = {
  title: 'Molecules/SectionTitle',
  component: SectionTitle,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SectionTitle>;

export const Default: Story = {
  args: {
    sectionLabel: 'Management School',
    sectionHref: '/management',
  },
};

export const Library: Story = {
  args: {
    sectionLabel: 'The University Library',
    sectionHref: '/library',
  },
};

export const Undergraduate: Story = {
  args: {
    sectionLabel: 'Undergraduate study',
    sectionHref: '/undergraduate/courses',
  },
};
