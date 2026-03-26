import type { Meta, StoryObj } from '@storybook/react';
import { ProfileGallery } from '../../components/organisms/ProfileGallery';

const meta: Meta<typeof ProfileGallery> = {
  title: 'Organisms/ProfileGallery',
  component: ProfileGallery,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProfileGallery>;

export const Default: Story = {
  args: {
    profiles: [
      {
        href: '/cmbe/undergraduate/profiles/daniel',
        imageSrc: 'https://sheffield.ac.uk/sites/default/files/styles/profile_square_1x/public/2020-01/270A3036.JPG?h=5b3d15af&itok=BZGllgSr',
        imageAlt: 'Graduate Dan Smith',
        quote: "Your career aspirations won't just be given to you – you have to make important decisions yourself and find out what makes you tick",
        name: 'Daniel Smith',
        subhead: 'Process Engineering Assistant,',
        subhead2: 'MEng Chemical Engineering with Biotechnology',
      },
      {
        href: '/cmbe/undergraduate/profiles/thomas',
        imageSrc: 'https://sheffield.ac.uk/sites/default/files/styles/profile_square_1x/public/2025-07/PXL_20240509_130542753.MP~2%20%281%29.jpg?h=66774fc2&itok=SEvTbZVx',
        imageAlt: 'MEng Chemical Engineering student, Thomas',
        quote: 'How my Chemical Engineering degree laid the groundwork for a meaningful career',
        name: 'Thomas',
        subhead: 'MEng Chemical Engineering,',
        subhead2: 'Graduate',
      },
    ],
  },
};

export const ThreeProfiles: Story = {
  args: {
    profiles: [
      {
        href: '/eee/undergraduate/profiles/thomas',
        imageSrc: 'https://sheffield.ac.uk/sites/default/files/styles/profile_square_1x/public/2023-03/Page%208%20-%20Tom%20Searle%20%283%29.png?h=b9da2d5a&itok=eJkmSWGe',
        imageAlt: 'Photograph of alumni Thomas Searle longboarding in the peaks',
        quote: "The course content is really varied - you learn a lot of really interesting things and there's a lot of avenues that you can go down",
        name: 'Thomas Searle',
        subhead: 'Systems Engineer, Sagentia Innovation,',
        subhead2: 'MEng Electrical and Electronic Engineering with a Year in Industry',
      },
      {
        href: '/eee/undergraduate/profiles/aiman',
        imageSrc: 'https://sheffield.ac.uk/sites/default/files/styles/profile_square_1x/public/2023-06/Intern_092r.jpg?h=8ce4bb48&itok=ZO4WjmjB',
        imageAlt: 'Photograph of Aiman outside the General Electric Renewable Energy offices',
        quote: 'I got a job! - Aiman\'s journey with General Electric Renewable Energy, from a placement year to a graduate job',
        name: 'Ameerul Aiman Bin Shahizam',
        subhead: 'MEng Student,',
        subhead2: 'Electrical and Electronic Engineering, took an Industrial Placement Year',
      },
      {
        href: '/eee/undergraduate/profiles/wei-theng',
        imageSrc: 'https://sheffield.ac.uk/sites/default/files/styles/profile_square_1x/public/2023-04/EEE%20Student%20Headshots%202022_7.JPG?h=6ee99509&itok=foPQEDGc',
        imageAlt: 'A photograph taken of MEng Electrical and Electronic Engineering student Wei Theng Haw',
        quote: "Wei Theng's MEng Electrical and Electronic Engineering experience",
        name: 'Wei Theng Haw',
        subhead: 'Undergraduate student,',
        subhead2: 'Electrical and Electronic Engineering (MEng)',
      },
    ],
  },
};
