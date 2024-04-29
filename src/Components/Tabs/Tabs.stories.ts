import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Tabs from "./Tabs";

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
    options: ["option1", "option2"],
  },
};
