import type { Meta, StoryObj } from '@storybook/react';
import { StaffCardIndex } from '../../components/organisms/StaffCardIndex';

const meta: Meta<typeof StaffCardIndex> = {
  title: 'Organisms/StaffCardIndex',
  component: StaffCardIndex,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A grid listing of staff profile cards, rendering a collection of StapCard molecules in a responsive 3-column layout.\n\n[Example page](https://sheffield.ac.uk/dermatology/university-staff)',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof StaffCardIndex>;

export const Default: Story = {
  args: {
    manual: true,
    cards: [
      {
        name: 'Mr Paul Andrew',
        href: '/smph/people/academic/clinical-medicine/paul-andrew',
        ariaLabel: 'Profile for Mr Paul Andrew',
        jobTitle: 'Senior Skin Research Technician',
        deptName: 'School of Medicine and Population Health',
        email: 'Paul.Andrew@sheffield.ac.uk',
        phone: '+44 114 215 9539',
      },
      {
        name: 'Dr Robert Byers',
        href: '/smph/people/academic/clinical-medicine/robert-byers',
        ariaLabel: 'Profile for Dr Robert Byers',
        jobTitle: 'Postdoctoral Research Associate',
        deptName: 'School of Medicine and Population Health',
        email: 'R.Byers@sheffield.ac.uk',
        phone: '+44 114 215 9577',
      },
      {
        name: 'Mr John Chittock',
        href: '/smph/people/academic/clinical-medicine/john-chittock',
        ariaLabel: 'Profile for Mr John Chittock',
        jobTitle: 'Research Associate',
        deptName: 'School of Medicine and Population Health',
        email: 'J.Chittock@sheffield.ac.uk',
        phone: '+44 114 215 9539',
      },
    ],
  },
};

export const SingleCard: Story = {
  args: {
    manual: true,
    cards: [
      {
        name: 'Professor Sheila Francis',
        href: '/smph/people/academic/clinical-medicine/sheila-francis',
        ariaLabel: 'Profile for Professor Sheila Francis',
        jobTitle: 'Faculty Director of One University Strategy Delivery (FDOU)',
        deptName: 'School of Medicine and Population Health',
        email: 's.francis@sheffield.ac.uk',
        phone: '+44 114 215 9501',
      },
    ],
  },
};

export const SixCards: Story = {
  args: {
    manual: true,
    cards: [
      {
        name: 'Mr Paul Andrew',
        href: '/smph/people/academic/clinical-medicine/paul-andrew',
        ariaLabel: 'Profile for Mr Paul Andrew',
        jobTitle: 'Senior Skin Research Technician',
        deptName: 'School of Medicine and Population Health',
        email: 'Paul.Andrew@sheffield.ac.uk',
        phone: '+44 114 215 9539',
      },
      {
        name: 'Dr Robert Byers',
        href: '/smph/people/academic/clinical-medicine/robert-byers',
        ariaLabel: 'Profile for Dr Robert Byers',
        jobTitle: 'Postdoctoral Research Associate',
        deptName: 'School of Medicine and Population Health',
        email: 'R.Byers@sheffield.ac.uk',
        phone: '+44 114 215 9577',
      },
      {
        name: 'Mr John Chittock',
        href: '/smph/people/academic/clinical-medicine/john-chittock',
        ariaLabel: 'Profile for Mr John Chittock',
        jobTitle: 'Research Associate',
        deptName: 'School of Medicine and Population Health',
        email: 'J.Chittock@sheffield.ac.uk',
        phone: '+44 114 215 9539',
      },
      {
        name: 'Mr Leslie Hunter',
        href: '/smph/people/academic/clinical-medicine/leslie-hunter',
        ariaLabel: 'Profile for Mr Leslie Hunter',
        jobTitle: 'Clinical Trials Coordinator',
        deptName: 'School of Medicine and Population Health',
        email: 'L.Hunter@sheffield.ac.uk',
        phone: '+44 114 215 9576',
      },
      {
        name: 'Dr Oludolapo Katibi',
        href: '/smph/people/academic/clinical-medicine/oludolapo-katibi',
        ariaLabel: 'Profile for Dr Oludolapo Katibi',
        jobTitle: 'PhD Student',
        deptName: 'School of Medicine and Population Health',
        email: 'oskatibi1@sheffield.ac.uk',
        phone: '+44 114 215 9586',
      },
      {
        name: 'Dr Linda Kay',
        href: '/smph/people/academic/clinical-medicine/linda-kay',
        ariaLabel: 'Profile for Dr Linda Kay',
        jobTitle: 'Senior Technician',
        deptName: 'School of Medicine and Population Health',
        email: 'l.kay@sheffield.ac.uk',
        phone: '+44 114 215 9501',
      },
    ],
  },
};
