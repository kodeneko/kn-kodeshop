import React from 'react';
import type { MainMenuProps } from './MainMenu.types';
import styles from './MainMenu.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { iconSet } from '../../icons/icons';

const MainMenu: React.FC<MainMenuProps> = ({ pic }) => {
  return (
    <div className={styles.cont}>
      <FontAwesomeIcon icon={iconSet[pic as keyof typeof iconSet]} />
    </div>
  )
}

export default MainMenu;