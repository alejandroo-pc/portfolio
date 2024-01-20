import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Community Ambassadors Data Dashboard",
    imgSrc: "project-imgs/pb.png",
    code: "https://www.sf.gov/data/community-ambassadors-program-data-2023-2024",
    projectLink: "httpstalmmunity-ambassadors-program-data-2023-2024",
    tech: ["Excel", "Power BI", "PowerPoint", "Microsoft Suite"],
    description:
      "Data dashboard showcasing key activities of San Francisco's Community Ambassadors (CAP) to illustrate the program's impact.",
    modalContent: (
      <>
        <p>
          Now in my second year of leading this project, I have emphasized
          attention to detail, particularly in accessibility. This includes
          ensuring the use of accessible colors and providing alt text for each
          page, making the data visualizations inclusive for all users.
        </p>
        <p>
          My role has involved extensive data cleaning, organization, and
          deployment, using tools such as Excel and Power BI. These efforts have
          been crucial in maintaining the integrity and accuracy of the data,
          which is vital for effective decision-making and program evaluation.
        </p>
        <p>
          The dashboards are meticulously updated on a monthly basis, reflecting
          the latest activities and insights. This consistent update cycle is
          essential for providing stakeholders with a current and comprehensive
          view of the program’s impact.
        </p>
        <p>
          Collaborating closely with the data analyst, we have enhanced the
          project’s scope and depth. Our efforts have led to more insightful
          visualizations, offering an accessible and detailed perspective on the
          Community Ambassadors Programs' activities across diverse
          neighborhoods.
        </p>
      </>
    ),
  },

  {
    title: "Skill Stacks",
    imgSrc: "project-imgs/skill-stacks.png",
    code: "https://github.com/Alejandro-Patino-Camargo/ee-prac-team4-front",
    projectLink: "https://ee-prac-team4-front.vercel.app/",
    tech: ["React", "Radix-UI", "NodeJS", "Express", "MongoDB"],
    description:
      "Skill Stacks is a flashcard app designed to enhance learning and memory retention.",
    modalContent: (
      <>
        <p>
          At the heart of Skill Stacks is the user-centered UI, meticulously
          designed to create an intuitive and engaging learning environment. As
          the UI designer, I focused on crafting an interface that not only
          looks aesthetically pleasing but also facilitates easy navigation and
          interaction, ensuring that users remain at the core of the UX design.
        </p>
        <p>
          Developed using React and incorporating Radix-UI, Skill Stacks offers
          a dynamic and user-friendly interface for effective learning. Our
          application's design approach makes complex functionalities
          accessible, enhancing the overall user experience.
        </p>
        <p>
          The backend, powered by NodeJS and Express, provides a robust and
          scalable foundation. It supports a wide range of features essential
          for a comprehensive learning tool, from private to public flashcard
          management. MongoDB serves as our database of choice, offering
          flexibility and efficiency
        </p>
        <p>
          Throughout the 8-week development cycle, our team embraced an agile
          methodology, focusing on iterative design and continuous improvement.
          This approach allowed us to refine our app's functionality and user
          interface, ensuring a seamless and enjoyable learning experience.
        </p>
      </>
    ),
  },

  {
    title: "PHRAZ_L",
    imgSrc: "project-imgs/practicum.png",
    code: "https://github.com/wowgr8/phrazel-backend",
    projectLink: "https://phrazel.vercel.app/",
    tech: ["React", "Tailwind", "Socket-io", "NodeJS", "Express", "MongoDB"],
    description:
      "A wordl type game that challenges players to guess a word or phrase.",
    modalContent: (
      <>
        <p>
          Our game, built using NodeJS, Express, and React. Our tech stack
          allowed us to build a robust game that is both easy to use and
          visually stunning.
        </p>
        <p>
          During the 8 week practicum, we followed an agile workflow, planning
          sprints and iterating on features. This allowed us to quickly adapt to
          changes and improve the game as we went along.
        </p>
        <p>
          NodeJS allowed us to build a highly responsive game server that can
          handle a large number of players simultaneously. We used Express to
          build the API layer, which enabled us to create secure and reliable
          endpoints for game actions and data retrieval.
        </p>
        <p>
          As part of our development process, we used Git for version control,
          pull requests, and conflict merging. This gave us the ability to
          collaborate effectively as a software development team and maintain a
          high level of code quality throughout the project.
        </p>
      </>
    ),
  },

  {
    title: "Song Request API",
    imgSrc: "project-imgs/song-request.png",
    code: "https://github.com/Alejandro-Patino-Camargo/song-request-api",
    projectLink: "https://song-request-api.onrender.com",
    tech: ["Javascript", "NodeJS", "Express", "MongoDB"],
    description:
      "A song reqest app that allows DJ's to easily scope out a crowd and play the right song at the right time.",
    modalContent: (
      <>
        <p>
          Introducing my first web app—a REST API for song requests. The
          backend, powered by NodeJS, Express, and MongoDB, ensures seamless
          performance and data management.
        </p>
        <p>
          The frontend, built with vanilla HTML and CSS, prioritizes simplicity
          and easy navigation. As a debut project, I focus on delivering a
          user-friendly experience and laying the foundation for future
          improvements.
        </p>
        <p>Your song requests are waiting! </p>
      </>
    ),
  },

  {
    title: "This portfolio!",
    imgSrc: "project-imgs/port-1.png",
    code: "https://github.com/Alejandro-Patino-Camargo/portfolio",
    projectLink: " https://alejandropatino.io",
    tech: ["React", "Next.js", "scss", "Javascript"],
    description:
      "Checkout what I used to create this portfolio, clone and adjust to your style!",
    modalContent: (
      <>
        <p>
          {" "}
          Welcome to my portfolio, where design and UX/UI take center stage.
          Powered by React, Next.js, and SCSS, this showcase offers a seamless,
          easy-to-follow website experience. A minimalist UI gracefully adapts
          to all devices, ensuring a consistent journey. Emphasizing
          inclusivity, the portfolio adheres to WCAG(accessibility) guidelines.
          Continuous design refinement ensures an ever-evolving user-friendly
          experience.
        </p>
      </>
    ),
  },

  {
    title: "Linear Algebra Matrix Determinant Calculator",
    imgSrc: "project-imgs/matrix.png",
    code: "https://github.com/Alejandro-Patino-Camargo/Determinant-Calculator",
    projectLink:
      "https://replit.com/@AlejandroPatinoCamargo/Matrix-Determinant-calculator#main.cpp",
    tech: ["C++"],
    description:
      "The following C++ code will calculate the determinant of a 2x2 - 10x10 matrix",
    modalContent: (
      <>
        <p>
          This is my final project for linear algebra. The following C++ code
          will calculate the determinant of a 2x2 - 10x10 matrix.
        </p>
      </>
    ),
  },
];
