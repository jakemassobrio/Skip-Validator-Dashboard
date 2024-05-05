import styled from "@emotion/styled";
import Box from "../../Library/Box";

export const DashboardBody = styled.div`
  background-color: ${(props) => props.theme.background.primary};
  padding: 0 100px 60px 100px;
  width: calc(100% - 200px);
`;

export const ResponsiveBox = styled(Box)`
  flex-direction: row;
  @media (max-width: 1120px) {
    flex-direction: column;
  }
`;

export const MobileBox = styled(Box)`
  display: none;
  @media (max-width: 1120px) {
    display: block;
  }
`;

export const DesktopBox = styled(Box)`
  display: block;
  @media (max-width: 1120px) {
    display: none;
  }
`;
