import type { Meta, StoryObj } from '@storybook/react';
import { CourseCard } from '../../components/molecules/CourseCard';

const meta: Meta<typeof CourseCard> = {
  title: 'Molecules/CourseCard',
  component: CourseCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A course promotion card displaying a course title, award, level, metadata (dates, duration, attendance), and a short description with an arrow link indicator.\n\n[Example page](https://sheffield.ac.uk/smph/modules/smp4154-study-design-and-systematic-review-methods)',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CourseCard>;

export const Default: Story = {
  args: {
    title: 'Health Economics and Decision Modelling',
    award: 'MSc',
    level: 'Postgraduate taught',
    description:
      'Develop analytical skills for a career in health economics. Learn to measure, model, and evaluate healthcare interventions to inform public health decisions.',
    metaItems: [
      { icon: 'fa-calendar-alt', text: 'September 2026 start' },
      { icon: 'fa-clock', text: '1 year Full-time' },
    ],
    isAccredited: false,
    isUndergraduate: false,
  },
};

export const Accredited: Story = {
  args: {
    title: 'Architecture',
    award: 'MArch',
    level: 'Postgraduate taught',
    description:
      'This course will enable you to make sophisticated architectural propositions. You will discover the benefits of socially engaged design through research-led design studios and our acclaimed live projects programme.',
    metaItems: [
      { icon: 'fa-calendar-alt', text: 'September 2026 start' },
      { icon: 'fa-clock', text: '2 years Full-time' },
    ],
    isAccredited: true,
    isUndergraduate: false,
  },
};

export const MultipleDurations: Story = {
  args: {
    title: 'Clinical Research',
    award: 'MSc',
    level: 'Postgraduate taught',
    description:
      'Our Clinical Research course prepares students with the skills to critically evaluate research and handle the practical and regulatory challenges of designing and conducting clinical and health research projects.',
    metaItems: [
      { icon: 'fa-calendar-alt', text: 'September 2026 start' },
      { icon: 'fa-clock', text: '1 year / 2 years / 3 years Full-time / Part-time' },
    ],
    isAccredited: false,
    isUndergraduate: false,
  },
};

export const Undergraduate: Story = {
  args: {
    title: 'Nursing (Adult)',
    award: 'BMedSci',
    level: 'Undergraduate',
    description:
      'Become an adult nurse and make a difference every day. Equip yourself with the clinical skills, knowledge and confidence you need to register with the Nursing and Midwifery Council (NMC) and deliver exceptional care to patients.',
    isAccredited: true,
    isUndergraduate: true,
  },
};

export const Group: Story = {
  render: () => (
    <div className="course-cards-list">
      <CourseCard
        title="Urban Design and Planning"
        award="MSc"
        level="Postgraduate taught"
        description="Gain specialist skills and understanding of urban design and planning, engage with critical challenges facing cities internationally."
        metaItems={[
          { icon: 'fa-calendar-alt', text: 'September 2026 start' },
          { icon: 'fa-clock', text: '1 year Full-time' },
        ]}
        isAccredited={true}
        isUndergraduate={false}
      />
      <CourseCard
        title="Health Economics and Decision Modelling"
        award="MSc"
        level="Postgraduate taught"
        description="Develop analytical skills for a career in health economics."
        metaItems={[
          { icon: 'fa-calendar-alt', text: 'September 2026 start' },
          { icon: 'fa-clock', text: '1 year Full-time' },
        ]}
        isAccredited={false}
        isUndergraduate={false}
      />
      <CourseCard
        title="Architecture"
        award="MArch"
        level="Postgraduate taught"
        description="This course will enable you to make sophisticated architectural propositions."
        metaItems={[
          { icon: 'fa-calendar-alt', text: 'September 2026 start' },
          { icon: 'fa-clock', text: '2 years Full-time' },
        ]}
        isAccredited={true}
        isUndergraduate={false}
      />
    </div>
  ),
};
