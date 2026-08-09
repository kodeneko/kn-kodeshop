import React from 'react';
import type { SectionProps } from './Section.types';
import styles from './Section.module.css';

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <div className={styles.cont}>
      <div className={styles.top}>
        <h2 className={styles.title}>{ title }</h2>
      </div>
      <div className={styles.body}>{ children }</div>
    </div>
  )
}

export default Section;