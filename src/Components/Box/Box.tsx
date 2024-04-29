import React, { ReactNode } from "react";

import { BoxCSS } from "./Box.styles";

import { CSSProps } from "../../constants";

export interface BoxProps extends CSSProps {
  children: ReactNode;
}

export default function Box(props: BoxProps) {
  return <BoxCSS {...props} />;
}
