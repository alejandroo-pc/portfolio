import { MyLinks } from '@/components/nav/components/MyLinks';
import { Reveal } from '@/components/utils/Reveal';
import { SectionHeader } from '@/components/utils/SectionHeader';
import styles from './about.module.scss';
import { Stats } from './Stats';
import { AiOutlineArrowRight } from 'react-icons/ai';

export const About = () => {
  //TODO: Update current position and the experince section to reflect Apprenticeship
  return (
    <section id='about' className='section-wrapper'>
      <SectionHeader title='About' dir='l' />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              I am a full-stack software engineer based in California with a
              specialization in React and Node.js. However, I am adaptable in
              using appropriate tools for the job.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m currently a senior fellow for{' '}
              <a
                className={styles.linkGlow}
                href='https://www.dreamsffellows.org/2022/alejandro'
                target='_blank'
              >
                DreamSF
              </a>{' '}
              as a data analyst assistant. I recetly finished Code The
              Dream&apos;s advanced practicum where a develpment team built a
              web app using React, websockets, and node.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Outside of work, I love to play music as a DJ and curate playlists
              for the perfect occasion 🎛️. I also have a passion for filmmaking
              and photography, especially shooting 35mm film with my Nikon f-2
              📸.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m looking for new positions where I can merge my love for
              code with my passion for music and cinema. Let&apos;s connect if
              you&apos;ve got an opening I might like 🔗.
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
