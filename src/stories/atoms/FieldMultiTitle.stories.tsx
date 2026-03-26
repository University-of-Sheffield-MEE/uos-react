import type { Meta, StoryObj } from '@storybook/react';
import { FieldMultiTitle } from '../../components/atoms/FieldMultiTitle';

const meta: Meta<typeof FieldMultiTitle> = {
  title: 'Atoms/FieldMultiTitle',
  component: FieldMultiTitle,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FieldMultiTitle>;

export const Default: Story = {
  args: {
    text: 'Other information',
  },
};

export const StudyingWithUs: Story = {
  args: {
    text: 'Studying with us',
  },
};

export const InternationalEvents: Story = {
  args: {
    text: 'International in-person events',
  },
};
