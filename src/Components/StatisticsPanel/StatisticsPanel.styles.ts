import styled from "@emotion/styled";

export const Title = styled.p`
  display: flex;
  align-items: center;
  height: 60px;
  color: ${(props) => props.theme.text.primary};
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  text-align: left;
`;

export const StatisticName = styled.p`
  font-family: "Inter", sans-serif;
  padding: 4px 0px;
  margin: 0px 0px;
  font-size: 13px;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  color: ${(props) => props.theme.text.secondary};
`;

export const StatisticValue = styled.p`
  font-family: "JetBrains Mono", monospace;
  padding: 4px 0px;
  margin: 0px 0px 40px 0px;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  text-align: left;
  color: ${(props) => props.theme.text.primary};
`;
