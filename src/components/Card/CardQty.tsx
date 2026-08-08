import React from 'react';
import type { CardQtyProps, CardQtyBodyProps, CardQtyFooterProps } from './Card.types';
import styles from './Card.module.css';
import CardDefault from './CardDefault';
import Tag from '../Tag/Tag';

const CardQtyBody: React.FC<CardQtyBodyProps> = ({ label }) => (
  <div className={styles.qtyBody}>
    {label}
  </div>
);

const CardQtyFooter: React.FC<CardQtyFooterProps> = ({ tag, tagLabel, label }) =>
  <div className={styles.qtyFooter}>
    <Tag
      type={tag}
      label={tagLabel}
    ></Tag>
    <div>{label}</div>
  </div>

const CardQty: React.FC<CardQtyProps> = ({
  pic,
  title,
  onClickMenu,
  opts,
  label,
  tag,
  tagLabel,
  msgFooter,
}) => {

  const body = <CardQtyBody label={label}></CardQtyBody>
  const footer = (
    <CardQtyFooter
      tag={tag}
      tagLabel={tagLabel}
      label={msgFooter}
    >
    </CardQtyFooter>
  );

  return (
    <CardDefault
      pic={pic}
      title={title}
      onClickMenu={onClickMenu}
      opts={opts}

      body={body}
      footer={footer}
    >
    </CardDefault>
  )
}

export default CardQty;