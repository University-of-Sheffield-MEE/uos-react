import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from '../../components/molecules/Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Molecules/Pagination',
  component: Pagination,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    items: [
      { label: '1', href: '?page=0', isCurrent: true },
      { label: '2', href: '?page=1' },
      { label: '3', href: '?page=2' },
      { label: '4', href: '?page=3' },
      { label: '5', href: '?page=4' },
      { label: 'Next page', href: '?page=1', isNext: true },
      { label: 'Last page', href: '?page=4', isLast: true },
    ],
  },
};

export const ManyPagesWithEllipsis: Story = {
  args: {
    items: [
      { label: '1', href: '?page=0', isCurrent: true },
      { label: '2', href: '?page=1' },
      { label: '3', href: '?page=2' },
      { label: '4', href: '?page=3' },
      { label: '5', href: '?page=4' },
      { label: '6', href: '?page=5' },
      { label: '7', href: '?page=6' },
      { label: '8', href: '?page=7' },
      { label: '9', href: '?page=8' },
      { label: '…', href: '', isEllipsis: true },
      { label: 'Next page', href: '?page=1', isNext: true },
      { label: 'Last page', href: '?page=26', isLast: true },
    ],
  },
};

export const TwoPages: Story = {
  args: {
    items: [
      { label: '1', href: '?page=0', isCurrent: true },
      { label: '2', href: '?page=1' },
      { label: 'Next page', href: '?page=1', isNext: true },
      { label: 'Last page', href: '?page=1', isLast: true },
    ],
  },
};
