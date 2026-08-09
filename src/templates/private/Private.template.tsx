import { Outlet } from 'react-router-dom';
import styles from './Private.module.css';
import MainMenu from '../../components/main-menu/MainMenu';
import { mainMenuOpts } from '../../global';
import TopBar from '../../components/top-bar/TopBar';

const PrivateTemplate = () => {
  const options = mainMenuOpts.map((op, i) => ({
    ...op,
    label: op.id,
    active: i === 0,
    onClick: () => { }
  }));

  return (
    <div className={styles.mainCont}>
      <div className={styles.side}>
        <MainMenu options={options}></MainMenu>
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
