import styles from './stats.module.scss';
import { AiFillCode, AiFillSmile } from 'react-icons/ai';
import { Reveal } from '@/components/utils/Reveal';

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size='2.4rem' color='var(--brand)' />
            <span>Use at work</span>
          </h4>
          <div className={styles.statGrid}>
            <span className='chip'>JavaScript</span>
            <span className='chip'>React</span>
            <span className='chip'>Material-UI</span>
            <span className='chip'>CSS</span>
            <span className='chip'>NodeJS</span>
            <span className='chip'>Express</span>
            <span className='chip'>MongoDB</span>
            <span className='chip'>Playwright</span>
            <span className='chip'>Jest</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size='2.4rem' color='var(--brand)' />
            <span>Use for fun</span>
          </h4>
          <div className={styles.statGrid}>
            <span className='chip'>Figma</span>
            <span className='chip'>Canva</span>
            <span className='chip'>Notion</span>
            <span className='chip'>Ubuntu</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
