import React from "react";
import ArrowDropDown from "../Icons/ArrowDropDown";
import Search from "../Icons/Search";
import { Icons, IconProps } from "./constants";

const getIcon: Icons = (color: string) => ({
  arrow_drop_down: <ArrowDropDown color={color} />,
  search: <Search color={color} />,
});

export default function Icon({ icon, color = "#000000" }: IconProps) {
  return getIcon(color)[icon];
}
