import styled from "@emotion/styled";

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

export const TableName = styled.span`
  font-family: "Inter", sans-serif;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  color: #6398ff;
`;
export const TableNameHeader = styled.span`
  color: #ffffffb3;
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
`;

export const TableNumber = styled.span`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
  width: 100%;
`;

export const TableNumberHeader = styled.span`
  color: #ffffffb3;
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
  width: 100%;
`;
