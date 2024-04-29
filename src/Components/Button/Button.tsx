import React, { ReactElement } from "react";

import { PrimaryButton, SecondaryButton } from "./Button.styles";

export interface ButtonProps {
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
}: ButtonProps) {
  return variant === "primary" ? (
    <PrimaryButton>
      {leftIcon && leftIcon}
      {name}
      {rightIcon && rightIcon}
    </PrimaryButton>
  ) : variant === "secondary" ? (
    <SecondaryButton>
      {leftIcon && leftIcon}
      {name}
      {rightIcon && rightIcon}
    </SecondaryButton>
  ) : null;
}
