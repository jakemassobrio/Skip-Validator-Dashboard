import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Table from "./Table";

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
    tableData: [
      {
        rowId: 1,
        name: "polkachu.com",
        totalMEVRevenue: 1332886,
        totalMEVShared: 856736,
        bundles: 50,
      },
      {
        rowId: 2,
        name: "Stakers",
        totalMEVRevenue: 193922,
        totalMEVShared: 97376,
        bundles: 800,
      },
      {
        rowId: 3,
        name: "Active Nodes",
        totalMEVRevenue: 130120,
        totalMEVShared: 76237,
        bundles: 21,
      },
      {
        rowId: 4,
        name: "Kleomedes",
        totalMEVRevenue: 8216132,
        totalMEVShared: 765180,
        bundles: 19,
      },
      {
        rowId: 5,
        name: "IcyCRO 🧊",
        totalMEVRevenue: 33011,
        totalMEVShared: 28023,
        bundles: 531,
      },
      {
        rowId: 6,
        name: "Oni ⛩️",
        totalMEVRevenue: 22274004,
        totalMEVShared: 3518523,
        bundles: 500,
      },
      {
        rowId: 7,
        name: "0base.vc",
        totalMEVRevenue: 1773643,
        totalMEVShared: 1601148,
        bundles: 91,
      },
      {
        rowId: 8,
        name: "Citadel.one",
        totalMEVRevenue: 816287,
        totalMEVShared: 433453,
        bundles: 11,
      },
      {
        rowId: 9,
        name: "Made In Block",
        totalMEVRevenue: 3929931,
        totalMEVShared: 1036416,
        bundles: 14,
      },
      {
        rowId: 10,
        name: "WhisperNode🤐",
        totalMEVRevenue: 923848,
        totalMEVShared: 156765,
        bundles: 231,
      },
      {
        rowId: 11,
        name: "CommunityStaking",
        totalMEVRevenue: 11304050,
        totalMEVShared: 227803,
        bundles: 1411,
      },
      {
        rowId: 12,
        name: "ChainTools",
        totalMEVRevenue: 2049563,
        totalMEVShared: 758806,
        bundles: 1212,
      },
      {
        rowId: 13,
        name: "StakeLab",
        totalMEVRevenue: 938086,
        totalMEVShared: 489421,
        bundles: 2000,
      },
    ],
  },
};
