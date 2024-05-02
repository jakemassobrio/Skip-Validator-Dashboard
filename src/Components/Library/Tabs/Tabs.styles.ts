import styled from "@emotion/styled";
import { Theme } from "@emotion/react";

export const TabsContainer = styled.div`
  display: flex;
  width: 79px;
  height: 32pxpx;
  padding: 6px 10px 6px 0px;
  gap: 10px;
  border-radius: 6px 0px 0px 0px;
  opacity: 0px;
`;

interface TabOptionProps {
  active: boolean;
}

export const TabOption = styled.a(
  (props: TabOptionProps) => `
  font-family: Inter;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  color: ${props.active ? "#ffffff" : "#ffffffb2"};
  padding: 6px 10px 6px 0px;
  &:hover {
    color: #d9d9d9;
  }
  :active {
    color: #ffffff;
  }
`
);
