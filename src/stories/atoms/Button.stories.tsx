import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../components/atoms/Button';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const MenuToggle: Story = {
  args: {
    label: 'Menu',
    as: 'a',
    menu: true,
    showBurgerIcon: true,
    role: 'button',
    dataToggle: 'left-off-canvas-menu',
    ariaExpanded: false,
    ariaControls: 'left-off-canvas-menu',
  },
};

export const PrimaryButton: Story = {
  args: {
    label: 'Search',
    as: 'button',
    primary: true,
  },
};

export const SuccessSubmit: Story = {
  args: {
    label: 'Apply',
    as: 'input',
    success: true,
    radius: true,
    value: 'Apply',
  },
};

export const Default: Story = {
  args: {
    label: 'Click me',
    as: 'a',
    href: '#',
  },
};
