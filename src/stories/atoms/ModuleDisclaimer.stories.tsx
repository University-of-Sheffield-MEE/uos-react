import type { Meta, StoryObj } from '@storybook/react';
import { ModuleDisclaimer } from '../../components/atoms/ModuleDisclaimer';

const meta: Meta<typeof ModuleDisclaimer> = {
  title: 'Atoms/ModuleDisclaimer',
  component: ModuleDisclaimer,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ModuleDisclaimer>;

export const Default: Story = {
  args: {},
};
