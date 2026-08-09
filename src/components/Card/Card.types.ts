import type React from "react";
import type { AvatarProps } from "../avatar/Avatar.types";
import type { TagProps } from "../tag/Tag.types";

type CardDefaultOptsProps = {
  id: string,
  onClick: () => {}
};

type CardDefaultProps = {
  pic: AvatarProps['pic'],
  title: string,
  onClickMenu: () => void,
  opts: CardDefaultOptsProps[],
  body: React.ReactNode,
  footer: React.ReactNode
};

type CardReqProps = Pick<CardDefaultProps , 'pic' | 'title' | 'onClickMenu' | 'opts'>;

type CardQtyProps = CardReqProps & {
  label: string,
  tag: TagProps['type'],
  tagLabel: TagProps['label'],
  msgFooter: string
};

type CardQtyBodyProps = Pick<CardQtyProps, 'label'>;

type CardQtyFooterProps = Pick<CardQtyProps, 'tag' | 'tagLabel'> & {
  label: CardQtyProps['msgFooter'];
};
 
type CardGraphProps = CardReqProps;

export type {
  CardDefaultOptsProps,
  CardDefaultProps,
  CardQtyProps,
  CardQtyBodyProps,
  CardQtyFooterProps,
  CardGraphProps
};