type UserBarOptProps = {
  id: string,
  pic: string,
  onClick: () => void,
};

type UserBarOptInfo = Pick<UserBarOptProps, 'id' | 'pic'>;

type UserBarProps = {
  username: string,
  role: string,
  opts: UserBarOptProps[]
}

export type { UserBarOptProps, UserBarOptInfo, UserBarProps };