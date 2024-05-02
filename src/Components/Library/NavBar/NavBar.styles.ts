import styled from "@emotion/styled";

export const NavbarBody = styled.div`
  padding: 0 100px;
  width: calc(100% - 200px);
  height: 64px;
  background-color: ${(props) => props.theme.background.tertiary};
  display: flex;
  justify-content: space-between;
`;

export const NavbarBrand = styled.p`
  margin: auto 0px;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 19.36px;
  text-align: left;
  color: #ffffff;
`;

export const NavbarNavOption = styled.a`
  padding: 6px 10px;
  margin: auto 0px;
  color: ${(props) => props.theme.text.secondary};
  font-family: "Inter", sans-serif;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  text-decoration: none;
  &:hover {
    color: #ffffff;
  }
`;
