import type { Meta, StoryObj } from '@storybook/react';
import { BlockAlertbanner } from '../components/BlockAlertbanner';

const meta: Meta<typeof BlockAlertbanner> = {
  title: 'Components/BlockAlertbanner',
  component: BlockAlertbanner,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BlockAlertbanner>;

export const Default: Story = {
  args: {},
};

export const WithContent: Story = {
  render: () => (
    <BlockAlertbanner>
      <div className="alert alert-warning" role="alert">
        <strong>Important notice:</strong> Scheduled maintenance is planned for this weekend. Some services may be unavailable.
      </div>
    </BlockAlertbanner>
  ),
};
