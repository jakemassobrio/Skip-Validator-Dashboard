export enum DashboardOptions {
  Overview = "Overview",
  Validators = "Validators",
}

export enum Chains {
  Osmosis = "Osmosis",
  Juno = "Juno",
  CosmosHub = "Cosmos Hub",
}

export enum Theme {
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

export const darkTheme = {
  colors: {
    primary: "#000000",
  },
};

export const lightTheme = {
  colors: {
    primary: "#eeeeee",
  },
};
