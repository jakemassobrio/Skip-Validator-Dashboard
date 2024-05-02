import styled from "@emotion/styled";

export const NoData = styled.span`
  font-family: "Inter", sans-serif;
  display: flex;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.theme.text.primary};
`;

export const TableTitle = styled.p`
  display: flex;
  align-items: center;
  height: 72px;
  color: ${(props) => props.theme.text.primary};
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  text-align: left;
`;

export const TableBase = styled.table`
  background: #f3f6f808;
  padding: 30px 24px;
  border-radius: 8px;
  width: 100%;
`;
