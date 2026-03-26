import type { Meta, StoryObj } from '@storybook/react';
import { StapContact } from '../../components/molecules/StapContact';

const meta: Meta<typeof StapContact> = {
  title: 'Molecules/StapContact',
  component: StapContact,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof StapContact>;

export const EmailOnly: Story = {
  args: {
    email: 'r.v.duffy@sheffield.ac.uk',
  },
};

export const EmailAndTelephone: Story = {
  args: {
    email: 'r.l.ferguson@sheffield.ac.uk',
    telephone: '+44 7710 025896',
  },
};

export const Group: Story = {
  render: () => (
    <div className="stap-contact-group">
      <StapContact email="m.essat@sheffield.ac.uk" telephone="+44 114 222 0860" />
      <StapContact email="e.a.williams@sheffield.ac.uk" telephone="+44 114 215 9065" />
      <StapContact email="h.boneham@sheffield.ac.uk" />
    </div>
  ),
};
