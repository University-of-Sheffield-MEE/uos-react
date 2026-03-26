import type { Meta, StoryObj } from '@storybook/react';
import { ProfileCard } from '../../components/molecules/ProfileCard';

const meta: Meta<typeof ProfileCard> = {
  title: 'Molecules/ProfileCard',
  component: ProfileCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Default: Story = {
  args: {
    href: '/cmbe/undergraduate/profiles/lucy',
    imageSrc: 'https://sheffield.ac.uk/sites/default/files/styles/profile_square_1x/public/2020-02/CF3_6866.jpg?h=ab4e4061&itok=nLRbID95',
    imageAlt: 'Lucy Sherburn',
    quote: 'Take advantage of everything the University and department have to offer',
    name: 'Lucy Sherburn',
    subhead: 'Graduate Engineer,',
    subhead2: 'MEng Chemical Engineering',
  },
};

export const PostgraduateProfile: Story = {
  args: {
    href: '/biosciences/postgraduate/student-profiles/sruthi-kannel-suresh',
    imageSrc: 'https://sheffield.ac.uk/sites/default/files/styles/profile_square_1x/public/2024-08/Sruthi%20Kannel%20Suresh%20crop.png?h=cff5c2f3&itok=qAOsGbXq',
    imageAlt: 'Photo of Sruthi Kannel Suresh',
    quote: 'My experience on the MSc has inspired me to pursue a PhD',
    name: 'Sruthi Kannel Suresh',
    subhead: 'Research project: Molecular characterisation of TOP1A mutants in zebrafish linked to DNA damage,',
    subhead2: 'MSc Biomedical Science',
  },
};

export const Group: Story = {
  render: () => (
    <div className="multicol">
      <ProfileCard
        href="/cmbe/undergraduate/profiles/daniel"
        imageSrc="https://sheffield.ac.uk/sites/default/files/styles/profile_square_1x/public/2020-01/270A3036.JPG?h=5b3d15af&itok=BZGllgSr"
        imageAlt="Graduate Dan Smith"
        quote="Your career aspirations won't just be given to you – you have to make important decisions yourself and find out what makes you tick"
        name="Daniel Smith"
        subhead="Process Engineering Assistant,"
        subhead2="MEng Chemical Engineering with Biotechnology"
      />
      <ProfileCard
        href="/eee/undergraduate/profiles/thomas"
        imageSrc="https://sheffield.ac.uk/sites/default/files/styles/profile_square_1x/public/2023-03/Page%208%20-%20Tom%20Searle%20%283%29.png?h=b9da2d5a&itok=eJkmSWGe"
        imageAlt="Photograph of alumni Thomas Searle"
        quote="The course content is really varied - you learn a lot of really interesting things and there's a lot of avenues that you can go down"
        name="Thomas Searle"
        subhead="Systems Engineer, Sagentia Innovation,"
        subhead2="MEng Electrical and Electronic Engineering with a Year in Industry"
      />
      <ProfileCard
        href="/mps/undergraduate/chemistry-student-profiles/chris-atkinson"
        imageSrc="https://sheffield.ac.uk/sites/default/files/styles/profile_square_1x/public/2025-09/Chris%20Atkinson%20IMG_9643_0.JPG?h=5ed08b62&itok=LzKwahXI"
        imageAlt="Photo of Chris Atkinson"
        quote="The teaching is brilliant and the support provided is exceptionally helpful"
        name="Chris Atkinson"
        subhead="Undergraduate research experience,"
        subhead2="MChem Chemistry"
      />
    </div>
  ),
};
