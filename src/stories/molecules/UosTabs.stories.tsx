import type { Meta, StoryObj } from '@storybook/react';
import { UosTabs } from '../../components/molecules/UosTabs';

const meta: Meta<typeof UosTabs> = {
  title: 'Molecules/UosTabs',
  component: UosTabs,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof UosTabs>;

export const Default: Story = {
  args: {
    ariaLabel: 'Years',
    tabs: [
      { id: 'ug-tab-1', label: 'First year', selected: true },
      { id: 'ug-tab-2', label: 'Second year', selected: false },
      { id: 'ug-tab-3', label: 'Third year', selected: false },
    ],
  },
};

export const FourYears: Story = {
  args: {
    ariaLabel: 'Years',
    tabs: [
      { id: 'ug-tab-1', label: 'First year', selected: true },
      { id: 'ug-tab-2', label: 'Second year', selected: false },
      { id: 'ug-tab-3', label: 'Third year', selected: false },
      { id: 'ug-tab-4', label: 'Fourth year', selected: false },
    ],
  },
};

export const PostgraduateModules: Story = {
  args: {
    ariaLabel: 'Years',
    tabs: [
      { id: 'pgt-tab-1', label: 'Core modules', selected: true },
      { id: 'pgt-tab-2', label: 'Stem Cell and Regenerative Medicine pathway', selected: false },
      { id: 'pgt-tab-3', label: 'Cell Biology and Drug Development pathway', selected: false },
    ],
  },
};

export const SingleTab: Story = {
  args: {
    ariaLabel: 'Years',
    tabs: [
      { id: 'pgt-tab-1', label: 'Modules', selected: true },
    ],
  },
};
