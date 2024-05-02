import React from "react";

import { Title, StatisticName, StatisticValue } from "./StatisticsPanel.styles";
import Icon from "../Icon";
import Card from "../Card";

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
    <Card p={"40px"} width={"320px"}>
      <Title>{title}</Title>
      {data.map((statistic) => (
        <Statistic {...statistic} />
      ))}
    </Card>
  );
}

const Statistic = ({ title, value }: StatisticsObject) => (
  <>
    <Icon height="18px" width="18px" icon={"payments"} color={"#F3F6F8B2"} />
    <StatisticName>{title}</StatisticName>
    <StatisticValue>{value}</StatisticValue>
  </>
);
