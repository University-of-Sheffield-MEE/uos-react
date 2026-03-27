import type { Meta, StoryObj } from '@storybook/react';
import { ProfilePicModal } from '../../components/molecules/ProfilePicModal';

const meta: Meta<typeof ProfilePicModal> = {
  title: 'Molecules/ProfilePicModal',
  component: ProfilePicModal,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A modal overlay displaying a staff profile picture at full size with a close button.\n\n[Example page](https://sheffield.ac.uk/psychology/people/academic/alon-zivony)',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProfilePicModal>;

export const Default: Story = {
  args: {
    src: 'https://cdn.sheffield.ac.uk/sites/default/files/styles/profile_modal/public/2023-09/Photo%20of%20Alon%20Zivony.jpg?h=1b0af9cd&itok=gfGUZ8VL',
    alt: 'Profile picture of Alon Zivony',
  },
};

export const WithCloseHandler: Story = {
  args: {
    src: 'https://cdn.sheffield.ac.uk/sites/default/files/styles/profile_modal/public/2022-07/Rosaleen%202.jpg?h=7abcc742&itok=ATC7VmLY',
    alt: 'Profile picture of Headshot of Rosaleen Duffy',
    onClose: () => alert('Modal closed'),
  },
};
