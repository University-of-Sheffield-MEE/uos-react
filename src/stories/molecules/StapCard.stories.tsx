import type { Meta, StoryObj } from '@storybook/react';
import { StapCard } from '../../components/molecules/StapCard';

const meta: Meta<typeof StapCard> = {
  title: 'Molecules/StapCard',
  component: StapCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof StapCard>;

export const Default: Story = {
  args: {
    href: '/smph/people/academic/clinical-medicine/paul-andrew',
    ariaLabel: 'Profile for Mr Paul Andrew',
    name: 'Mr Paul Andrew',
    jobTitle: 'Senior Skin Research Technician',
    deptName: 'School of Medicine and Population Health',
    imageSrc: '//cdn.sheffield.ac.uk/sites/default/files/styles/profile_square_lg_1x/public/2024-07/Paul%20Andrew.png?h=81747824&itok=omRu4DmN',
    imageAlt: 'Paul Andrew',
    modalImageSrc: '//cdn.sheffield.ac.uk/sites/default/files/styles/profile_modal/public/2024-07/Paul%20Andrew.png?h=81747824&itok=Sjr0jsFr',
    email: 'Paul.Andrew@sheffield.ac.uk',
    phone: '+44 114 215 9539',
  },
};

export const WithDescription: Story = {
  args: {
    href: '/cmbe/people/cbe-academic-staff/stephen-allum',
    ariaLabel: 'Profile for Mr Stephen Allum',
    name: 'Mr Stephen Allum',
    jobTitle: 'Senior University Teacher',
    deptName: 'School of Chemical, Materials and Biological Engineering',
    description: 'Process safety | Risk management',
    imageSrc: '//cdn.sheffield.ac.uk/sites/default/files/styles/profile_square_lg_1x/public/2019-02/CF3_9479.JPG?h=13e19ea1&itok=2HMsoHS1',
    imageAlt: 'Steve Allum',
    modalImageSrc: '//cdn.sheffield.ac.uk/sites/default/files/styles/profile_modal/public/2019-02/CF3_9479.JPG?h=13e19ea1&itok=7nl7atJR',
    email: 's.allum@sheffield.ac.uk',
    phone: '+44 114 222 9606',
  },
};

export const WithInitials: Story = {
  args: {
    href: '/staff/r-brown',
    ariaLabel: 'Profile for R Brown',
    name: 'R Brown',
    jobTitle: 'Research Associate',
    deptName: 'School of Medicine and Population Health',
    profileInitials: 'R B',
    email: 'r.brown@sheffield.ac.uk',
  },
};

export const Group: Story = {
  render: () => (
    <div className="staffcardindex">
      <StapCard
        href="/management/people/academic-staff/mcci/panayiota-alevizou"
        ariaLabel="Profile for Dr Panayiota Alevizou"
        name="Dr Panayiota Alevizou"
        jobTitle="Lecturer in Marketing"
        deptName="Management School"
        imageSrc="//cdn.sheffield.ac.uk/sites/default/files/styles/profile_square_lg_1x/public/2023-07/image2%20%281%29.jpeg?h=81f0f1f5&itok=aPZrq_rL"
        imageAlt="Julie Alevizou"
        modalImageSrc="//cdn.sheffield.ac.uk/sites/default/files/styles/profile_modal/public/2023-07/image2%20%281%29.jpeg?h=81f0f1f5&itok=MeJ5Wbgo"
        email="P.J.Alevizou@Sheffield.ac.uk"
        phone="+44 114 222 3423"
      />
      <StapCard
        href="/management/people/academic-staff/omds/erica-ballantyne"
        ariaLabel="Profile for Dr Erica Ballantyne"
        name="Dr Erica Ballantyne"
        jobTitle="Senior Lecturer in Operations and Supply Chain Management"
        deptName="Management School"
        imageSrc="//cdn.sheffield.ac.uk/sites/default/files/styles/profile_square_lg_1x/public/2024-12/DSC08446%20%281%29.jpg?h=509e7191&itok=wutf6gfz"
        imageAlt="Erica Ballantyne."
        modalImageSrc="//cdn.sheffield.ac.uk/sites/default/files/styles/profile_modal/public/2024-12/DSC08446%20%281%29.jpg?h=509e7191&itok=PSV2MJyF"
        email="e.e.ballantyne@sheffield.ac.uk"
        phone="+44 114 222 3378"
      />
      <StapCard
        href="/geography-planning/people/academic-research/dorothea-kleine"
        ariaLabel="Profile for Professor Dorothea Kleine"
        name="Professor Dorothea Kleine"
        jobTitle="Professor of Human Geography and Director of the Institute for Global Sustainable Development"
        deptName="School of Geography and Planning"
        description="Institute of Global Sustainable Development (IGSD) Research Theme Lead: Data and Digital Innovation"
        imageSrc="//cdn.sheffield.ac.uk/sites/default/files/styles/profile_square_lg_1x/public/2020-05/Kleine_photo_final.jpg?h=cc0a0d2d&itok=vkKxFpaV"
        imageAlt="Dorothea Kleine portrait smiling into camera"
        modalImageSrc="//cdn.sheffield.ac.uk/sites/default/files/styles/profile_modal/public/2020-05/Kleine_photo_final.jpg?h=cc0a0d2d&itok=Gu8pU7tH"
        email="D.J.Kleine@sheffield.ac.uk"
        phone="+44 114 222 7954"
      />
    </div>
  ),
};
