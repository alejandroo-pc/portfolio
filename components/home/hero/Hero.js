import { StandardButton } from '@/components/buttons/StandardButton';
import { Reveal } from '@/components/utils/Reveal';
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
            <span>Software Stack Engineer</span>
          </h2>
        </Reveal>
        <Reveal>
          <p className={styles.aboutCopy}>
            I&apos;m a first-generation college student with a human-centered
            approach to the web. I aim to empower underrepresented communities
            through open source. With a keen eye for design and a strong
            technical skillset, I&apos;m committed to bridging the digital
            divide.
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
    </section>
  );
};
