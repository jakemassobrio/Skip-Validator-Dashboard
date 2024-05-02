import styled from "@emotion/styled";
import { getCSS } from "../../../utils";

import { CSSProps } from "../../../constants";

export const ButtonBase = styled.button(
  (props: CSSProps) => `
  padding: 4px 10px 4px 10px;
  border: none;
  border-radius: 6px;
  height: 32px;
  font-family: "Inter", sans-serif;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  ${getCSS({ ...props })};
`
);

export const PrimaryButton = styled(ButtonBase)`
  background: ${(props) => props.theme.button.primary};
  color: ${(props) => props.theme.button.primaryText};
  &:hover {
    background: ${(props) => props.theme.button.primaryHover};
  }
`;

export const SecondaryButton = styled(ButtonBase)`
  background: ${(props) => props.theme.button.secondary};
  color: ${(props) => props.theme.button.secondaryText};
  &:hover {
    background: ${(props) => props.theme.button.secondaryHover};
  }
`;
