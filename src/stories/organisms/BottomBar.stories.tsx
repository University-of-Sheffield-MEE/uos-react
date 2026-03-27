import type { Meta, StoryObj } from '@storybook/react';
import { BottomBar } from '../../components/organisms/BottomBar';

const meta: Meta<typeof BottomBar> = {
  title: 'Organisms/BottomBar',
  component: BottomBar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Site footer bottom bar displaying a policy navigation menu and copyright notice.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof BottomBar>;

export const Default: Story = {
  args: {
    links: [
      { label: 'Feedback', href: 'https://www.sheffield.ac.uk/contact/comments' },
      { label: 'Privacy', href: 'https://www.sheffield.ac.uk/privacy' },
      { label: 'Accessibility', href: 'https://www.sheffield.ac.uk/accessibility' },
      { label: 'FOI', href: 'https://www.sheffield.ac.uk/foi' },
      { label: 'Modern slavery statement', href: 'https://www.sheffield.ac.uk/procurement/modern-slavery' },
    ],
    copyrightText: '© 2026 The University of Sheffield',
  },
};

export const CustomLinks: Story = {
  args: {
    links: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Accessibility', href: '/accessibility' },
      { label: 'Contact', href: '/contact' },
    ],
    copyrightText: '© 2026 The University of Sheffield',
  },
};
