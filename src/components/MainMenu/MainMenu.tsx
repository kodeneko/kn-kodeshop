import React, { useState } from 'react';
import type { MainMenuOptObj, MainMenuOptProps, MainMenuProps } from './MainMenu.types';
import styles from './MainMenu.module.css';
import MainMenuOpt from './MainMenuOpt';

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

function completedMainMenu(menu: MainMenuOptObj[]) {
  const menuXtra: MainMenuOptProps[] = menu.map(opt => ({
    id: opt.id,
    pic: opt.pic,
    label: opt.id,
    active: false,
    onClick: () => {}
  }));

  return menuXtra;
}

const MainMenu: React.FC<MainMenuProps> = ({ options }) => {

  const [mainMenuXtra, setMainMenuXtra] = useState(completedMainMenu(options));

  const handleClickOpt = (op: MainMenuOptProps) => {
    const newMainMenu = mainMenuXtra.map(opx =>
      ({ ...opx, active: opx.id === op.id })
    );
    op.onClick();
    setMainMenuXtra(newMainMenu);
  }

  return (
    <div className={styles.cont}>
      <MainTitle></MainTitle>
      <ul className={styles.menu}>
        {mainMenuXtra.map(op =>
          <li key={op.id}>
            <MainMenuOpt
              id={op.id}
              pic={op.pic}
              label={op.label}
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