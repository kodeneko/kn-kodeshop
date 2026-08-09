type UserBarOptProps = {
  pic: string,
  onClick: () => {},
};

type UserBarProps = {
  username: string,
  role: string,
  opts: UserBarOptProps[]
}

export type { UserBarOptProps, UserBarProps };