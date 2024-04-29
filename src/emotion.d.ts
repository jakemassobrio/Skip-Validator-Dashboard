import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    theme: "dark" | "light";
    colors: {
      primary: string;
      secondary: string;
      error: string;
      warning: string;
      info: string;
      success: string;
    };
    text: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    background: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    border: {
      primary: string;
    };
    button: {
      primary: string;
      primaryHover: string;
      primaryText: string;
      primaryTextHover: string;
      secondary: string;
      secondaryHover: string;
      secondaryText: string;
      secondaryTextHover: string;
    };
  }
}
