import React from "react";
import type { Preview } from "@storybook/react";
import { ThemeProvider } from "@emotion/react";
import { darkTheme, lightTheme } from "../src/constants";

const theme = "dark";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: theme,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
