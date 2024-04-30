import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import Tabs from "./Components/Tabs";
import { AppBody, AppDashboardTabs, AppWrapper } from "./App.styles";
import Box from "./Components/Box";
import {
  DASHBOARD_OPTIONS,
  CHAINS,
  THEME,
  darkTheme,
  lightTheme,
} from "./constants";
import Table from "./Components/Table";

import { useValidatorsAPI } from "./utils";
import { ThemeProvider } from "@emotion/react";

import { osmosisMockData, statisticsMockData } from "./fixtures";
import SearchBar from "./Components/SearchBar";
import StatisticsPanel from "./Components/StatisticsPanel/StatisticsPanel";

function App() {
  const validators = useValidatorsAPI();
  const promise1 = Promise.resolve(validators);
  const [theme, setTheme] = useState<THEME>(THEME.dark);

  promise1.then((value) => {
    console.log(value);
  });

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <AppWrapper>
        <NavBar />
        <AppDashboardTabs>
          <Tabs options={Object.keys(DASHBOARD_OPTIONS)} />
          <SearchBar
            placeholder="Search..."
            onSubmit={() => {}}
            advancedSearch
          />
        </AppDashboardTabs>
        <AppBody>
          <Tabs options={Object.keys(CHAINS)} />
          <Box display="flex" justify="space-between" gap="40px">
            <Table
              title="Top MEV Validators on Osmosis"
              tableData={osmosisMockData}
            />
            <StatisticsPanel
              title="Osmosis Validator Stats"
              data={statisticsMockData}
            />
          </Box>
        </AppBody>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
