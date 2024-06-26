import type { Meta, StoryObj } from "@storybook/react";
import NavBar from "./NavBar";
import { navOptions } from "../../../constants";
import { fn } from "@storybook/test";

const meta = {
  title: "NavBar",
  component: NavBar,
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
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    navOptions: navOptions,
    setTheme: fn(),
  },
};
