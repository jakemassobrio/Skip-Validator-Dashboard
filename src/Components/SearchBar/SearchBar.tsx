import React from "react";

import Icon from "../Icon/Icon";

import { SearchBox, SearchInput } from "./SearchBar.styles";
import { useTheme } from "@emotion/react";

export interface SearchBar {
  placeholder?: string;
  onSubmit: () => null | void;
}

export default function SearchBar({ onSubmit, placeholder }: SearchBar) {
  const theme = useTheme();

  return (
    <form onSubmit={onSubmit}>
      <SearchBox>
        <Icon icon={"search"} color={theme.text.tertiary} />
        <SearchInput
          type="text"
          placeholder={placeholder && placeholder}
          name="search"
        />
      </SearchBox>
    </form>
  );
}
