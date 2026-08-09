interface SwitchProps {
  val: boolean;
  onClick: (val: boolean) => void;
  picLeft: string;
  picRight: string;
}

export type { SwitchProps };