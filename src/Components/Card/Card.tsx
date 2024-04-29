import React from "react";

import { CSSProps } from "../../constants";

import { CardWrapper } from "./Card.styles";

interface BoxProps extends CSSProps {
  type: string;
}

export default function Box({ type, ...rest }: BoxProps) {
  return <CardWrapper {...rest}></CardWrapper>;
}
