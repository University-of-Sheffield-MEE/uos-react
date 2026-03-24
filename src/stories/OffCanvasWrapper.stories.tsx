import type { Meta, StoryObj } from '@storybook/react';
import { OffCanvasWrapper } from '../components/OffCanvasWrapper';

const meta: Meta<typeof OffCanvasWrapper> = {
  title: 'Components/OffCanvasWrapper',
  component: OffCanvasWrapper,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof OffCanvasWrapper>;

export const Default: Story = {
  args: {
    sectionTitle: 'Support for new students',
    sectionTitleHref: '/new-students',
    navItems: [
      {
        label: 'Before you arrive',
        href: '/new-students/before',
        children: [
          { label: 'Home undergraduate student checklist', href: '/new-students/ug-checklist' },
          { label: 'Home postgraduate taught student checklist', href: '/new-students/pgt-checklist' },
        ],
      },
      { label: 'Travelling to Sheffield', href: '/new-students/travelling-airport' },
    ],
    children: <div />,
  },
};

export const LibrarySection: Story = {
  args: {
    sectionTitle: 'The University Library',
    sectionTitleHref: '/library',
    navItems: [
      {
        label: 'Study',
        href: '/library/study',
        children: [
          { label: 'Study spaces', href: '/library/study/spaces' },
          { label: 'Referencing', href: '/library/study/research-skills/referencing' },
        ],
      },
      { label: 'Researchers', href: '/library/research' },
    ],
    children: <div />,
  },
};
