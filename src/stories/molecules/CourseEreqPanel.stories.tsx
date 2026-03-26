import type { Meta, StoryObj } from '@storybook/react';
import { CourseEreqPanel } from '../../components/molecules/CourseEreqPanel';

const meta: Meta<typeof CourseEreqPanel> = {
  title: 'Molecules/CourseEreqPanel',
  component: CourseEreqPanel,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CourseEreqPanel>;

export const Standard: Story = {
  args: {
    id: 'js-course-ereq-panel--standard',
    ariaLabelledBy: 'js-course-ereq-tab--standard',
    variant: 'standard',
    offerLabel: 'Standard offer',
    grades: 'AAA',
    gradesContext: 'including Maths and a science or technology subject',
    qualifications: [
      {
        term: 'A Levels + a fourth Level 3 qualification',
        description: 'AAB, including Maths and a science or technology subject + A in a relevant EPQ',
      },
      {
        term: 'International Baccalaureate',
        description: '36, with 6 in Higher Level Maths and a science',
      },
      {
        term: 'BTEC Extended Diploma',
        description: 'DDD in Engineering or Applied Science + A in A Level Maths',
      },
      {
        term: 'BTEC Diploma',
        description: 'DD in Engineering or Applied Science + A in A Level Maths',
      },
      {
        term: 'T Level',
        description: 'Distinction in the relevant T Level, including grade A in the core component + A in A Level Maths',
      },
      {
        term: 'Scottish Highers + Advanced Higher/s',
        description: 'AAABB + AA in Maths and a science',
      },
      {
        term: 'Welsh Baccalaureate + 2 A Levels',
        description: 'A + AA in Maths and a science or technology subject',
      },
      {
        term: 'Access to HE Diploma',
        description: 'Award of the Access to HE Diploma in a relevant subject, with 45 credits at Level 3, including 39 at Distinction and 6 at Merit + A in A Level Maths',
      },
    ],
    hasColon: true,
    otherRequirements: [
      'Science and technology subjects include Biology/Human Biology, Chemistry, Computer Science, Electronics, Environmental Science, Further Maths, Physics and Design & Technology',
    ],
  },
};

export const AccessSheffield: Story = {
  args: {
    id: 'js-course-ereq-panel--access_sheffield',
    ariaLabelledBy: 'js-course-ereq-tab--access_sheffield',
    variant: 'access_sheffield',
    offerLabel: 'Access Sheffield offer',
    grades: 'ABB',
    gradesContext: 'including Maths and Physics + pass in the practical element of any science A Levels taken',
    qualifications: [
      {
        term: 'A Levels + a fourth Level 3 qualification',
        description: 'ABB, including Maths and Physics + B in a relevant EPQ',
      },
      {
        term: 'International Baccalaureate',
        description: '33, with 5 in Higher Level Maths and Physics',
      },
      {
        term: 'BTEC Extended Diploma',
        description: 'Not accepted',
      },
      {
        term: 'BTEC Diploma',
        description: 'Not accepted',
      },
      {
        term: 'Scottish Highers + Advanced Higher/s',
        description: 'ABBBB + AB in Maths and Physics',
      },
      {
        term: 'Welsh Baccalaureate + 2 A Levels',
        description: 'B + AB in Maths and Physics',
      },
      {
        term: 'Access to HE Diploma',
        description: 'Award of the Access to HE Diploma in Science, with 45 credits at Level 3, including 30 at Distinction and 15 at Merit',
      },
    ],
    hasColon: true,
  },
};

export const NoAccess: Story = {
  args: {
    id: 'js-course-ereq-panel--no-access',
    ariaLabelledBy: 'js-course-ereq-tab--no-access',
    variant: 'no-access',
    offerLabel: 'Standard offer',
    grades: 'BBB; BBC',
    gradesContext: 'BBB (any A Level); BBC including Maths and at least one of Physics, Chemistry or Biology',
    qualifications: [
      {
        term: 'International Baccalaureate',
        description: '32; 31, with Maths and at least one of Physics, Chemistry or Biology at Higher Level 5 or Standard Level 7',
      },
      {
        term: 'BTEC Extended Diploma',
        description: 'DDD in Engineering or Applied Science + GCSE Science grade 6/B and Maths grade 7/A',
      },
      {
        term: 'Scottish Highers',
        description: 'AABBB (any subjects); ABBBB, including Maths and at least one of Physics, Chemistry or Biology',
      },
    ],
    hasColon: false,
    otherRequirements: [
      'If you are studying both Maths and at least one of Physics, Chemistry or Biology at A Level, there are no additional GCSE requirements.',
    ],
  },
};
