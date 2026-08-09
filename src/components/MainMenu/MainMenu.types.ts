type MainMenuOptObj = {
  id: string,
  pic: string,
  label: string,
  active: boolean,
  badge?: number,
  onClick: () => void
}

type MainMenuOptInfo = Pick<MainMenuOptObj, 'id' | 'pic'>;

type MainMenuOptProps = MainMenuOptObj;

type MainMenuProps = {
  options: MainMenuOptObj[],
  onClick: (opt: MainMenuOptProps) => void
}

export type {
  MainMenuOptObj,
  MainMenuOptInfo,
  MainMenuOptProps,
  MainMenuProps
};