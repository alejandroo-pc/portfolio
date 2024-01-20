import { StandardButton } from '@/components/buttons/StandardButton';
import { Reveal } from '@/components/utils/Reveal';
import { DotGrid } from './DotGrid';
import styles from './hero.module.scss';

export const Hero = () => {
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.copyWrapper}>
        <Reveal>
          <h1 className={styles.title}>
            Hey, I&apos;m Alejandro<span>.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h2 className={styles.subTitle}>
            <span>Full Stack Developer</span>
          </h2>
        </Reveal>
        <Reveal>
          <p className={styles.aboutCopy}>
            I'm a first-generation college student with a human-centered
            approach to the web. I aim to empower underrepresented communities
            by helping businesses establish a robust online presence through
            personalized websites. With a keen eye for design and a strong
            technical skillset, I'm committed to bridging the digital divide.
          </p>
        </Reveal>
        <Reveal>
          <StandardButton
            onClick={() => document.getElementById('contact')?.scrollIntoView()}
          >
            Contact me
          </StandardButton>
        </Reveal>
      </div>
      {/*  
      TODO: media queries to not render DotGrid for mobile devices
      <DotGrid /> 
      */}
    </section>
  );
};
