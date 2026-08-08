import React from 'react';
import type { UserBarProps } from './UserBar.types';
import styles from './UserBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { iconSet } from '../../icons/icons';

const UserBar: React.FC<UserBarProps> = ({ username, role, opts }) => {
  return (
    <div className={styles.cont}>
      <div className={styles.info}>
        <div className={styles.name}>{username}</div>
        <div className={styles.role}>{role}</div>
      </div>
      <div className={styles.opts}>
        {opts.map(({pic, onClick}, index) =>
          <FontAwesomeIcon
            key={index}
            className={styles.op}
            icon={iconSet[pic as keyof typeof iconSet]}
            onClick={onClick}
          ></FontAwesomeIcon>
        )}
      </div>
    </div>
  )
}

export default UserBar;