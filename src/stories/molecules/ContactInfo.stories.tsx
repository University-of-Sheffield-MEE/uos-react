import type { Meta, StoryObj } from '@storybook/react';
import { ContactInfo } from '../../components/molecules/ContactInfo';

const meta: Meta<typeof ContactInfo> = {
  title: 'Molecules/ContactInfo',
  component: ContactInfo,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Staff contact information block showing email, optional phone, location, and an expandable full address section used on university staff profile pages.\n\n[Example page](https://sheffield.ac.uk/mps/people/research-staff/bradley-westwater)',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ContactInfo>;

export const Default: Story = {
  args: {
    email: 'b.j.westwater@sheffield.ac.uk',
    emailHref: 'mailto:b.j.westwater@sheffield.ac.uk',
    location: 'Dainton Building',
    fullAddress: 'Mr Bradley Westwater\nSchool of Mathematical and Physical Sciences\nDainton Building\n13 Brook Hill\nSheffield\nS3 7HF',
  },
};

export const WithPhone: Story = {
  args: {
    email: 'r.howell@sheffield.ac.uk',
    emailHref: 'mailto:r.howell@sheffield.ac.uk',
    phone: '+44 114 222 7725',
    phoneHref: 'tel:+44 114 222 7725',
    location: 'Room E107, Broad Lane, Sir Frederick Mappin Building (Broad Lane Building)',
    fullAddress: 'Professor Rob Howell\nSchool of Mechanical, Aerospace and Civil Engineering\nRoom E107, Broad Lane\nSir Frederick Mappin Building (Broad Lane Building)\nMappin Street\nSheffield\nS1 3JD',
  },
};

export const WithSocialLinks: Story = {
  args: {
    email: 'hesam.olya@sheffield.ac.uk',
    emailHref: 'mailto:hesam.olya@sheffield.ac.uk',
    phone: '+44 114 222 0000',
    phoneHref: 'tel:+44 114 222 0000',
    location: 'Sheffield University Management School',
    fullAddress: 'Dr Hesam Olya\nManagement School\nSheffield University Management School\nConduit Road\nSheffield\nS10 1FL',
    socialLinks: [
      { href: 'https://twitter.com/HGTOlya', iconClass: 'fab fa-x-twitter', label: "Hesam Olya's Twitter" },
      { href: 'https://orcid.org/0000-0001-0000-0000', iconClass: 'fab fa-orcid', label: 'Orcid ID:0000-0001-0000-0000' },
    ],
  },
};

export const WithOfficeHours: Story = {
  args: {
    email: 'g.roberts@sheffield.ac.uk',
    emailHref: 'mailto:g.roberts@sheffield.ac.uk',
    location: 'Jessop West',
    officeHours: 'on leave 2022-23',
    fullAddress: 'Dr George Roberts\nSchool of History\nJessop West\n1 Upper Hanover Street\nSheffield\nS3 7RA',
  },
};

export const EmailOnly: Story = {
  args: {
    email: 'nmorgan2@sheffield.ac.uk',
    emailHref: 'mailto:nmorgan2@sheffield.ac.uk',
  },
};
