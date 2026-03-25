import type { Meta, StoryObj } from '@storybook/react';
import { OffCanvasWrapper } from '../../components/layouts/OffCanvasWrapper';

const meta: Meta<typeof OffCanvasWrapper> = {
  title: 'Layouts/OffCanvasWrapper',
  component: OffCanvasWrapper,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof OffCanvasWrapper>;

export const Default: Story = {
  args: {
    children: 'Main page content',
  },
};

export const WithOffCanvasPanel: Story = {
  args: {
    offCanvasPanel: 'Side navigation panel',
    children: 'Main page content',
  },
};
