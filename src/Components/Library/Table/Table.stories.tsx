import type { Meta, StoryObj } from "@storybook/react";
import Table from "./Table";

import { osmosisMockData } from "../../../fixtures";
import { columns } from "../../../constants";

const meta = {
  title: "Table",
  component: Table,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "80vw" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Top MEV Validators on Osmosis",
    tableData: osmosisMockData,
    columns: columns,
  },
};
