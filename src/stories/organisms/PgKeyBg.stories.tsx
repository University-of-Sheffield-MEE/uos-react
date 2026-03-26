import type { Meta, StoryObj } from '@storybook/react';
import { PgKeyBg } from '../../components/organisms/PgKeyBg';

const meta: Meta<typeof PgKeyBg> = {
  title: 'Organisms/PgKeyBg',
  component: PgKeyBg,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PgKeyBg>;

export const Default: Story = {
  render: () => (
    <div id="main">
      <PgKeyBg
        startYear="2026-27 entry"
        courseTitle="Human Bioarchaeology and Osteology"
        awardType="MSc"
        department="School of Biosciences, Faculty of Science"
        courseIntro="Satisfy your curiosity and understand people and populations of the past through the study of human skeletal remains. Learn the scientific techniques you'll need to collect, analyse and present anthropological data as you contribute to the ever-evolving field of bioarchaeology."
        startDate="September 2026"
        durations={['1 year']}
        attendanceModes={['Full-time']}
        featureAccredited={false}
        featureCourseFee={true}
        buttons={[
          { label: 'Visit us', href: '#visit' },
          { label: 'Apply for this course', href: '#apply' },
        ]}
        stickyButtons={[
          { label: 'Visit us', href: '#visit', iconClass: 'fas fa-map-marker-alt' },
          { label: 'Apply for this course', href: '#apply', iconClass: 'fas fa-mouse-pointer' },
          { label: 'Chat to a student', href: 'https://www.sheffield.ac.uk/study/chat', iconClass: 'fas fa-comments' },
        ]}
      />
    </div>
  ),
};

export const Accredited: Story = {
  render: () => (
    <div id="main">
      <PgKeyBg
        startYear="2026-27 entry"
        courseTitle="Public Health (Health Services Research)"
        awardType="MPH"
        department="School of Medicine and Population Health, Faculty of Health"
        courseIntro="Develop essential research and analytical skills for evaluating health services and public health interventions, laying a solid foundation for a PhD or an academic career in public health."
        startDate="September 2026"
        durations={['1 year', '2 years']}
        attendanceModes={['Full-time', 'Part-time']}
        featureAccredited={true}
        featureCourseFee={true}
        buttons={[
          { label: 'Visit us', href: '#visit' },
          { label: 'Apply for this course', href: '#apply' },
        ]}
        stickyButtons={[
          { label: 'Visit us', href: '#visit', iconClass: 'fas fa-map-marker-alt' },
          { label: 'Apply for this course', href: '#apply', iconClass: 'fas fa-mouse-pointer' },
          { label: 'Chat to a student', href: 'https://www.sheffield.ac.uk/study/chat', iconClass: 'fas fa-comments' },
        ]}
      />
    </div>
  ),
};

export const PartTimeOnline: Story = {
  render: () => (
    <div id="main">
      <PgKeyBg
        startYear="2026-27 entry"
        courseTitle="International Postgraduate Certificate in Education (iPGCE)"
        awardType="iPGCE"
        department="School of Education, Faculty of Social Sciences"
        courseIntro="Enhance your professional performance by developing a deeper understanding of planning, teaching and assessment strategies, new technologies and links between practice, theory and research."
        startDate="September 2026"
        durations={['1 year']}
        attendanceModes={['Part-time', 'Online learning']}
        featureAccredited={false}
        featureCourseFee={true}
        buttons={[
          { label: 'Visit us', href: '#visit' },
          { label: 'Apply for this course', href: '#apply' },
        ]}
        stickyButtons={[
          { label: 'Visit us', href: '#visit', iconClass: 'fas fa-map-marker-alt' },
          { label: 'Apply for this course', href: '#apply', iconClass: 'fas fa-mouse-pointer' },
          { label: 'Chat to a student', href: 'https://www.sheffield.ac.uk/study/chat', iconClass: 'fas fa-comments' },
        ]}
      />
    </div>
  ),
};
