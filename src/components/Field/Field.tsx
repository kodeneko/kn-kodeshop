import React from 'react';
import type { FieldProps } from './Field.types';
import styles from './Field.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { iconSet } from '../../icons/icons';

const Field: React.FC<FieldProps> = ({ pic, ...props }) => {
  return (
    <div className={styles.cont}>
      <FontAwesomeIcon
        className={styles.icon}
        icon={iconSet[pic as keyof typeof iconSet]}
      ></FontAwesomeIcon>
      <input className={styles.input} {...props} />
    </div>
  )
}

export default Field;