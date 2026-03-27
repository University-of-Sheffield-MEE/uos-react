import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs } from '../../components/molecules/Breadcrumbs';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Molecules/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Site navigation breadcrumb trail rendered as an ordered list of links showing the current page\'s position in the site hierarchy.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'New students', href: '/new-students/home' },
      { label: 'Travelling to Sheffield from the airport' },
    ],
  },
};

export const FourLevels: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Undergraduate study', href: '/undergraduate/home' },
      { label: 'Undergraduate courses', href: '/undergraduate/courses/home' },
      { label: '2026-2027', href: '/undergraduate/courses/2026' },
      { label: 'Chemical Engineering' },
    ],
  },
};

export const FiveLevels: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Management School', href: '/management/home' },
      { label: 'The Sheffield MBA', href: '/management/mba' },
      { label: 'Student and alumni insight', href: '/management/mba/student-and-alumni-insight' },
      { label: 'MBA blog archive', href: '/management/mba/student-and-alumni-insight/mba-blog-archive' },
      { label: "An MBA's journey to industry 4.0: Key takeaways from Germany's tech leaders" },
    ],
  },
};
