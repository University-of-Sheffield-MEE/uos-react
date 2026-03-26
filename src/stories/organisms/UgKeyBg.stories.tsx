import type { Meta, StoryObj } from '@storybook/react';
import { UgKeyBg } from '../../components/organisms/UgKeyBg';

const meta: Meta<typeof UgKeyBg> = {
  title: 'Organisms/UgKeyBg',
  component: UgKeyBg,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof UgKeyBg>;

export const Default: Story = {
  args: {
    startYear: '2026-27 entry',
    altEntryLabel: 'View 2027-28 entry',
    altEntryHref: '/undergraduate/courses/2027/chemical-engineering-beng',
    courseTitle: 'Chemical Engineering',
    awardType: 'BEng',
    department: 'School of Chemical, Materials and Biological Engineering',
    summary:
      "On this course, you'll learn to design and operate processes that make fuels, medicines, plastics, food, and advanced materials. You'll explore energy production and sustainable manufacturing while gaining hands-on skills to tackle real-world challenges in cutting-edge industries.",
    aLevels: 'AAA',
    ucasCode: 'H810',
    duration: '3 years',
    startDate: 'September',
    attendance: 'Full-time',
    featureAccredited: true,
    featureFees: true,
    featureFundingAvailable: true,
    featureOptionalPlacementYear: true,
    featureStudyAbroadOption: true,
    buttons: [
      { label: 'Send enquiry', href: '/contact/prospective-students/enquiry-form' },
      { label: 'Apply for this course', href: '#apply' },
    ],
    stickyButtons: [
      { label: 'Apply for this course', href: '#apply', iconClass: 'fas fa-mouse-pointer' },
      {
        label: 'Send enquiry',
        href: '/contact/prospective-students/enquiry-form',
        iconClass: 'fas fa-question-circle',
      },
      {
        label: 'Chat to a student',
        href: 'https://sheffield.ac.uk/study/chat',
        iconClass: 'fas fa-comments',
      },
    ],
  },
};

export const RegisterForUpdates: Story = {
  args: {
    startYear: '2027-28 entry',
    altEntryLabel: 'View 2026-27 entry',
    altEntryHref: '/undergraduate/courses/2026/electrical-and-electronic-engineering-meng',
    courseTitle: 'Electrical and Electronic Engineering',
    awardType: 'MEng',
    department: 'School of Electrical and Electronic Engineering',
    summary:
      'Discover the technology that powers modern life – from smartphones and electric vehicles to renewable energy systems and cutting-edge electronics.',
    aLevels: 'AAA',
    ucasCode: 'H629',
    duration: '4 years',
    startDate: 'September',
    attendance: 'Full-time',
    featureAccredited: true,
    featureFees: true,
    featureFundingAvailable: true,
    featureOptionalPlacementYear: true,
    featureStudyAbroadOption: true,
    buttons: [
      {
        label: 'Register for updates',
        href: '/undergraduate/register-your-interest',
        className: 'apply-button',
      },
    ],
    stickyButtons: [
      {
        label: 'Register for updates',
        href: '/undergraduate/register-your-interest',
        iconClass: 'fas fa-envelope',
      },
      {
        label: 'Chat to a student',
        href: 'https://sheffield.ac.uk/study/chat',
        iconClass: 'fas fa-comments',
      },
    ],
  },
};

export const WithStudyAbroad: Story = {
  args: {
    startYear: '2027-28 entry',
    altEntryLabel: 'View 2026-27 entry',
    altEntryHref: '/undergraduate/courses/2026/chemistry-mchem',
    courseTitle: 'Chemistry',
    awardType: 'MChem',
    department: 'School of Mathematical and Physical Sciences',
    summary:
      'Develop your advanced research skills in one of our leading research groups with our accredited MChem Chemistry course. Complete a research project in your final year.',
    aLevels: 'AAB',
    ucasCode: 'F105',
    duration: '4 years',
    startDate: 'September',
    attendance: 'Full-time',
    featureAccredited: true,
    featureFees: true,
    featureFundingAvailable: true,
    featureOptionalPlacementYear: true,
    featureStudyAbroad: true,
    buttons: [
      {
        label: 'Register for updates',
        href: '/undergraduate/register-your-interest',
        className: 'apply-button',
      },
    ],
    stickyButtons: [
      {
        label: 'Register for updates',
        href: '/undergraduate/register-your-interest',
        iconClass: 'fas fa-envelope',
      },
      {
        label: 'Chat to a student',
        href: 'https://sheffield.ac.uk/study/chat',
        iconClass: 'fas fa-comments',
      },
    ],
  },
};
