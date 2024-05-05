import React from "react";
import ArrowDropDown from "../Icons/ArrowDropDown";
import ArrowDropUp from "../Icons/ArrowDropUp";
import Search from "../Icons/Search";
import Sort from "../Icons/Sort";
import Payments from "../Icons/Payments";
import DarkMode from "../Icons/DarkMode";
import LightMode from "../Icons/LightMode";

export interface IconObject {
  color?: string;
  height?: string;
  width?: string;
}
export interface IconProps extends IconObject {
  icon: string;
}

export interface IconList {
  [key: string]: JSX.Element;
}

export type Icons = (props: IconObject) => IconList;

export const getIcon: Icons = ({ ...args }: IconObject) => ({
  arrow_drop_down: <ArrowDropDown {...args} />,
  arrow_drop_up: <ArrowDropUp {...args} />,
  search: <Search {...args} />,
  payments: <Payments {...args} />,
  dark_mode: <DarkMode {...args} />,
  light_mode: <LightMode {...args} />,
  sort: <Sort {...args} />,
});

export default function Icon({
  icon,
  color = "#000000",
  height = "24px",
  width = "24px",
}: IconProps) {
  return getIcon({ color, height, width })[icon];
}
