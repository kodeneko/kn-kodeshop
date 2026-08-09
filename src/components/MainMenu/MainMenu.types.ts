type MainMenuOptObj = {
  id: string,
  pic: string,
}

type MainMenuOptProps = MainMenuOptObj & {
  label: string,
  active: boolean,
  badge?: number,
  onClick: () => void
}

type MainMenuProps = {
  options: MainMenuOptObj[],
}

export type {
  MainMenuOptObj,
  MainMenuOptProps,
  MainMenuProps
};