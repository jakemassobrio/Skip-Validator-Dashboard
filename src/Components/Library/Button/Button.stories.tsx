import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Button from "./Button";
import Icon from "../Icon/Icon";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    name: "Sign Up",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    name: "Sign Up",
    variant: "secondary",
  },
};

export const LeftIcon: Story = {
  args: {
    name: "Sign Up",
    variant: "secondary",
    leftIcon: <Icon icon={"search"} color={"#ffffff"} />,
  },
};

export const RightIcon: Story = {
  args: {
    name: "Sign Up",
    variant: "secondary",
    rightIcon: <Icon icon={"arrow_drop_down"} color={"#ffffff"} />,
  },
};
