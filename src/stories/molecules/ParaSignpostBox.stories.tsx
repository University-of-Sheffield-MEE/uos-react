import type { Meta, StoryObj } from '@storybook/react';
import { ParaSignpostBox } from '../../components/molecules/ParaSignpostBox';

const meta: Meta<typeof ParaSignpostBox> = {
  title: 'Molecules/ParaSignpostBox',
  component: ParaSignpostBox,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ParaSignpostBox>;

export const Default: Story = {
  args: {
    href: '/international/after-you-apply/undergraduate',
    ariaLabel: 'Track your application',
    title: 'Track your application',
    imageSrc: 'https://sheffield.ac.uk/sites/default/files/styles/mobile_single_column_1x/public/2024-08/29993.jpg?h=c043925e&itok=osAZvTg6',
    imageAlt: 'Firth Court',
    dark: true,
  },
};

export const Dark: Story = {
  args: {
    href: '/english/undergraduate',
    ariaLabel: 'Undergraduate study',
    title: 'Undergraduate study',
    imageSrc: 'https://sheffield.ac.uk/sites/default/files/styles/mobile_single_column_1x/public/2019-04/18183.jpg?h=9c9a052d&itok=PsRPiFCR',
    imageAlt: 'A student takes notes and listens during a group discussion',
    dark: true,
  },
};

export const Highlight: Story = {
  args: {
    href: '/feastandfamine/overabundance-and-defectivity',
    ariaLabel: 'Overabundance and defectivity',
    title: 'Overabundance and defectivity',
    imageSrc: 'https://sheffield.ac.uk/sites/default/files/styles/mobile_single_column_1x/public/2020-10/26408.jpg?h=cef4c4d5&itok=5KLeLbFh',
    imageAlt: 'Library shelf',
    highlight: true,
  },
};

export const Group: Story = {
  render: () => (
    <div className="multicol">
      <ParaSignpostBox
        href="/international/entry-requirements/germany"
        ariaLabel="Entry requirements"
        title="Entry requirements"
        imageSrc="https://sheffield.ac.uk/sites/default/files/styles/mobile_single_column_1x/public/2019-09/_DB_8660.jpg?h=eb69096e&itok=8D0hRBLd"
        imageAlt="a group of students in a lecture theatre"
        dark={true}
      />
      <ParaSignpostBox
        href="/social-sciences/research/health-and-wellbeing/health-informatics"
        ariaLabel="Health Informatics"
        title="Health Informatics"
        imageSrc="https://sheffield.ac.uk/sites/default/files/styles/mobile_single_column_1x/public/2021-06/pexels-thirdman-5327920.jpg?h=0e43a09f&itok=iHUjEQNv"
        imageAlt="A stethoscope and an iPad with data"
        dark={true}
      />
      <ParaSignpostBox
        href="/social-sciences/our-people/faculty-leadership"
        ariaLabel="Faculty leadership"
        title="Faculty leadership"
        imageSrc="https://sheffield.ac.uk/sites/default/files/styles/mobile_single_column_1x/public/2024-10/39142.jpg?h=8c73ad80&itok=GdbZ-Asx"
        imageAlt="An exterior close up view of the Wave"
        dark={true}
      />
    </div>
  ),
};
