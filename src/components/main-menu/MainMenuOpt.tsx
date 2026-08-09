import React from 'react';
import type { MainMenuOptProps } from './MainMenu.types';
import styles from './MainMenu.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { iconSet } from '../../icons';
import Badge from '../badge/Badge';
import clsx from 'clsx';

const MainMenuOpt: React.FC<MainMenuOptProps> = ({ 
  pic,
  label,
  active,
  badge,
  onClick
}) => {
  const styleOpt = clsx(styles.contOpt, active && styles.active)
  return (
    <div
      className={styleOpt}
      onClick={onClick}
    >
      <div className={styles.picCont}>
        <FontAwesomeIcon
          className={styles.pic}
          icon={iconSet[pic as keyof typeof iconSet]}
        >
        </FontAwesomeIcon>
      </div>
      <div className={styles.label}>{label}</div>
      {!!badge && <Badge val={badge as number} />}
    </div>
  )
}

export default MainMenuOpt;