import styled from "@emotion/styled";

export const SearchBox = styled.div`
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.276);
  padding: 6px;
  align-items: stretch;
  border-radius: 6px;
  background-color: ${(props) => props.theme.background.secondary};
  overflow: hidden;
  max-width: 400px;
  border-width: 1px;
  border-color: ${(props) => props.theme.border.primary};
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
