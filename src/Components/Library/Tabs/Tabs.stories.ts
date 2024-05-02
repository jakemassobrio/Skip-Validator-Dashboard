import type { Meta, StoryObj } from "@storybook/react";
import Tabs from "./Tabs";
import { fn } from "@storybook/test";

const meta = {
  title: "Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    initialValue: "option 1",
    options: ["option 1", "option 2"],
    onClick: fn(),
  },
};
