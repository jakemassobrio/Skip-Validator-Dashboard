import styled from "@emotion/styled";
import { CSSProps } from "../../../constants";
import { getCSS } from "../../../utils";

interface CardWrapperProps extends CSSProps {
  borderColor: string;
}

export const CardWrapper = styled.div(
  (props: CardWrapperProps) => `
  color: #ffffff;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${props.borderColor};
  border-style: solid;
  ${getCSS({ ...props })}
`
);
