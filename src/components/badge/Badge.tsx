import React from 'react';
import type { BadgeProps } from './Badge.types';
import styles from './Badge.module.css';

const Badge: React.FC<BadgeProps> = ({ val }) => {
  return (
    <div className={styles.cont}>
      {val}
    </div>
  )
}

export default Badge;