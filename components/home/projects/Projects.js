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
    title: "PHRAZ_L",
    imgSrc: "project-imgs/practicum.png",
    code: "https://github.com/Code-the-Dream-School/bb-practicum-team-2-back",
    projectLink: "https://team2-front.vercel.app/",
    tech: ["React", "Tailwind", "Socket-io", "NodeJS", "Express"],
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
          During the 8 week project, we followed an agile workflow, planning
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
    projectLink: "https://song-request-api.onrender.com/",
    tech: ["Javascript", "NodeJS", "Express", "MongoDB"],
    description:
      "A song reqest app that allows DJ's to easily scope out a crowd and play the right song at the right time.",
    modalContent: (
      <>
        <p>
          A REST API for a song request app. The API is built with NodeJS,
          Express, and MongoDB and is deployed on Render.
        </p>
        <p>
          The app is built with a node backend, with data stored in MongoDB. The
          frontend is built vanilla html and css. The API is deployed on Render.
        </p>
        <p>
          Since this is my first app, I had an emphisis in building a strong
          backend. The frontend is intended to be minimal and easily navigated.{" "}
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
