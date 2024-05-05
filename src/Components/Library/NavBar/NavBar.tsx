import React from "react";
import Button from "../Button";
import {
  NavbarBody,
  NavbarBrand,
  NavbarNavOption,
  ResponsiveBox,
} from "./NavBar.styles";
import Icon from "../Icon";
import { useTheme } from "@emotion/react";
import Box from "../Box";
import { NavOptions, NavOption, THEME } from "../../../constants";

interface NavbarProps {
  navOptions: NavOptions;
  setTheme: (theme: THEME) => void | null;
}

export default function NavBar({ navOptions, setTheme }: NavbarProps) {
  const theme = useTheme();

  const handleSetTheme = (event: React.MouseEvent<HTMLElement>) => {
    console.log(event.currentTarget.id);
    setTheme(event.currentTarget.id as THEME);
  };

  return (
    <NavbarBody>
      <Box display="flex" alignContent="center" height="100%">
        <NavbarBrand>Skip / Select</NavbarBrand>
      </Box>
      <Box
        display="flex"
        alignContent="center"
        alignItems="center"
        justify="space-between"
        height="100%"
        gap="6px"
      >
        <ResponsiveBox mr="94px" display="flex" alignContent="center">
          {Object.values(navOptions).map((navOption) => (
            <NavbarOption name={navOption.name} url={navOption.url} />
          ))}
        </ResponsiveBox>
        <Button
          variant="primary"
          name="Sign Up"
          mr="24px"
          onClick={() => {}}
          rightIcon={
            <Icon icon={"arrow_drop_down"} color={theme.button.primaryText} />
          }
        />
        <Button
          variant="secondary"
          name="Connect Wallet"
          onClick={() => {}}
          rightIcon={
            <Icon icon={"arrow_drop_down"} color={theme.button.secondaryText} />
          }
        />
        <Box ml="8px">
          {theme.theme === THEME.light ? (
            <Button
              testId={THEME.dark}
              id={THEME.dark}
              variant="secondary"
              onClick={handleSetTheme}
              rightIcon={
                <Icon icon={"light_mode"} color={theme.button.secondaryText} />
              }
            />
          ) : (
            <Button
              testId={THEME.light}
              id={THEME.light}
              variant="secondary"
              onClick={handleSetTheme}
              rightIcon={
                <Icon icon={"dark_mode"} color={theme.button.secondaryText} />
              }
            />
          )}
        </Box>
      </Box>
    </NavbarBody>
  );
}

const NavbarOption = ({ name, url }: NavOption) => (
  <NavbarNavOption href={url} target="_blank">
    {name}
  </NavbarNavOption>
);
