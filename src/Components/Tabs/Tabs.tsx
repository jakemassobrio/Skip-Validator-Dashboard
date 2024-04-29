import React, { useState } from "react";

import { TabsContainer, TabOption } from "./Tabs.styles";

export default function Tabs({ options }: { options: string[] }) {
  const [selectedTab, setSelectedTab] = useState("0");

  return (
    <TabsContainer>
      {options.map((option: string) => {
        return <TabOption>{option}</TabOption>;
      })}
    </TabsContainer>
  );
}
