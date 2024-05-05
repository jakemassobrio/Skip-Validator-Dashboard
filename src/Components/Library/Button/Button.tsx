import React, { ReactElement } from "react";

import { PrimaryButton, SecondaryButton } from "./Button.styles";
import { CSSProps } from "../../../constants";

export interface ButtonProps extends CSSProps {
  testId?: string;
  id?: string;
  name?: string;
  variant: "primary" | "secondary";
  onClick: (event: React.MouseEvent<HTMLElement>) => void | null;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
}

export default function Button({
  testId,
  name,
  variant,
  leftIcon,
  rightIcon,
  onClick,
  ...rest
}: ButtonProps) {
  return variant === "primary" ? (
    <PrimaryButton
      {...rest}
      onClick={onClick}
      data-cy={testId}
      pr={name && rightIcon ? "4px" : "10px"}
      pl={name && leftIcon ? "4px" : "10px"}
    >
      {leftIcon && leftIcon}
      {name}
      {rightIcon && rightIcon}
    </PrimaryButton>
  ) : variant === "secondary" ? (
    <SecondaryButton
      {...rest}
      onClick={onClick}
      data-cy={testId}
      pr={name && rightIcon ? "4px" : "10px"}
      pl={name && leftIcon ? "4px" : "10px"}
    >
      {leftIcon && leftIcon}
      {name}
      {rightIcon && rightIcon}
    </SecondaryButton>
  ) : null;
}
