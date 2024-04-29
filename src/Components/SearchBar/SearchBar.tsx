import React from "react";

import Icon from "../Icon/Icon";

interface SearchBar {
  onSubmit: () => null | void;
}

export default function SearchBar({ onSubmit }: SearchBar) {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Search.." name="search" />
      <button type="submit">
        <Icon icon={"search"} color={"#151617E5"} />
      </button>
    </form>
  );
}
