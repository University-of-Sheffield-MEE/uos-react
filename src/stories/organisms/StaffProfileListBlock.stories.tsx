import type { Meta, StoryObj } from '@storybook/react';
import { StaffProfileListBlock } from '../../components/organisms/StaffProfileListBlock';

const meta: Meta<typeof StaffProfileListBlock> = {
  title: 'Organisms/StaffProfileListBlock',
  component: StaffProfileListBlock,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'An alphabetically-indexed staff profile listing table showing name, role, department, email, and optional telephone for each staff member, grouped by first letter of surname.\n\n[Example page](https://sheffield.ac.uk/law/people/honorary-and-visiting-staff)',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof StaffProfileListBlock>;

export const Default: Story = {
  args: {
    alphaLinks: [
      { letter: 'A', href: '#A' },
      { letter: 'B', href: '#B' },
      { letter: 'S', href: '#S' },
    ],
    groups: [
      {
        letter: 'A',
        id: 'A',
        members: [
          {
            name: 'Arikan Cakir, Dr Gokce',
            profileHref: 'https://sheffield.ac.uk/law/research/visiting-scholars/gokce-arikan-cakir',
            role: 'Visiting Scholar',
            department: 'School of Law',
            email: 'g.arikancakir@sheffield.ac.uk',
          },
        ],
      },
      {
        letter: 'B',
        id: 'B',
        members: [
          {
            name: 'Blandy, Professor Sarah',
            profileHref: 'https://sheffield.ac.uk/law/people/honorary-and-visiting-staff/sarah-blandy',
            role: 'Emerita Professor',
            department: 'School of Law',
            email: 'S.Blandy@sheffield.ac.uk',
            telephone: '+44 114 222 6776',
            telephoneHref: 'tel:+44 114 222 6776',
          },
          {
            name: 'Birds, Professor John',
            profileHref: 'https://sheffield.ac.uk/law/people/honorary-and-visiting-staff/john-birds-0',
            role: 'Honorary Professor',
            department: 'School of Law',
            email: 'J.Birds@sheffield.ac.uk',
          },
        ],
      },
      {
        letter: 'S',
        id: 'S',
        members: [
          {
            name: 'Shapland, Professor Emeritus Joanna',
            profileHref: 'https://sheffield.ac.uk/law/people/honorary-and-visiting-staff/joanna-shapland',
            role: 'Emeritus Professor of Criminal Justice',
            department: 'School of Law',
            email: 'J.M.Shapland@sheffield.ac.uk',
          },
        ],
      },
    ],
  },
};

export const WithTelephone: Story = {
  args: {
    alphaLinks: [
      { letter: 'B', href: '#B' },
      { letter: 'F', href: '#F' },
      { letter: 'H', href: '#H' },
    ],
    groups: [
      {
        letter: 'B',
        id: 'B',
        members: [
          {
            name: 'Bolam, Lewis',
            profileHref: 'https://sheffield.ac.uk/eee/people/professional-services-staff/lewis-bolam-0',
            role: 'Staffing and Contracts Officer',
            department: 'School of Electrical and Electronic Engineering',
            email: 'l.j.bolam@sheffield.ac.uk',
            telephone: '+44 114 222 1985',
            telephoneHref: 'tel:+44 114 222 1985',
          },
          {
            name: 'Burnett, Dr Amanda',
            profileHref: 'https://sheffield.ac.uk/eee/people/professional-services-staff/amanda-burnett',
            role: 'Operations Manager',
            department: 'School of Electrical and Electronic Engineering',
            email: 'a.burnett@sheffield.ac.uk',
            telephone: '+44 114 222 5897',
            telephoneHref: 'tel:+44 114 222 5897',
          },
        ],
      },
      {
        letter: 'F',
        id: 'F',
        members: [
          {
            name: 'Fieldsend, Rebecca',
            profileHref: 'https://sheffield.ac.uk/eee/people/professional-services-staff/rebecca-fieldsend',
            role: 'Executive Assistant to the Head of School',
            department: 'School of Electrical and Electronic Engineering',
            email: 'r.fieldsend@sheffield.ac.uk',
            telephone: '+44 114 222 5134',
            telephoneHref: 'tel:+44 114 222 5134',
          },
          {
            name: 'Franklin, Kirsty',
            profileHref: 'https://sheffield.ac.uk/eee/people/technical-staff/kirsty-franklin',
            role: 'Assistant Health and Safety Officer',
            department: 'School of Electrical and Electronic Engineering',
            email: 'k.l.franklin@sheffield.ac.uk',
          },
        ],
      },
      {
        letter: 'H',
        id: 'H',
        members: [
          {
            name: 'Harris, Catherine',
            profileHref: 'https://sheffield.ac.uk/eee/people/professional-services-staff/catherine-harris',
            role: 'Student Experience Manager',
            department: 'School of Electrical and Electronic Engineering',
            email: 'c.l.harris@sheffield.ac.uk',
            telephone: '+44 114 222 5408',
            telephoneHref: 'tel:+44 114 222 5408',
          },
          {
            name: 'Hammond, Cara',
            profileHref: 'https://sheffield.ac.uk/eee/people/professional-services-staff/cara-hammond',
            role: 'Assessment and Feedback Officer',
            department: 'School of Electrical and Electronic Engineering',
            email: 'Cara.Hammond@sheffield.ac.uk',
          },
        ],
      },
    ],
  },
};
