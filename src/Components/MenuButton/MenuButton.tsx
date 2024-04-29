import React from "react";
import Icon from "../Icon/Icon";

import { MenuButtonBase } from "./MenuButton.styles";

interface MenuButton {
  name: string;
}

export default function MenuButton({ name }: MenuButton) {
  return (
    <MenuButtonBase>
      {name}
      <Icon icon={"arrow_drop_down"} color={"#151617E5"} />
    </MenuButtonBase>
  );
}
