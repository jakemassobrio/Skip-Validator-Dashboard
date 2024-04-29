import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import NavBar from "./NavBar";

const meta = {
  title: "NavBar",
  component: NavBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "80vw" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
