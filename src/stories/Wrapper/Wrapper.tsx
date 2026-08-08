import React from 'react';
import styles from './Wrapper.module.css';

const Wrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.cont}>
      {children}
    </div>
  )
}

export default Wrapper