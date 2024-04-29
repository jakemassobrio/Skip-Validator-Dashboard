import type { Meta, StoryObj } from "@storybook/react";
import Box from "./Box";

const meta = {
  title: "Box",
  component: Box,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Hello World",
    display: "flex",
    background: "#ffffff",
    p: "20px",
    borderRadius: "5px",
  },
};
