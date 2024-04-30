import React from "react";
import Button from "../Button";
import { NavbarBody, NavbarBrand, NavbarNavOption } from "./NavBar.styles";
import Icon from "../Icon";
import { useTheme } from "@emotion/react";
import Box from "../Box";

export enum NavOptions {
  Home = "Home",
  GitHub = "GitHub",
  Careers = "Careers",
  Contact = "Contact",
}

export interface URLS {
  [key: string]: string;
}

export const urls: URLS = {
  home: "https://skip.money/",
  github: "https://github.com/skip-mev",
  careers:
    "https://skip-protocol.notion.site/Skip-Protocol-Open-Positions-a80c9cd99f2247118f89706f07fb563a/",
  contact: "https://ideas.skip.money/",
};

export default function NavBar() {
  const theme = useTheme();
  return (
    <NavbarBody>
      <Box display="flex" alignContent="center" height="100%">
        <NavbarBrand>Skip / Select</NavbarBrand>
      </Box>
      <Box
        display="flex"
        alignContent="center"
        alignItems="center"
        height="100%"
        gap="6px"
      >
        <Box mr="94px" display="flex" alignContent="center">
          {Object.keys(NavOptions).map((name) => (
            <NavOption name={name} url={urls[name.toLowerCase()]} />
          ))}
        </Box>
        <Button
          variant="primary"
          name="Sign Up"
          mr="24px"
          rightIcon={
            <Icon icon={"arrow_drop_down"} color={theme.button.primaryText} />
          }
        />
        <Button
          variant="secondary"
          name="Connect Wallet"
          rightIcon={
            <Icon icon={"arrow_drop_down"} color={theme.button.secondaryText} />
          }
        />
      </Box>
    </NavbarBody>
  );
}

const NavOption = ({ name, url }: { name: string; url: string }) => (
  <NavbarNavOption href={url} target="_blank">
    {name}
  </NavbarNavOption>
);
