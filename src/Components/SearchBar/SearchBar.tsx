import React from "react";

import Icon from "../Icon";

import { SearchBox, SearchInput, KeyboardButton } from "./SearchBar.styles";
import { useTheme } from "@emotion/react";

import { useDetectOS } from "../../utils";
import Box from "../Box";

export interface SearchBar {
  placeholder?: string;
  onSubmit: () => null | void;
  advancedSearch?: boolean;
}

export default function SearchBar({
  onSubmit,
  placeholder,
  advancedSearch = false,
}: SearchBar) {
  const theme = useTheme();

  const os = useDetectOS();

  return (
    <form onSubmit={onSubmit}>
      <SearchBox>
        <Icon icon={"search"} color={theme.text.tertiary} />
        <SearchInput
          type="text"
          placeholder={placeholder && placeholder}
          name="search"
        />
        {advancedSearch &&
          (os === "mac" ? (
            <Box display="flex" alignItems="center">
              <KeyboardButton>⌘</KeyboardButton>
              <KeyboardButton>k</KeyboardButton>
            </Box>
          ) : os === "windows" ? (
            <Box display="flex" alignItems="center">
              <KeyboardButton>Ctrl</KeyboardButton>
              <KeyboardButton>k</KeyboardButton>
            </Box>
          ) : null)}
      </SearchBox>
    </form>
  );
}
