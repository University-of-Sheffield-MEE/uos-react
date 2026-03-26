import type { Meta, StoryObj } from '@storybook/react';
import { FigCaption } from '../../components/atoms/FigCaption';

const meta: Meta<typeof FigCaption> = {
  title: 'Atoms/FigCaption',
  component: FigCaption,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FigCaption>;

export const Default: Story = {
  args: {
    children: 'Adult Drosophila',
  },
};

export const LongerCaption: Story = {
  args: {
    children: 'Some of the main Drosophila stock collection.',
  },
};

export const Group: Story = {
  render: () => (
    <div className="media--image--figure">
      <FigCaption>Adult Drosophila</FigCaption>
      <FigCaption>Fly lab - Room D22 Firth Court</FigCaption>
      <FigCaption>Sorting flies under a microscope.</FigCaption>
    </div>
  ),
};
