import type { Meta, StoryObj } from '@storybook/react';
import { OffCanvasWrapper } from '../../components/layouts/OffCanvasWrapper';

const meta: Meta<typeof OffCanvasWrapper> = {
  title: 'Layouts/OffCanvasWrapper',
  component: OffCanvasWrapper,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Foundation CSS off-canvas page layout wrapper that provides the structural shell for the off-canvas navigation panel and the main page content region.\n\n[Example page](https://sheffield.ac.uk/management/mba/student-and-alumni-insight/mba-blog-archive/mbas-journey-industry-40-key-takeaways-germanys-tech-leaders)',
      },
    },
  },
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
