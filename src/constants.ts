import { Theme } from "@emotion/react";

export enum DASHBOARD_OPTIONS {
  Overview = "Overview",
  Validators = "Validators",
}

export enum CHAINS {
  Osmosis = "Osmosis",
  Juno = "Juno",
  CosmosHub = "Cosmos Hub",
}

export enum THEME {
  dark = "dark",
  light = "light",
}

export interface Validator {
  rowId: number;
  name: string;
  totalMEVRevenue: number;
  totalMEVShared: number;
  bundles: number;
}

export interface CSSProps {
  display?: string;
  height?: string;
  width?: string;
  justify?: string;
  alignItems?: string;
  alignContent?: string;
  gap?: string;
  position?: string;
  background?: string;
  color?: string;
  border?: string;
  borderRadius?: string;
  p?: string;
  pt?: string;
  pr?: string;
  pb?: string;
  pl?: string;
  m?: string;
  mt?: string;
  mr?: string;
  mb?: string;
  ml?: string;
  i?: string;
  t?: string;
  b?: string;
  l?: string;
  r?: string;
}

export const lightTheme: Theme = {
  theme: "light",
  colors: {
    primary: "#3f51b5",
    secondary: "#f50057",
    error: "#f44336",
    warning: "#ff9800",
    info: "#2196f3",
    success: "#4caf50",
  },
  text: {
    primary: "rgba(0, 0, 0, 0.87)",
    secondary: "rgba(0, 0, 0, 0.54)",
    tertiary: "rgba(0, 0, 0, 0.34)",
  },
  background: {
    primary: "#ffffff",
    secondary: "#eeeeee",
    tertiary: "#f3f6f808",
  },
  border: {
    primary: "#f3f6f81a",
  },
  button: {
    primary: "#ffffff",
    primaryHover: "#f3f6f8e5",
    primaryText: "#151617F2",
    primaryTextHover: "#ffffff",
    secondary: "#222222",
    secondaryHover: "#2c2c2c",
    secondaryText: "#dcdfe1",
    secondaryTextHover: "#ffffff",
  },
};

export const darkTheme: Theme = {
  theme: "dark",
  colors: {
    primary: "#303f9f",
    secondary: "#c51162",
    error: "#d32f2f",
    warning: "#f57c00",
    info: "#1976d2",
    success: "#388e3c",
  },
  text: {
    primary: "#f3f6f8f2",
    secondary: "#f3f6f8b2",
    tertiary: "#f3f6f880",
  },
  background: {
    primary: "#151617",
    secondary: "#121213",
    tertiary: "#f3f6f808",
  },
  border: {
    primary: "#f3f6f81a",
  },
  button: {
    primary: "#ffffff",
    primaryHover: "#f3f6f8e5",
    primaryText: "#151617F2",
    primaryTextHover: "#ffffff",
    secondary: "#222222",
    secondaryHover: "#2c2c2c",
    secondaryText: "#dcdfe1",
    secondaryTextHover: "#ffffff",
  },
};
