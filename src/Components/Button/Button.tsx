import React, { ReactElement } from "react";

import { PrimaryButton, SecondaryButton } from "./Button.styles";
import { CSSProps } from "../../constants";

export interface ButtonProps extends CSSProps {
  name: string;
  variant: "primary" | "secondary";
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
}

export default function Button({
  name,
  variant,
  leftIcon,
  rightIcon,
  ...rest
}: ButtonProps) {
  return variant === "primary" ? (
    <PrimaryButton {...rest}>
      {leftIcon && leftIcon}
      {name}
      {rightIcon && rightIcon}
    </PrimaryButton>
  ) : variant === "secondary" ? (
    <SecondaryButton {...rest}>
      {leftIcon && leftIcon}
      {name}
      {rightIcon && rightIcon}
    </SecondaryButton>
  ) : null;
}
