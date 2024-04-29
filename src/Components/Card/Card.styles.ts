import styled from "@emotion/styled";
import { CSSProps } from "../../constants";
import { getCSS } from "../../utils";

export const CardWrapper = styled.div((props: CSSProps) =>
  getCSS({ ...props })
);
