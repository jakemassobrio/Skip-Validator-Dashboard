import styled from "@emotion/styled";
import Box from "../../Library/Box";
import Card from "../Card";

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
  margin-top: 0px;
  @media (max-width: 1120px) {
    width: 100%;
    justify-content: center;
  }
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
  @media (max-width: 1120px) {
    margin-bottom: 20px;
  }
`;

export const ResponsiveBox = styled(Box)`
  flex-direction: column;
  width: 280px;
  @media (max-width: 1120px) {
    flex-direction: row;
    width: 100%;
  }
`;

export const StyledCard = styled(Card)`
  padding: 40px;
  @media (max-width: 1120px) {
    margin-top: 32px;
    padding: 8px;
  }
`;
