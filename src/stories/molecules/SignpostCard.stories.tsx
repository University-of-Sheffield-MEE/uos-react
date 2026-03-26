import type { Meta, StoryObj } from '@storybook/react';
import { SignpostCard } from '../../components/molecules/SignpostCard';

const meta: Meta<typeof SignpostCard> = {
  title: 'Molecules/SignpostCard',
  component: SignpostCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SignpostCard>;

export const Default: Story = {
  args: {
    href: '/international/meet-our-students/europe-and-central-asia',
    ariaLabel: 'Student profiles',
    imageSrc: 'https://cdn.sheffield.ac.uk/sites/default/files/styles/mobile_single_column_1x/public/2019-09/2T5A3417.jpg?h=ace41556&itok=cm5ASOKS',
    imageAlt: 'A group of students stood in Weston park',
    title: 'Student profiles',
    body: 'Current students tell us about their time in Sheffield.',
  },
};

export const LongTitle: Story = {
  args: {
    href: '/research/features/uniting-experts-address-infertility-gambia-and-beyond',
    ariaLabel: 'Uniting experts to address infertility in The Gambia and beyond',
    imageSrc: 'https://cdn.sheffield.ac.uk/sites/default/files/styles/mobile_single_column_1x/public/2022-12/3header-image-template%20%281%29.png.jpg?itok=yfpPHfbx',
    imageAlt: 'signs at an infertility awareness event in The Gambia',
    title: 'Uniting experts to address infertility in The Gambia and beyond',
    body: 'Societal expectations of becoming a parent soon after marriage are high in The Gambia, but thousands of couples face involuntary childlessness, or infertility. Our international research collaboration is improving fertility awareness, guiding policy and transforming practice.',
  },
};

export const WithLinkText: Story = {
  args: {
    href: '/parents/home',
    ariaLabel: 'Join the mailing list',
    imageSrc: 'https://cdn.sheffield.ac.uk/sites/default/files/styles/mobile_single_column_1x/public/2019-09/2T5A3417.jpg?h=ace41556&itok=cm5ASOKS',
    imageAlt: 'Students at the university',
    title: 'Join our mailing list',
    body: 'Stay up to date with news and events from the University of Sheffield.',
    linkText: 'Join the mailing list',
  },
};

export const Group: Story = {
  render: () => (
    <div className="row">
      <SignpostCard
        href="/international/meet-our-students/europe-and-central-asia"
        ariaLabel="Student profiles"
        imageSrc="https://cdn.sheffield.ac.uk/sites/default/files/styles/mobile_single_column_1x/public/2019-09/2T5A3417.jpg?h=ace41556&itok=cm5ASOKS"
        imageAlt="A group of students stood in Weston park"
        title="Student profiles"
        body="Current students tell us about their time in Sheffield."
      />
      <SignpostCard
        href="/grantham-centre/policy"
        ariaLabel="Policy"
        imageSrc="https://cdn.sheffield.ac.uk/sites/default/files/styles/mobile_single_column_1x/public/2025-07/seminar%20-%20landscape.png.jpg?itok=BaEBrkEk"
        imageAlt="graphic depicting a seminar, a leaf and a cloud"
        title="Policy"
        body="Policy change is vital for a sustainable future and is a core area of our work."
      />
      <SignpostCard
        href="/crafic/research/carbon-legitimacy-and-disclosure"
        ariaLabel="Carbon legitimacy and disclosure"
        imageSrc="https://cdn.sheffield.ac.uk/sites/default/files/styles/mobile_single_column_1x/public/2021-02/veeterzy-UwBrS-qRMHo-unsplash.jpg?h=8b8cac2c&itok=miQslM6G"
        imageAlt="Smoke emerging from a red and white painted factory chimney"
        title="Carbon legitimacy and disclosure"
        body="This project explores the relationships between carbon disclosure, carbon performance, carbon legitimacy and economic performance."
      />
    </div>
  ),
};
