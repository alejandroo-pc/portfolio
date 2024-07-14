import React from 'react';
import { SideBar } from '../nav/SideBar';
import { Hero } from './hero/Hero';
import styles from './home.module.scss';
import { Heading } from '../nav/Heading';
import { Projects } from './projects/Projects';
import { Experience } from './experience/Experience';
import { Contact } from './contact/Contact';
import { Stats } from './about/Stats';

export const Home = () => {
  return (
    <>
      <div className={styles.home}>
        <SideBar />
        <main>
          <Heading />
          <Hero />
          <Projects />
          <Experience />
          <Contact />
          <div
            style={{
              height: '200px',
              background:
                'linear-gradient(180deg, var(--background), var(--background-dark))',
            }}
          />
        </main>
      </div>
    </>
  );
};
