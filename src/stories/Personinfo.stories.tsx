import type { Meta, StoryObj } from '@storybook/react';
import { Personinfo } from '../components/Personinfo';

const meta: Meta<typeof Personinfo> = {
  title: 'Components/Personinfo',
  component: Personinfo,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Personinfo>;

export const Default: Story = {
  args: {
    title: 'Dr',
    firstName: 'Paraskevi',
    lastName: 'Katsiampa',
    department: 'Management School',
    mainRole: 'Lecturer in Financial Management',
  },
};

export const WithPostNominals: Story = {
  args: {
    title: 'Professor',
    firstName: 'Hui',
    lastName: 'Long',
    postNominals: 'BEng, MSc, PhD, CEng, FIMechE, SFHEA.',
    department: 'School of Mechanical, Aerospace and Civil Engineering',
    mainRole: 'Professor of Mechanics of Materials',
    secondaryRole: 'Departmental Director of Research and Innovation',
  },
};

export const WithPhoto: Story = {
  args: {
    title: 'Dr',
    firstName: 'Alon',
    lastName: 'Zivony',
    department: 'School of Psychology',
    mainRole: 'Lecturer in Psychology',
    profileImageSrc: '//cdn.sheffield.ac.uk/sites/default/files/styles/profile_square_lg_1x/public/2023-09/Photo%20of%20Alon%20Zivony.jpg?h=1b0af9cd&itok=X3TsJOAj',
    profileImageAlt: 'Photo of Alon Zivony',
    profileModalImageSrc: '//cdn.sheffield.ac.uk/sites/default/files/styles/profile_modal/public/2023-09/Photo%20of%20Alon%20Zivony.jpg?h=1b0af9cd&itok=gfGUZ8VL',
  },
};

export const WithPhotoAndSecondaryRole: Story = {
  args: {
    title: 'Professor',
    firstName: 'Rob',
    lastName: 'Howell',
    postNominals: 'BEng, SFHEA, PhD',
    department: 'School of Mechanical, Aerospace and Civil Engineering',
    mainRole: 'Professor of Aerospace Engineering',
    secondaryRole: 'Head of New Interdisciplinary Engineering Programmes',
    profileImageSrc: '//cdn.sheffield.ac.uk/sites/default/files/styles/profile_square_lg_1x/public/2021-09/img.jpg?itok=dM6S6xD4',
    profileImageAlt: 'Dr Rob Howell',
    profileModalImageSrc: '//cdn.sheffield.ac.uk/sites/default/files/styles/profile_modal/public/2021-09/img.jpg?itok=eFPqDfVm',
  },
};

export const NoTitle: Story = {
  args: {
    firstName: 'Nick',
    lastName: 'Morgan',
    department: 'School of Sociological Studies, Politics and International Relations',
    mainRole: 'PhD student',
    profileImageSrc: '//cdn.sheffield.ac.uk/sites/default/files/styles/profile_square_lg_1x/public/2021-11/DSC_2187.JPG?itok=YFqD55cF',
    profileImageAlt: 'Sociological Studies PhD student Nick Morgan',
    profileModalImageSrc: '//cdn.sheffield.ac.uk/sites/default/files/styles/profile_modal/public/2021-11/DSC_2187.JPG?itok=hXqr3oh4',
  },
};
