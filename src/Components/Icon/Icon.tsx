import React from "react";
import ArrowDropDown from "../Icons/ArrowDropDown";
import Search from "../Icons/Search";

export interface IconProps {
  icon: string;
  color?: string;
}

export interface IconList {
  [key: string]: JSX.Element;
}

export type Icons = (color: string) => IconList;

export const getIcon: Icons = (color: string) => ({
  arrow_drop_down: <ArrowDropDown color={color} />,
  search: <Search color={color} />,
});

export default function Icon({ icon, color = "#000000" }: IconProps) {
  return getIcon(color)[icon];
}
