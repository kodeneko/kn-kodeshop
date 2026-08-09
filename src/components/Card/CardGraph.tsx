import React from 'react';
import type { CardGraphProps } from './Card.types';
import styles from './Card.module.css';
import CardDefault from './CardDefault.tsx';
import graphPic from '../../assets/graphic.png';

const CardGraphic: React.FC<CardGraphProps> = ({
  pic,
  title,
  onClickMenu,
  opts
}) => {

  return (
    <CardDefault
      pic={pic}
      title={title}
      onClickMenu={onClickMenu}
      opts={opts}

      body={<img className={styles.graph} src={graphPic}></img>}
      footer={<></>}
    >
    </CardDefault>
  )
}

export default CardGraphic;