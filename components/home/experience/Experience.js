import { SectionHeader } from '@/components/utils/SectionHeader';
import { ExperienceItem } from './ExperienceItem';

export const Experience = () => {
  return (
    <section className='section-wrapper' id='experience'>
      <SectionHeader title='Experience' dir='l' />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: 'Code The Dream Labs',
    position: 'Junior Software Engineer',
    time: 'March 2024 - present',
    location: 'Remote',
    description:
      'My key responsibilities involve full-stack development, utilizing Next.js as the framework, React, and Material UI on the frontend, and Node.js on the backend. With a strong focus on enhancing user experience and functionality, I welcome feedback to iterate on my contributions and adapt to the evolving needs of our project.',
    tech: [
      'Next.js',
      'React',
      'Material UI',
      'Figma',
      'Node',
      'MongoDB',
      'Playwright',
      'Jest',
    ],
  },

  {
    title: 'SF Pathways',
    position: 'Senior Fellow',
    time: 'May 2023 - March 2024 ',
    location: 'San Fransisco',
    description:
      'I lead the creation visualizations for the Community Ambassadors Program (CAP) in San Francisco, utilizing tools like Excel, Power BI, and the Microsoft Suite. My work involved developing interactive dashboards and bar graphs to effectively display key activities by six CAP teams. I prioritize making these visualizations both insightful and accessible, ensuring they offer a clear and inclusive perspective of the community initiatives.',
    tech: [
      'Excel',
      'PowerBI',
      'Microsoft Suite',
      'Figma',
      'Spanish translastion & interpretation',
    ],
  },

  {
    title: 'Code The Dream',
    position: 'Frontend Fellow',
    time: 'October 2023 - December 2023',
    location: 'Remote',
    description:
      "Participated in the frontend development of Skill Stacks, a dynamic flashcard app, during an 8-week Practicum. Collaborated with a team of developers to design and implement engaging features, ensuring seamless integration and user experience. Actively participated in weekly stand-up meetings and sprint planning, contributing to the project's agile development process.",
    tech: ['React', 'Radix-UI', 'NodeJS', 'Express', 'MongoDB', 'Git', 'Agile'],
  },

  {
    title: 'Code The Dream',
    position: 'Backend Fellow',
    time: 'Feb 2023 - May 2023 ',
    location: 'Remote',
    description:
      'In the 8-week development cycle, I collaborate with developers and mentors to create an engaging game using Socket-io. In addition, I participated in weekly stand-up meetings and sprint planning sessions to ensure the project is progressing smoothly.',
    tech: [
      'React',
      'Tailwind',
      'Socket-io',
      'Node',
      'Express',
      'MongoDB',
      'Jira',
      'Agile',
    ],
  },

  {
    title: 'DreamSF',
    position: 'Fellow',
    time: 'July 2022 - May 2023',
    location: 'San Fransisco',
    description:
      'As a Social Media Lead for the DreamSF, I was responsible for promoting the fellowship application through social media channels, coordinating tasks, facilitating meetings, and developing newsletters communicating job opportunities for the DreamSF network.',
    tech: [
      'Canva',
      'Mailchimp',
      'Microsoft Suite',
      'Spanish translastion & interpretation',
    ],
  },

  {
    title: 'Code The Dream',
    position: 'NodeJS Backend Student',
    time: 'Nov 2022 - Jan 2023',
    location: 'Remote',
    description:
      'I built server-side applications, created APIs, and worked with databases. In addition, I understand NodeJS concepts such as routes, middleware, event-driven programming, and asynchronous code.',
    tech: ['Javascript', 'NodeJS', 'Express', 'MongoDB'],
  },

  {
    title: 'Mission Economic Development Agency',
    position: 'Data Evaluation Fellow',
    time: 'August 2022 - December 2023',
    location: 'San Fransisco',
    description:
      'Collected, analyzed, and interpreted data to support decision-making processes within the organization. I utilized various data analysis techniques and tools to identify patterns, trends, and insights from large data sets.',
    tech: ['Goolgle sheets', 'Google analytics'],
  },

  {
    title: 'Luther Burbank Middleschool School',
    position: 'Math & Science Tutor',
    time: 'Jan 2022 - May 2022',
    location: 'San Jose, CA',
    description:
      "I Provided personalized academic support to students in grades 6. I work one-on-one with students to help them better understand scientific and mathematical concepts, improve their problem-solving skills, and prepare for tests and exams. My tutoring sessions are tailored to each student's unique learning style and needs. In addition, I use various teaching methods, including interactive activities and visual aids to help students make connections between different topics.",
    tech: ['Google Classroom', 'Notability'],
  },
];
