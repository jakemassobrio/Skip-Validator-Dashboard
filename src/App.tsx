import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Tabs from "./Components/Tabs/Tabs";
import { AppBody, AppDashboardTabs, AppWrapper } from "./App.styles";
import { DashboardOptions, Chains, darkTheme, lightTheme } from "./constants";
import Table from "./Components/Table/Table";

import { useValidatorsAPI } from "./utils";
import { ThemeProvider } from "@emotion/react";

function App() {
  const validators = useValidatorsAPI();
  const promise1 = Promise.resolve(validators);

  promise1.then((value) => {
    console.log(value);
  });
  return (
    <ThemeProvider theme={"dark" ? darkTheme : lightTheme}>
      <AppWrapper>
        <NavBar />
        <AppDashboardTabs>
          <Tabs options={Object.keys(DashboardOptions)} />
        </AppDashboardTabs>
        <AppBody>
          <Tabs options={Object.keys(Chains)} />
          <Table
            title="Top MEV Validators on Osmosis"
            tableData={[
              {
                rowId: 1,
                name: "polkachu.com",
                totalMEVRevenue: 1332886,
                totalMEVShared: 856736,
                bundles: 50,
              },
              {
                rowId: 2,
                name: "Stakers",
                totalMEVRevenue: 193922,
                totalMEVShared: 97376,
                bundles: 800,
              },
              {
                rowId: 3,
                name: "Active Nodes",
                totalMEVRevenue: 130120,
                totalMEVShared: 76237,
                bundles: 21,
              },
              {
                rowId: 4,
                name: "Kleomedes",
                totalMEVRevenue: 8216132,
                totalMEVShared: 765180,
                bundles: 19,
              },
              {
                rowId: 5,
                name: "IcyCRO 🧊",
                totalMEVRevenue: 33011,
                totalMEVShared: 28023,
                bundles: 531,
              },
              {
                rowId: 6,
                name: "Oni ⛩️",
                totalMEVRevenue: 22274004,
                totalMEVShared: 3518523,
                bundles: 500,
              },
              {
                rowId: 7,
                name: "0base.vc",
                totalMEVRevenue: 1773643,
                totalMEVShared: 1601148,
                bundles: 91,
              },
              {
                rowId: 8,
                name: "Citadel.one",
                totalMEVRevenue: 816287,
                totalMEVShared: 433453,
                bundles: 11,
              },
              {
                rowId: 9,
                name: "Made In Block",
                totalMEVRevenue: 3929931,
                totalMEVShared: 1036416,
                bundles: 14,
              },
              {
                rowId: 10,
                name: "WhisperNode🤐",
                totalMEVRevenue: 923848,
                totalMEVShared: 156765,
                bundles: 231,
              },
              {
                rowId: 11,
                name: "CommunityStaking",
                totalMEVRevenue: 11304050,
                totalMEVShared: 227803,
                bundles: 1411,
              },
              {
                rowId: 12,
                name: "ChainTools",
                totalMEVRevenue: 2049563,
                totalMEVShared: 758806,
                bundles: 1212,
              },
              {
                rowId: 13,
                name: "StakeLab",
                totalMEVRevenue: 938086,
                totalMEVShared: 489421,
                bundles: 2000,
              },
            ]}
          />
        </AppBody>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
