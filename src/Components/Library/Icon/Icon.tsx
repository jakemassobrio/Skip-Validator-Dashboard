import React from "react";
import ArrowDropDown from "../Icons/ArrowDropDown";
import Search from "../Icons/Search";
import Payments from "../Icons/Payments";

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
  search: <Search {...args} />,
  payments: <Payments {...args} />,
});

export default function Icon({
  icon,
  color = "#000000",
  height = "24px",
  width = "24px",
}: IconProps) {
  return getIcon({ color, height, width })[icon];
}
