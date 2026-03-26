import type { Meta, StoryObj } from '@storybook/react';
import { StudentProfileImage } from '../../components/atoms/StudentProfileImage';

const meta: Meta<typeof StudentProfileImage> = {
  title: 'Atoms/StudentProfileImage',
  component: StudentProfileImage,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof StudentProfileImage>;

export const Default: Story = {
  args: {
    src: 'https://cdn.sheffield.ac.uk/sites/default/files/styles/profile_square_1x/public/2023-04/Romesa.jpg?h=43fa0a89&itok=ICOFrNMI',
    alt: 'Romesa Khawaja',
  },
};

export const PhDCandidate: Story = {
  args: {
    src: 'https://cdn.sheffield.ac.uk/sites/default/files/styles/profile_square_1x/public/2023-11/Holly%20K%20Rooke%202.png?h=8e7569e2&itok=4LTKKSk7',
    alt: 'Holly Rooke profile photo',
  },
};
