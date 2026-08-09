import { Outlet } from 'react-router-dom';
import styles from './Private.module.css';
import MainMenu from '../../components/main-menu/MainMenu';
import { mainMenuOpts } from '../../global';
import TopBar from '../../components/top-bar/TopBar';
import type { MainMenuOptInfo, MainMenuOptProps } from '../../components';
import { useState } from 'react';

function parseMainMenuOptInfoToProps(menu: MainMenuOptInfo[]) {
  return menu.map((op, i) => ({
    ...op,
    label: op.id,
    active: i === 0,
    onClick: () => { }
  }))
}

const PrivateTemplate = () => {
  const [options, setOptions] = useState<MainMenuOptProps[]>(
    parseMainMenuOptInfoToProps(mainMenuOpts)
  );

  const handleClickMenu = (optSel: MainMenuOptProps) => {
    const optionsAux = options.map((opt, i) => ({
      ...opt,
      active: optSel.id === opt.id
    }));
    setOptions(optionsAux);
  };

  return (
    <div className={styles.mainCont}>
      <div className={styles.side}>
        <MainMenu
          options={options}
          onClick={handleClickMenu}
        ></MainMenu>
      </div>
      <div className={styles.cont}>
        <div className={styles.bar}>
          <TopBar></TopBar>
        </div>
        <div className={styles.page}>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  )
};

export default PrivateTemplate;
