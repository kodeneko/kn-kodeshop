import React, { useState } from 'react';
import type { MainMenuOptProps, MainMenuProps } from './MainMenu.types';
import styles from './MainMenu.module.css';
import MainMenuOpt from './MainMenuOpt.tsx';

const MainTitle: React.FC = () => {
  return (
    <div className={styles.title}>
      <span className={styles.strong}>K</span>
      <span>ode</span>
      <span className={styles.strong}>S</span>
      <span>hop</span>
    </div>
  )
}

const MainMenu: React.FC<MainMenuProps> = ({ options, onClick }) => {
  const [mainMenuXtra, setMainMenuXtra] = useState(options);

  const handleClickOpt = (op: MainMenuOptProps) => {
    const newMainMenu = mainMenuXtra.map(opx =>
      ({ ...opx, active: opx.id === op.id })
    );
    if(onClick) onClick(op);
    setMainMenuXtra(newMainMenu);
  }

  return (
    <div className={styles.cont}>
      <MainTitle></MainTitle>
      <ul className={styles.menu}>
        {mainMenuXtra.map(op =>
          <li key={op.id} data-testid={`main-menu-opt-${op.id}`}>
            <MainMenuOpt
              id={op.id}
              pic={op.pic}
              label={op.label}
              path={op.path}
              active={op.active}
              badge={op?.badge || undefined}
              onClick={() => handleClickOpt(op)}
            ></MainMenuOpt>
          </li>
        )}
      </ul>
    </div>
  )
}

export default MainMenu;