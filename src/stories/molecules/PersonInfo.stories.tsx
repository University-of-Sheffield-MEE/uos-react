import type { Meta, StoryObj } from '@storybook/react';
import { PersonInfo } from '../../components/molecules/PersonInfo';

const meta: Meta<typeof PersonInfo> = {
  title: 'Molecules/PersonInfo',
  component: PersonInfo,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Staff or student profile header displaying name, title, department, role, optional post-nominal letters, and an optional profile picture with modal enlarge functionality.\n\n[Example page](https://sheffield.ac.uk/mps/people/research-staff/bradley-westwater)',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof PersonInfo>;

export const Default: Story = {
  args: {
    title: 'Mr',
    firstName: 'Bradley',
    lastName: 'Westwater',
    department: 'School of Mathematical and Physical Sciences',
    mainRole: 'Research Associate',
  },
};

export const WithProfilePicture: Story = {
  args: {
    title: 'Dr',
    firstName: 'Alon',
    lastName: 'Zivony',
    department: 'School of Psychology',
    mainRole: 'Lecturer in Psychology',
    profileImageSrc: 'https://cdn.sheffield.ac.uk/sites/default/files/styles/profile_square_lg_1x/public/2023-09/Photo%20of%20Alon%20Zivony.jpg?h=1b0af9cd&itok=X3TsJOAj',
    profileImageAlt: 'Photo of Alon Zivony',
    profileModalImageSrc: 'https://cdn.sheffield.ac.uk/sites/default/files/styles/profile_modal/public/2023-09/Photo%20of%20Alon%20Zivony.jpg?h=1b0af9cd&itok=gfGUZ8VL',
  },
};

export const WithPostNominalsAndRoles: Story = {
  args: {
    title: 'Professor',
    firstName: 'Rob',
    lastName: 'Howell',
    department: 'School of Mechanical, Aerospace and Civil Engineering',
    mainRole: 'Professor of Aerospace Engineering',
    postNominals: 'BEng, SFHEA, PhD',
    roles: 'Head of New Interdisciplinary Engineering Programmes',
    profileImageSrc: 'https://cdn.sheffield.ac.uk/sites/default/files/styles/profile_square_lg_1x/public/2021-09/2021-08-10%20%20Sheff%20Uni%20Mech%20Eng%20Headshots%20Meg06291_0.jpg?h=467247af&itok=dM6S6xD4',
    profileImageAlt: 'Dr Rob Howell',
    profileModalImageSrc: 'https://cdn.sheffield.ac.uk/sites/default/files/styles/profile_modal/public/2021-09/2021-08-10%20%20Sheff%20Uni%20Mech%20Eng%20Headshots%20Meg06291_0.jpg?h=467247af&itok=eFPqDfVm',
  },
};

export const NoTitle: Story = {
  args: {
    firstName: 'Nick',
    lastName: 'Morgan',
    department: 'School of Sociological Studies, Politics and International Relations',
    mainRole: 'PhD student',
    profileImageSrc: 'https://cdn.sheffield.ac.uk/sites/default/files/styles/profile_square_lg_1x/public/2021-11/DSC_2187.JPG?h=6626aca4&itok=YFqD55cF',
    profileImageAlt: 'Sociological Studies PhD student Nick Morgan',
    profileModalImageSrc: 'https://cdn.sheffield.ac.uk/sites/default/files/styles/profile_modal/public/2021-11/DSC_2187.JPG?h=6626aca4&itok=hXqr3oh4',
  },
};
