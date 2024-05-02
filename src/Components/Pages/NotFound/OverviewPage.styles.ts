import styled from "@emotion/styled";

export const NotFoundWrapper = styled.div`
  font-family: "Inter", sans-serif;
  display: flex;
  justify-content: center;
  font-size: 24px;
  font-weight: 600;
  color: ${(props) => props.theme.text.primary};
  background-color: ${(props) => props.theme.background.primary};
  padding: 100px 100px;
  width: calc(100% - 200px);
  height: calc(100% - 128px);
`;
