import type { Meta, StoryObj } from '@storybook/react';
import { ModuleDisclaimer } from '../../components/atoms/ModuleDisclaimer';

const meta: Meta<typeof ModuleDisclaimer> = {
  title: 'Atoms/ModuleDisclaimer',
  component: ModuleDisclaimer,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A standardised disclaimer paragraph displayed on module pages, noting that course content is reviewed annually and may be updated or withdrawn.\n\n[Example page](https://sheffield.ac.uk/smph/modules/smp4154-study-design-and-systematic-review-methods)',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ModuleDisclaimer>;

export const Default: Story = {
  args: {},
};
