import type { Meta, StoryObj } from "@storybook/react";
import StatisticsPanel from "./StatisticsPanel";

import { statisticsMockData } from "../../fixtures";

const meta = {
  title: "StatisticsPanel",
  component: StatisticsPanel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof StatisticsPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Osmosis Validator Stats",
    data: statisticsMockData,
  },
};
