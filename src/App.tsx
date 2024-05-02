import React, { useState } from "react";
import NavBar from "./Components/Library/NavBar";
import Tabs from "./Components/Library/Tabs";
import { AppDashboardTabs, AppWrapper } from "./App.styles";

import { PAGES, THEME, darkTheme, lightTheme } from "./constants";

import { ThemeProvider } from "@emotion/react";

import SearchBar from "./Components/Library/SearchBar";

import ValidatorDashboard from "./Components/Pages/ValidatorDashboard";

import OverviewPage from "./Components/Pages/NotFound/OverviewPage";

function App() {
  const [theme, setTheme] = useState<THEME>(THEME.dark);
  const [page, setPage] = useState(PAGES.Validators);

  const handleSetPage = (value: string) => {
    setPage(value as PAGES);
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <AppWrapper>
        <NavBar />
        <AppDashboardTabs>
          <Tabs
            initialValue={page}
            options={Object.values(PAGES)}
            onClick={handleSetPage}
          />
          <SearchBar
            placeholder="Search..."
            onSubmit={() => {}}
            advancedSearch
          />
        </AppDashboardTabs>
        {page === PAGES.Validators ? <ValidatorDashboard /> : <OverviewPage />}
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
