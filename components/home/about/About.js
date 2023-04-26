import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hey! I'm Alejandro, if you still need to gather that by now.
              I'm a full-stack software developer from California specializing in the backend, primarily Node,
              but I love building with whatever tools are suitable for the job.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I currently intern for DreamSF on the Pathways to Citizenship initiative.
              I am also part of an advanced practicum building a web app using React,
              Socket-io, and Node with students from Code The Dream.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Outside of work, I love to play music as a DJ and curate playlists for the perfect occasion 🎛️.
              I also have a passion for filmmaking and photography, especially shooting 35mm film with my Nikon f-2.📸
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I'm looking for new positions where I can merge my love for code with my passion for music and cinema.
              So let's connect if you've got an opening I might like.🔗
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
