import type { Meta, StoryObj } from '@storybook/react';
import { StapTeaser } from '../../components/molecules/StapTeaser';

const meta: Meta<typeof StapTeaser> = {
  title: 'Molecules/StapTeaser',
  component: StapTeaser,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof StapTeaser>;

export const Default: Story = {
  args: {
    href: '/smph/people/academic/clinical-medicine/michael-j-cork',
    name: 'Michael J Cork',
    honorific: 'Professor',
    jobTitle: 'Professor of Dermatology',
    department: 'School of Medicine and Population Health',
    email: 'M.J.Cork@sheffield.ac.uk',
    imageSrc: 'https://cdn.sheffield.ac.uk/sites/default/files/styles/profile_square_lg_1x/public/2024-07/Michael%20Cork.png?h=0d2bc03d&itok=8uh0C1JU',
    imageAlt: 'Michael Cork',
    modalImageSrc: 'https://cdn.sheffield.ac.uk/sites/default/files/styles/profile_modal/public/2024-07/Michael%20Cork.png?h=0d2bc03d&itok=WOAkhTQm',
    photoAriaLabel: 'Photo of Michael J Cork',
  },
};

export const WithPhone: Story = {
  args: {
    href: '/news/contact-us/hannah-postles',
    name: 'Hannah Postles',
    jobTitle: 'Head of Public Affairs',
    department: 'Marketing, Admissions, Recruitment and Communications',
    email: 'h.postles@sheffield.ac.uk',
    phone: '+44 7557 815009',
    imageSrc: 'https://cdn.sheffield.ac.uk/sites/default/files/styles/profile_square_lg_1x/public/2022-10/Hannah%20Postles.jpg?h=3f3c9371&itok=aK79gOYo',
    imageAlt: 'Hannah Postles',
    modalImageSrc: 'https://cdn.sheffield.ac.uk/sites/default/files/styles/profile_modal/public/2022-10/Hannah%20Postles.jpg?h=3f3c9371&itok=bAWMj_vm',
    photoAriaLabel: 'Photo of Hannah Postles',
  },
};

export const WithExtraText: Story = {
  args: {
    href: '/management/people/doctoral-researchers/huaiyu-li',
    name: 'Huaiyu Li',
    jobTitle: 'Doctoral Researcher (Marketing and Creative & Cultural Industries)',
    department: 'Management School',
    email: 'hli176@sheffield.ac.uk',
    extraText: 'Thesis title: How Does Exposure to Organic Food Products Affects Consumer Responses? Exploring the Moderating Role of Consumer Impulsiveness',
    imageSrc: 'https://cdn.sheffield.ac.uk/sites/default/files/styles/profile_square_lg_1x/public/2024-07/Huaiyu%20Li%20headshot.jpg?h=3594b42f&itok=3G35dyYR',
    imageAlt: 'Huaiyu Li wearing a white shirt and light blue blazer.',
    modalImageSrc: 'https://cdn.sheffield.ac.uk/sites/default/files/styles/profile_modal/public/2024-07/Huaiyu%20Li%20headshot.jpg?h=3594b42f&itok=BZyhSt76',
    photoAriaLabel: 'Photo of Huaiyu Li',
  },
};

export const WithInitials: Story = {
  args: {
    href: '/management/people/doctoral-researchers/some-person',
    name: 'R G',
    jobTitle: 'Doctoral Researcher',
    department: 'Management School',
    email: 'rg1@sheffield.ac.uk',
    initials: 'R G',
  },
};

export const Group: Story = {
  render: () => (
    <div className="views-row">
      <StapTeaser
        href="/spir/people/academic/rosaleen-duffy"
        name="Rosaleen Duffy"
        honorific="Professor"
        jobTitle="Chair of International Politics"
        department="School of Sociological Studies, Politics and International Relations"
        email="r.v.duffy@sheffield.ac.uk"
        imageSrc="https://cdn.sheffield.ac.uk/sites/default/files/styles/profile_square_lg_1x/public/2022-07/Rosaleen%202.jpg?h=7abcc742&itok=e08Lfz9z"
        imageAlt="Headshot of Rosaleen Duffy"
        modalImageSrc="https://cdn.sheffield.ac.uk/sites/default/files/styles/profile_modal/public/2022-07/Rosaleen%202.jpg?h=7abcc742&itok=ATC7VmLY"
        photoAriaLabel="Photo of Rosaleen Duffy"
      />
      <StapTeaser
        href="/news/contact-us/rebecca-ferguson"
        name="Rebecca Ferguson"
        jobTitle="Media and PR Officer"
        department="Marketing, Admissions, Recruitment and Communications"
        email="r.l.ferguson@sheffield.ac.uk"
        phone="+44 7710 025896"
        imageSrc="https://cdn.sheffield.ac.uk/sites/default/files/styles/profile_square_lg_1x/public/2025-11/1000015701.jpg?h=ad6bce4b&itok=99rr4Kxo"
        imageAlt="Rebecca Ferguson"
        modalImageSrc="https://cdn.sheffield.ac.uk/sites/default/files/styles/profile_modal/public/2025-11/1000015701.jpg?h=ad6bce4b&itok=B5b6l9QH"
        photoAriaLabel="Photo of Rebecca  Ferguson"
      />
      <StapTeaser
        href="/management/people/doctoral-researchers/hannah-boneham"
        name="Hannah Boneham"
        jobTitle="Doctoral Researcher (Work Psychology)"
        department="Management School"
        email="h.boneham@sheffield.ac.uk"
        extraText="Thesis title: Leadership and wellbeing: Focus on the self-other perception gap"
        imageSrc="https://cdn.sheffield.ac.uk/sites/default/files/styles/profile_square_lg_1x/public/2021-06/Profile%20Picture%20-%20Hannah%20JE%20Boneham.png?h=6d44a4da&itok=T8E-iGF0"
        imageAlt="Hannah Boneham"
        modalImageSrc="https://cdn.sheffield.ac.uk/sites/default/files/styles/profile_modal/public/2021-06/Profile%20Picture%20-%20Hannah%20JE%20Boneham.png?h=6d44a4da&itok=yo0wr77j"
        photoAriaLabel="Photo of Hannah Boneham"
      />
    </div>
  ),
};
