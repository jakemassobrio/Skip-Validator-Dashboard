import React, { useState } from "react";

import { TabsContainer, TabOption } from "./Tabs.styles";

export default function Tabs({
  initialValue,
  options,
  onClick,
}: {
  initialValue: string;
  options: string[];
  onClick: (selectedTab: string) => void | null;
}) {
  const [selectedTab, setSelectedTab] = useState(initialValue);

  const handleOnClick = (e: any) => {
    setSelectedTab(e.target.id);
    onClick(e.target.id);
  };
  return (
    <TabsContainer>
      {options.map((option: string) => {
        return (
          <TabOption
            key={option}
            id={option}
            active={option === selectedTab}
            onClick={handleOnClick}
          >
            {option}
          </TabOption>
        );
      })}
    </TabsContainer>
  );
}
