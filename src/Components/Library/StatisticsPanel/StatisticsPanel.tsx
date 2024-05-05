import React from "react";

import {
  Title,
  StatisticName,
  StatisticValue,
  ResponsiveBox,
  StyledCard,
} from "./StatisticsPanel.styles";
import Icon from "../Icon";

import Box from "../Box";
import { useTheme } from "@emotion/react";

export interface StatisticsObject {
  title: string;
  value: string;
}

export interface StatisticsPanelProps {
  title: string;
  data: StatisticsObject[];
}

export default function StatisticsPanel({ title, data }: StatisticsPanelProps) {
  return (
    <StyledCard>
      <Title>{title}</Title>
      <ResponsiveBox display="flex" justify="space-evenly">
        {data.map((statistic) => (
          <Statistic {...statistic} />
        ))}
      </ResponsiveBox>
    </StyledCard>
  );
}

const Statistic = ({ title, value }: StatisticsObject) => {
  const theme = useTheme();
  return (
    <Box>
      <Icon
        height="18px"
        width="18px"
        icon={"payments"}
        color={theme.text.tertiary}
      />
      <StatisticName>{title}</StatisticName>
      <StatisticValue>{value}</StatisticValue>
    </Box>
  );
};
