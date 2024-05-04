import React, { useState } from "react";

import { TabsContainer, TabOption } from "./Tabs.styles";

import { useTheme } from "@emotion/react";

export default function Tabs({
  initialValue,
  options,
  onClick,
}: {
  initialValue: string;
  options: string[];
  onClick: (selectedTab: string) => void | null;
}) {
  const theme = useTheme();
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
            activeColor={theme.button.tertiaryTextHover}
            hoverColor={theme.text.tertiary}
            textColor={theme.button.tertiaryText}
            onClick={handleOnClick}
          >
            {option}
          </TabOption>
        );
      })}
    </TabsContainer>
  );
}
