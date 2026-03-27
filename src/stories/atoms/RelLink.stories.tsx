import type { Meta, StoryObj } from '@storybook/react';
import { RelLink } from '../../components/atoms/RelLink';

const meta: Meta<typeof RelLink> = {
  title: 'Atoms/RelLink',
  component: RelLink,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A styled anchor link with a text label and a right-arrow icon, used within quicklinks grids.\n\n[Example page](https://sheffield.ac.uk/alumni/boardroom-masterclass/speakers-2021)',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof RelLink>;

export const Default: Story = {
  args: {
    href: '/alumni/boardroom-masterclass',
    title: 'Boardroom home',
    label: 'Boardroom home',
  },
};

export const LongLabel: Story = {
  args: {
    href: '/alumni/boardroom-masterclass/speakers-2020',
    title: 'Watch the 2020 series of Boardroom masterclasses',
    label: 'Watch the 2020 series of Boardroom masterclasses',
  },
};

export const Group: Story = {
  render: () => (
    <div className="quicklinks">
      <RelLink
        href="/alumni/boardroom-masterclass"
        title="Boardroom home"
        label="Boardroom home"
      />
      <RelLink
        href="/alumni/boardroom-masterclass/speakers-2021"
        title="Watch the 2021 series of Boardroom masterclasses"
        label="Watch the 2021 series of Boardroom masterclasses"
      />
      <RelLink
        href="/alumni/boardroom-masterclass/speakers-2020"
        title="Watch the 2020 series of Boardroom masterclasses"
        label="Watch the 2020 series of Boardroom masterclasses"
      />
    </div>
  ),
};
