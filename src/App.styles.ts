import styled from "@emotion/styled";

export const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const AppDashboardTabs = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.background.secondary};
  height: 64px;
  padding: 0 100px;
  width: calc(100% - 200px);
`;

export const AppBody = styled.div`
  background-color: ${(props) => props.theme.background.primary};
  padding: 0 100px;
  width: calc(100% - 200px);
  height: calc(100% - 128px);
`;
