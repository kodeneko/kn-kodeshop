import React from 'react';
import type { CardDefaultProps } from './Card.types';
import styles from './Card.module.css';
import Avatar from '../avatar/Avatar.tsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { iconSet } from '../../icons';

const CardDefault: React.FC<CardDefaultProps> = ({
  pic,
  title,
  onClickMenu,
  // opts,
  body,
  footer,
}) => {

  const handleClickMenu = () => {
    onClickMenu();
  };

  return (
    <div className={styles.cont}>
      <div className={styles.header}>
        <Avatar pic={pic} />
        <h3 className={styles.title}>{title}</h3>
        <FontAwesomeIcon
          className={styles.opt}
          icon={iconSet.menuH}
          onClick={handleClickMenu}
        ></FontAwesomeIcon>
      </div>
      <div className={styles.body}>{body}</div>
      <div className={styles.footer}>{footer}</div>
    </div>
  )
}

export default CardDefault;