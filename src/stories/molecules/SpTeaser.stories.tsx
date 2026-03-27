import type { Meta, StoryObj } from '@storybook/react';
import { SpTeaser } from '../../components/molecules/SpTeaser';

const meta: Meta<typeof SpTeaser> = {
  title: 'Molecules/SpTeaser',
  component: SpTeaser,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Student profile teaser card displaying a thumbnail image, quote/title link, student name, course, and short description.\n\n[Example page](https://sheffield.ac.uk/ijc/postgraduate/meet-our-postgraduate-students)',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SpTeaser>;

export const Default: Story = {
  args: {
    imageSrc: 'https://sheffield.ac.uk/sites/default/files/styles/responsive_thumbnail_256px_x_144px_/public/2025-02/PXL_20250116_130109153.jpg',
    imageAlt: 'Mechanical Engineering student Joel',
    href: '/mac/undergraduate/profiles/joel',
    title: 'Freedom to choose my own projects and join different engineering teams has allowed me to shape my degree',
    studentName: 'Joel',
    studentCourse: 'MEng Mechanical Engineering with an industrial placement',
    description: 'Joel talks about his industrial placement experience and how his degree is preparing him to be an engineer',
  },
};

export const WithLongTitle: Story = {
  args: {
    imageSrc: 'https://sheffield.ac.uk/sites/default/files/styles/responsive_thumbnail_256px_x_144px_/public/2021-03/profile.jpg',
    imageAlt: 'Photo of Kat Cowan',
    href: '/hpdh/undergraduate/history-student-profiles/kat-cowan',
    title: 'History has informed everything I do on a daily basis. It changes the way I view the news. It changes the way I analyse current events',
    studentName: 'Kat Cowan',
    studentCourse: 'BA History alumni',
    description: 'Kat Cowan talks about her passion for history, and how it has led to a successful career in broadcast journalism.',
  },
};

export const Group: Story = {
  render: () => (
    <div className="row">
      <SpTeaser
        imageSrc="https://sheffield.ac.uk/sites/default/files/styles/responsive_thumbnail_256px_x_144px_/public/2026-01/profile1.jpg"
        imageAlt="Student Damian Shepherd in front of a blurred building"
        href="/ijc/postgraduate/meet-our-postgraduate-students/damian-shepherd"
        title="The standard of teaching was impeccable and every tutor was invested in ensuring each student reached their full potential"
        studentName="Damian Shepherd"
        studentCourse="Journalism MA alumnus"
        description="After graduating from our Journalism MA in 2020, Damian Shepherd has won several journalism awards for his deep investigative stories."
      />
      <SpTeaser
        imageSrc="https://sheffield.ac.uk/sites/default/files/styles/responsive_thumbnail_256px_x_144px_/public/2026-01/profile2.jpg"
        imageAlt="An general engineering alumnus standing on the rail with his Network Rail uniform"
        href="/eee/undergraduate/profiles/fudail-0"
        title="Seeing something I created being genuinely useful to the team has been extremely rewarding."
        studentName="Fudail Ajaz"
        studentCourse="General Engineering alumnus"
        description="Our General Engineering graduate, Fudail shares how a broad engineering foundation prepared him for the fast-paced career of rail infrastructure."
      />
      <SpTeaser
        imageSrc="https://sheffield.ac.uk/sites/default/files/styles/responsive_thumbnail_256px_x_144px_/public/2019-03/Ana.jpg"
        imageAlt="Profile picture of MA student Ana Paula Biazon Rocha"
        href="/english/postgraduate/ma-student-profiles/ana-paula-biazon-rocha"
        title="MA student Ana Paula Biazon Rocha on why she chose Sheffield"
        studentName="Ana Paula Biazon Rocha"
        studentCourse="MA Applied Linguistics with TESOL"
        description="Ana Paula Biazon Rocha is from Sao Paulo, Brazil and studying for her Masters in Applied Linguistics with TESOL."
      />
    </div>
  ),
};
