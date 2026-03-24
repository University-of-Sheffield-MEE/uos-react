import type { Meta, StoryObj } from '@storybook/react';
import { BottomBar } from '../components/BottomBar';

const meta: Meta<typeof BottomBar> = {
  title: 'Components/BottomBar',
  component: BottomBar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BottomBar>;

export const Default: Story = {
  args: {
    menuItems: [
      { label: 'Feedback', href: 'https://www.sheffield.ac.uk/contact/comments' },
      { label: 'Privacy', href: 'https://www.sheffield.ac.uk/privacy' },
      { label: 'Accessibility', href: 'https://www.sheffield.ac.uk/accessibility' },
      { label: 'FOI', href: 'https://www.sheffield.ac.uk/foi' },
      { label: 'Modern slavery statement', href: 'https://www.sheffield.ac.uk/procurement/modern-slavery' },
    ],
    copyrightText: '© 2026 The University of Sheffield',
  },
};

export const CustomMenuItems: Story = {
  args: {
    menuItems: [
      { label: 'Privacy', href: 'https://www.sheffield.ac.uk/privacy' },
      { label: 'Accessibility', href: 'https://www.sheffield.ac.uk/accessibility' },
    ],
    copyrightText: '© 2026 The University of Sheffield',
  },
};
