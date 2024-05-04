import { Theme } from "@emotion/react";
import { createColumnHelper } from "@tanstack/react-table";

import styled from "@emotion/styled";

export enum PAGES {
  Overview = "Overview",
  Validators = "Validators",
}

export enum THEME {
  dark = "dark",
  light = "light",
}

export enum CHAINS {
  Osmosis = "Osmosis",
  Juno = "Juno",
  CosmosHub = "Cosmos Hub",
  Evmos = "Evmos",
}

export const chainAPIValues = {
  Osmosis: "osmosis",
  Juno: "juno",
  "Cosmos Hub": "hub",
  Evmos: "evmos",
};

export const chains = {
  osmosis: { name: "Osmosis", apiKey: "osmosis" },
  juno: { name: "Juno", apiKey: "juno" },
  cosmoshub: { name: "Cosmos Hub", apiKey: "hub" },
  evmos: { name: "Evmos", apiKey: "evmos" },
};

export interface NavOptions {
  [key: string]: NavOption;
}

export interface NavOption {
  name: string;
  url: string;
}

export const navOptions: NavOptions = {
  home: { name: "Home", url: "https://skip.money/" },
  github: { name: "GitHub", url: "https://github.com/skip-mev" },
  careers: {
    name: "Careers",
    url: "https://skip-protocol.notion.site/Skip-Protocol-Open-Positions-a80c9cd99f2247118f89706f07fb563a/",
  },
  contact: { name: "Contact", url: "https://ideas.skip.money/" },
};

export interface ValidatorAPIResponse {
  validator_infos: Validator[];
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

/** DEFAULT THEME */

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
    primary: "#384248",
    secondary: "#637288",
    tertiary: "#4F5A66",
  },
  background: {
    primary: "#ffffff",
    secondary: "#eeeeee",
    tertiary: "#00000017",
  },
  border: {
    primary: "#D3D3D3",
  },
  button: {
    primary: "#ffffff",
    primaryHover: "#f3f6f8e5",
    primaryText: "#384248",
    primaryTextHover: "#ffffff",
    secondary: "#222222",
    secondaryHover: "#2c2c2c",
    secondaryText: "#dcdfe1",
    secondaryTextHover: "#ffffff",
    tertiary: "#00000017",
    tertiaryHover: "#f3f6f8e5",
    tertiaryText: "#959fae",
    tertiaryTextHover: "#4F5A66",
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
    secondary: "#f3f6f880",
    tertiary: "#f3f6f8b2",
  },
  background: {
    primary: "#151617",
    secondary: "#121213fc",
    tertiary: "#121213",
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
    tertiary: "#1e1e1e",
    tertiaryHover: "#f3f6f8e5",
    tertiaryText: "#d9d9d9",
    tertiaryTextHover: "#ffffff",
  },
};

/** TABLE COLUMN DEFINITIONS */

export const TableName = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  color: #6398ff;
  padding: 12px 24px;
`;
export const TableNameHeader = styled.div`
  color: ${(props) => props.theme.text.secondary};
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  padding: 12px 24px;
`;

export const TableNumber = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
  color: ${(props) => props.theme.text.primary};
  width: 100%;
  padding: 12px 24px;
`;

export const TableNumberHeader = styled.div`
  color: ${(props) => props.theme.text.secondary};
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
  width: 100%;
  padding: 12px 24px;
`;

const columnHelper = createColumnHelper<any>();

export const columns = [
  columnHelper.accessor((row) => row.rowId, {
    id: "rowId",
    size: 30,
    header: () => <TableNumberHeader>#</TableNumberHeader>,
    cell: (info) => <TableNumber>{info.getValue()}</TableNumber>,
  }),
  columnHelper.accessor((row) => row.Name, {
    id: "Name",
    size: 30,
    header: () => <TableNameHeader>Validator</TableNameHeader>,
    cell: (info) => <TableName>{info.getValue()}</TableName>,
  }),
  columnHelper.accessor((row) => row.TotalMEVRevenue, {
    id: "TotalMEVRevenue",
    size: 30,
    header: () => <TableNumberHeader>MEV Rev. - Total</TableNumberHeader>,
    cell: (info) => <TableNumber>{info.getValue()}</TableNumber>,
  }),
  columnHelper.accessor((row) => row.TotalMEVShared, {
    id: "TotalMEVShared",
    size: 30,
    header: () => <TableNumberHeader>MEV Rev - Kept</TableNumberHeader>,
    cell: (info) => <TableNumber>{info.getValue()}</TableNumber>,
  }),
  columnHelper.accessor((row) => row.bundles, {
    id: "bundles",
    size: 30,
    header: () => <TableNumberHeader>Bundles</TableNumberHeader>,
    cell: (info) => <TableNumber>{info.getValue()}</TableNumber>,
  }),
];
