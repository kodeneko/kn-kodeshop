import type React from "react";

type SectionPropsBase = {
  title: string
}

type SectionProps = React.PropsWithChildren<SectionPropsBase>;

export type { SectionProps };