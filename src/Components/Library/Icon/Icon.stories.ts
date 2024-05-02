import type { Meta, StoryObj } from "@storybook/react";
import Icon from "./Icon";

const meta = {
  title: "Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ArrowDropDown: Story = {
  args: {
    icon: "arrow_drop_down",
    color: "#ffffff",
  },
};

export const Search: Story = {
  args: {
    icon: "search",
    color: "#ffffff",
  },
};

export const Payments: Story = {
  args: {
    icon: "payments",
    color: "#ffffff",
  },
};
