import styled from "@emotion/styled";

export const TabsContainer = styled.div`
  display: flex;
  width: 79px;
  height: 32pxpx;
  padding: 6px 10px 6px 0px;
  gap: 10px;
  border-radius: 6px 0px 0px 0px;
  opacity: 0px;
`;

export const TabOption = styled.a`
  font-family: Inter;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  color: #ffffffb2;
  padding: 6px 10px 6px 0px;
  &:hover {
    color: #d9d9d9;
  }
`;
