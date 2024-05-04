import React, { useState, useEffect, ChangeEvent } from "react";

import Icon from "../Icon";

import { SearchBox, SearchInput, KeyboardButton } from "./SearchBar.styles";
import { useTheme } from "@emotion/react";

import { useDetectOS } from "../../../utils";
import Box from "../Box";

export interface SearchBar {
  placeholder?: string;
  value: string;
  onChange: (value: string) => null | void;
  advancedSearch?: boolean;
}

export default function SearchBar({
  onChange,
  value,
  placeholder,
  advancedSearch = false,
}: SearchBar) {
  const [input, setInput] = useState("");
  const theme = useTheme();

  const os = useDetectOS();

  useEffect(() => {
    if (value) {
      setInput(value);
    }
  }, [value]);

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
    onChange(event.target.value);
  };

  return (
    <form>
      <SearchBox>
        <Icon icon={"search"} color={theme.text.tertiary} />
        <SearchInput
          type="text"
          placeholder={placeholder && placeholder}
          id="search"
          value={input}
          onChange={handleChangeInput}
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
