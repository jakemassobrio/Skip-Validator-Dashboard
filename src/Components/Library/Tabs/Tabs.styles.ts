import styled from "@emotion/styled";
import { Theme } from "@emotion/react";

export const TabsContainer = styled.div`
  display: flex;
  height: 32px;
  padding: 6px 10px 6px 0px;
  gap: 10px;
  border-radius: 6px 0px 0px 0px;
  opacity: 0px;
`;

interface TabOptionProps {
  active: boolean;
  textColor: string;
  activeColor: string;
  hoverColor: string;
}

export const TabOption = styled.a`
  font-family: "Inter", sans-serif;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  color: ${(props: TabOptionProps) =>
    props.active ? props.activeColor : props.textColor};
  padding: 6px 10px 6px 0px;
  &:hover {
    color: ${(props: TabOptionProps) => props.hoverColor};
  }
`;
