import type { Meta, StoryObj } from '@storybook/react';
import { MuseBar } from '../../components/organisms/MuseBar';

const meta: Meta<typeof MuseBar> = {
  title: 'Organisms/MuseBar',
  component: MuseBar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MuseBar>;

export const Default: Story = {
  args: {},
};
