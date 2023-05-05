import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Code The Dream",
    position: "Advanced Practicum",
    time: "Feb 2023 - Present",
    location: "Remote",
    description: "In the 8-week development project where I built a game using Socket.io, I collaborate with developers, designers, and mentors to create a fun and engaging game. In addition, I participated in weekly stand-up meetings and sprint planning sessions to ensure the project is progressing smoothly.",
    tech: ["React", "Tailwind", "Socket-io", "Node", "Express", "MongoDB"],
  },
  {
    title: "DreamSF",
    position: "Fellow",
    time: "July 2022 - Present",
    location: "San Fransisco",
    description: "As a Social Media Lead for the DreamSF application, I was responsible for promoting the application through social media channels, coordinating tasks, facilitating meetings, and developing newsletters communicating job opportunities for the DreamSF network.",
    tech: ["Canva", "Mailchimp", "Microsoft Suite", "Spanish translastion & interpretation"],
  },
  {
    title: "Code The Dream",
    position: "NodeJS Backend Student",
    time: "Nov 2022 - Jan 2023",
    location: "Remote",
    description: "I gained hands-on experience building server-side applications, creating APIs, and working with databases. In addition, I understand NodeJS concepts such as routes, middleware, event-driven programming, and asynchronous code.",
    tech: ["Javascript", "NodeJS", "Express", "MongoDB"],
  },
  {
    title: "Mission Economic Development Agency",
    position: "Data Evaluation Fellow",
    time: "August 2022 - December 2023",
    location: "San Fransisco",
    description: "Collected, analyzed, and interpreted data to support decision-making processes within the organization. I utilized various data analysis techniques and tools to identify patterns, trends, and insights from large data sets.",
    tech: [
      "Goolgle sheets", "Google analytics",
    ],
  },
  {
    title: "Luther Burbank Middleschool School",
    position: "Math & Science Tutor",
    time: "Jan 2022 - May 2022",
    location: "San Jose, CA",
    description:
      "I Provided personalized academic support to students in grades 6. I work one-on-one with students to help them better understand scientific and mathematical concepts, improve their problem-solving skills, and prepare for tests and exams. My tutoring sessions are tailored to each student's unique learning style and needs. In addition, I use various teaching methods, including interactive activities and visual aids to help students make connections between different topics.",
    tech: [
      "Google Classroom", "Notability",
    ],
  },
];
