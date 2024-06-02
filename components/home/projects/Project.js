import { Reveal } from '@/components/utils/Reveal';
import { useAnimation, useInView, motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { AiFillGithub, AiOutlineExport } from 'react-icons/ai';
import { ProjectModal } from './ProjectModal';
import styles from './projects.module.scss';

export const Project = ({
  modalContent,
  projectLink,
  description,
  imgSrc,
  title,
  code,
  tech,
}) => {
  const [hovered, setHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  return (
    <>
      <div className={styles.projectCard}>
        <div className={styles.projectrText}>
          <div className={styles.projectCopy}>
            <div className={styles.projectTitle}>
              <h4>{title}</h4>
            </div>
            <div className={styles.projectTech}>{tech.join(' - ')}</div>
            <p className={styles.projectDescription}>
              {description}{' '}
              <span onClick={() => setIsOpen(true)}>Learn more {'>'}</span>
            </p>
          </div>
          <ProjectModal
            modalContent={modalContent}
            projectLink={projectLink}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            imgSrc={imgSrc}
            title={title}
            code={code}
            tech={tech}
          />
        </div>
        <div className={styles.projectImage}>
          <img
            src={imgSrc}
            alt={`An image of the ${title} project.`}
            style={{
              width: hovered ? '50%' : '85%',
              rotate: hovered ? '2deg' : '0deg',
            }}
          />
        </div>
      </div>
    </>
  );
};
