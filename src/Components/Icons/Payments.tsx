import React from "react";

import { IconObject } from "../Icon";

export default function Payments({ color, height, width }: IconObject) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 24 24"
      height={height}
      viewBox="0 0 24 24"
      width={width}
      fill={color}
      transform="scale(-1, 1)"
    >
      <g>
        <rect fill="none" height="24" width="24" />
        <path d="M19 14V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zm-2 0H3V6h14v8zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm13 0v11c0 1.1-.9 2-2 2H4v-2h17V7h2z" />
      </g>
    </svg>
  );
}
