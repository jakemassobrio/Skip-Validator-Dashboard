import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import MenuButton from "./MenuButton";

const meta = {
  title: "MenuButton",
  component: MenuButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MenuButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    name: "Sign Up",
  },
};
