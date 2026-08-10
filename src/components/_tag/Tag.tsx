import React from 'react';
import type { TagProps } from './Tag.types';
import styles from './Tag.module.css';
import clsx from "clsx";

const Tag: React.FC<TagProps> = ({ type, label }) => {
  const styleType = type === 'positive' ? styles.positive : styles.negative;
  return (
    <div className={clsx(styles.cont, styleType)}>
      {label}
    </div>
  )
}

export default Tag;