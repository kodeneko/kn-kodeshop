import { Outlet, useNavigate } from 'react-router-dom';
import styles from './Private.module.css';
import MainMenu from '../../components/main-menu/MainMenu.tsx';
import { mainMenuOpts } from '../../global.ts';
import TopBar from '../../components/top-bar/TopBar.tsx';
import type { MainMenuOptInfo, MainMenuOptProps } from '../../components';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';


const PrivateTemplate = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const parseMainMenuOptInfoToProps = (menu: MainMenuOptInfo[]) => {
    return menu.map((op, i) => ({
      ...op,
      label: t(`menu.${op.id}`),
      active: i === 0,
      onClick: () => { }
    }));
  }
  
  const [options, setOptions] = useState<MainMenuOptProps[]>(
    parseMainMenuOptInfoToProps(mainMenuOpts)
  );

  const handleClickMenu = (optSel: MainMenuOptProps) => {
    const optionsAux = options.map((opt, i) => ({
      ...opt,
      active: optSel.id === opt.id
    }));
    setOptions(optionsAux);
    navigate(optSel.path)
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
