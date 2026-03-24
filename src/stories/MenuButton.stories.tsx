import type { Meta, StoryObj } from '@storybook/react';
import { MenuButton } from '../components/MenuButton';

const meta: Meta<typeof MenuButton> = {
  title: 'Components/MenuButton',
  component: MenuButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MenuButton>;

export const Default: Story = {
  args: {
    menuId: 'left-off-canvas-menu',
    isExpanded: false,
  },
};

export const Expanded: Story = {
  args: {
    menuId: 'left-off-canvas-menu',
    isExpanded: true,
  },
};
