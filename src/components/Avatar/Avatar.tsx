import React from 'react';
import type { AvatarProps } from './Avatar.types';
import styles from './Avatar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { iconSet } from '../../icons/icons';

const Avatar: React.FC<AvatarProps> = ({ pic }) => {
  return (
    <div className={styles.cont}>
      <FontAwesomeIcon icon={iconSet[pic as keyof typeof iconSet]} />
    </div>
  )
}

export default Avatar;