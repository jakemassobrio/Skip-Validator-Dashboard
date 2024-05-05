import React from "react";

import { IconObject } from "../Icon";

export default function ArrowDropUp({ color, height, width }: IconObject) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox="0 -960 960 960"
      width={width}
      fill={color}
    >
      <path d="m280-400 200-200 200 200H280Z" />
    </svg>
  );
}
