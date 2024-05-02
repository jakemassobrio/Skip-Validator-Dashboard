import { Theme } from "@emotion/react";
import { createColumnHelper } from "@tanstack/react-table";

import styled from "@emotion/styled";

export enum PAGES {
  Overview = "Overview",
  Validators = "Validators",
}

export enum CHAINS {
  Osmosis = "Osmosis",
  Juno = "Juno",
  CosmosHub = "Cosmos Hub",
  Evmos = "Evmos",
}

export enum THEME {
  dark = "dark",
  light = "light",
}

export const chainAPIValues = {
  Osmosis: "osmosis",
  Juno: "juno",
  "Cosmos Hub": "hub",
  Evmos: "evmos",
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
    tertiary: "#1e1e1e",
    tertiaryHover: "#f3f6f8e5",
    tertiaryText: "#f3f6f8e5",
    tertiaryTextHover: "#ffffff",
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
    tertiaryText: "#151617F2",
    tertiaryTextHover: "#ffffff",
  },
};

/** TABLE COLUMN DEFINITIONS */

export const TableName = styled.span`
  font-family: "Inter", sans-serif;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  color: #6398ff;
`;
export const TableNameHeader = styled.span`
  color: #ffffffb3;
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
`;

export const TableNumber = styled.span`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
  width: 100%;
`;

export const TableNumberHeader = styled.span`
  color: #ffffffb3;
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
  width: 100%;
`;

const columnHelper = createColumnHelper<any>();

export const columns = [
  columnHelper.accessor((row) => row.rowId, {
    id: "rowId",
    header: () => <TableNumberHeader>#</TableNumberHeader>,
    cell: (info) => <TableNumber>{info.getValue()}</TableNumber>,
  }),
  columnHelper.accessor((row) => row.Name, {
    id: "Name",
    header: () => <TableNameHeader>Validator</TableNameHeader>,
    cell: (info) => <TableName>{info.getValue()}</TableName>,
  }),
  columnHelper.accessor((row) => row.TotalMEVRevenue, {
    id: "TotalMEVRevenue",
    header: () => <TableNumberHeader>MEV Rev. - Total</TableNumberHeader>,
    cell: (info) => <TableNumber>{info.getValue()}</TableNumber>,
  }),
  columnHelper.accessor((row) => row.TotalMEVShared, {
    id: "TotalMEVShared",
    header: () => <TableNumberHeader>MEV Rev - Kept</TableNumberHeader>,
    cell: (info) => <TableNumber>{info.getValue()}</TableNumber>,
  }),
  columnHelper.accessor((row) => row.bundles, {
    id: "bundles",
    header: () => <TableNumberHeader>Bundles</TableNumberHeader>,
    cell: (info) => <TableNumber>{info.getValue()}</TableNumber>,
  }),
];
