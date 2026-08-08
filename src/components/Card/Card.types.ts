import type React from "react";
import type { AvatarProps } from "../Avatar/Avatar.types";

type CardOptsProps = {
  id: string,
  onClick: () => {}
}

type CardProps = {
  pic: AvatarProps['pic'],
  title: string,
  onClickMenu: () => {},
  opts: CardOptsProps[],
  body: React.ReactNode,
  footer: React.ReactNode
}

export type { CardOptsProps, CardProps };