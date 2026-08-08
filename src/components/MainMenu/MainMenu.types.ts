type MainMenuOptProps = {
  pic: string,
  label: string;
  active: boolean,
  badge?: number,
  onClick: () => {}
}

type MainMenuProps = {
  options: MainMenuOptProps[],
}

export type { MainMenuOptProps, MainMenuProps };