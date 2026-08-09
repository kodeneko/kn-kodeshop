import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './TopBar.module.css';
import Field from '../field/Field.tsx';
import UserBar from '../user-bar/UserBar.tsx';
import Switch from '../sswitch/Switch.tsx';
import { userBarOpts } from '../../global.ts';

const TopBar: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [username] = useState<string>('Sonia G.');
  const [role] = useState<string>('Admin');

  const userBarOptsXtra = userBarOpts.map(op => ({
    ...op,
    onClick: () => { }
  }));
  const { t } = useTranslation();
  
  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearch(val);
  };
  const handleTheme = (isDark: boolean) => {
    const theme = isDark ? 'dark' : 'light';
    setTheme(theme);
  };
  
  return (
    <div className={styles.cont}>
      <div className={styles.main}>
        <Field
          pic='magni'
          placeholder={t('search-placeholder')}
          value={search}
          onChange={handleChangeSearch}
        ></Field>
      </div>
      <div className={styles.corner}>
        <Switch
          picLeft='moon'
          picRight='sun'
          val={theme === 'dark'}
          onClick={handleTheme}
        >
        </Switch>
        <UserBar
          username={username}
          role={role}
          opts={userBarOptsXtra}
        ></UserBar>
      </div>
    </div>
  )
}

export default TopBar