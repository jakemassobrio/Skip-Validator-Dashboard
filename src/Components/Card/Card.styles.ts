import styled from "@emotion/styled";
import { CSSProps } from "../../constants";
import { getCSS } from "../../utils";

export const CardWrapper = styled.div(
  (props: CSSProps) => `
  color: #ffffff;
  border-radius: 8px;
  border: 1px solid #F3F6F81A;
  ${getCSS({ ...props })}
`
);
