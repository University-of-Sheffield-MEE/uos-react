import type { Meta, StoryObj } from '@storybook/react';
import { ExploreItem } from '../../components/layouts/ExploreItem';

const meta: Meta<typeof ExploreItem> = {
  title: 'Layouts/ExploreItem',
  component: ExploreItem,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A named, anchor-linked page section used on course pages, containing an h2 heading and freeform body content.\n\n[Example page](https://sheffield.ac.uk/undergraduate/courses/2026/chemical-engineering-beng)',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ExploreItem>;

export const Default: Story = {
  args: {
    id: 'coursedescription',
    heading: 'Course description',
    children: (
      <p>
        Chemical engineering plays a key role in essential sectors such as energy, food production,
        and pharmaceuticals. A Chemical Engineering BEng from Sheffield opens the door to a diverse
        and rewarding career in industries that shape our world.
      </p>
    ),
  },
};

export const EntryRequirements: Story = {
  args: {
    id: 'entryrequirements',
    heading: 'Entry requirements',
    children: (
      <p>
        We welcome applications from students with a range of qualifications and backgrounds. Please
        check our entry requirements for full details.
      </p>
    ),
  },
};
