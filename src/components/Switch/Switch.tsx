import React, { useEffect, useState } from 'react';
import type { SwitchProps } from './Switch.types';
import styles from './Switch.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { iconSet } from '../../icons/icons';
import clsx from 'clsx';

const Switch: React.FC<SwitchProps> = ({ 
  val,
  onClick,
  picLeft,
  picRight
}) => {
  const [swState, setSwState] = useState<boolean>(val);

  useEffect(() => {
    if (val !== swState) setSwState(val)
  }, [val]);

  const styleLeftState = swState ? styles.deactivate : styles.activate;
  const styleRightState = !swState ? styles.deactivate : styles.activate;
  const styleLeft = clsx(styles.sw, styleLeftState);
  const styleRight = clsx(styles.sw, styleRightState);

  const handleClick = () => {
    setSwState(!swState);
    onClick();
  }

  return (
    <div
      className={styles.cont}
      onClick={handleClick}
    >
      <div className={styleLeft}>
        <FontAwesomeIcon
          className={styles.icon}
          icon={iconSet[picLeft as keyof typeof iconSet]}
        ></FontAwesomeIcon>
      </div>
      <div className={styleRight}>
        <FontAwesomeIcon
          className={styles.icon}
          icon={iconSet[picRight as keyof typeof iconSet]}
        ></FontAwesomeIcon>
      </div>
    </div>
  )
}

export default Switch;