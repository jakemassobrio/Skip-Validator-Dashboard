import React, { ReactNode } from "react";

import { CSSProps } from "../../../constants";

import { CardWrapper } from "./Card.styles";
import { useTheme } from "@emotion/react";

export interface CardProps extends CSSProps {
  children: ReactNode;
}

export default function Card(props: CardProps) {
  const theme = useTheme();
  return <CardWrapper {...props} borderColor={theme.border.primary} />;
}
