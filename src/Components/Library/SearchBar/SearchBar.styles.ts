import styled from "@emotion/styled";

export const SearchBox = styled.div`
  display: flex;
  padding: 6px;
  align-items: stretch;
  border-radius: 6px;
  background-color: ${(props) => props.theme.background.secondary};
  overflow: hidden;
  max-width: 400px;
  border-width: 1px;
  border-color: ${(props) => props.theme.border.primary};
  border-style: solid;
`;

export const SearchInput = styled.input`
  border: none;
  min-width: 200px;
  font-size: 15px;
  background-color: ${(props) => props.theme.background.secondary};
  color: ${(props) => props.theme.text.tertiary};
  &:focus {
    outline: none;
  }
`;

export const KeyboardButton = styled.span`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.text.secondary};
  background-color: ${(props) => props.theme.button.tertiary};
  font-family: "JetBrains Mono", monospace;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  text-align: center;
  margin: 0 1px;
  width: 20px;
  height: 20px;
  gap: 10px;
  border-radius: 4px;
`;
