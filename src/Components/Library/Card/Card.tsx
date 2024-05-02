import React, { ReactNode } from "react";

import { CSSProps } from "../../../constants";

import { CardWrapper } from "./Card.styles";

export interface CardProps extends CSSProps {
  children: ReactNode;
}

export default function Card(props: CardProps) {
  return <CardWrapper {...props} />;
}
