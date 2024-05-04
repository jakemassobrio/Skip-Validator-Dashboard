import React from "react";
import Button from "../Button";
import { NavbarBody, NavbarBrand, NavbarNavOption } from "./NavBar.styles";
import Icon from "../Icon";
import { useTheme } from "@emotion/react";
import Box from "../Box";
import { NavOptions, NavOption } from "../../../constants";

interface NavbarProps {
  navOptions: NavOptions;
}

export default function NavBar({ navOptions }: NavbarProps) {
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
          {Object.values(navOptions).map((navOption) => (
            <NavbarOption name={navOption.name} url={navOption.url} />
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

const NavbarOption = ({ name, url }: NavOption) => (
  <NavbarNavOption href={url} target="_blank">
    {name}
  </NavbarNavOption>
);
