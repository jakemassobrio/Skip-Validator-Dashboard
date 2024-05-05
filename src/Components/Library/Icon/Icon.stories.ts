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
export const ArrowDropUp: Story = {
  args: {
    icon: "arrow_drop_up",
    color: "#ffffff",
  },
};
export const Sort: Story = {
  args: {
    icon: "sort",
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

export const DarkMode: Story = {
  args: {
    icon: "dark_mode",
    color: "#ffffff",
  },
};

export const LightMode: Story = {
  args: {
    icon: "light_mode",
    color: "#ffffff",
  },
};
