import React from "react";
import MenuButton from "../MenuButton/MenuButton";
import { NavbarBody, NavbarBrand, NavbarNavOption } from "./NavBar.styles";

enum NavOptions {
  Home = "Home",
  GitHub = "GitHub",
  Careers = "Careers",
  Contact = "Contact",
}

export default function NavBar() {
  return (
    <NavbarBody>
      <div style={{ display: "flex", alignContent: "center", height: "100%" }}>
        <NavbarBrand>Skip / Select</NavbarBrand>
      </div>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          alignItems: "center",
          height: "100%",
          gap: "6px",
        }}
      >
        <div
          style={{
            marginRight: "94px",
            display: "flex",
            alignContent: "center",
          }}
        >
          {Object.keys(NavOptions).map((name) => (
            <NavOption name={name} />
          ))}
        </div>
        <MenuButton name="Sign Up"></MenuButton>
        <MenuButton name="Connect Wallet"></MenuButton>
      </div>
    </NavbarBody>
  );
}

const NavOption = ({ name }: { name: string }) => (
  <NavbarNavOption>{name}</NavbarNavOption>
);
