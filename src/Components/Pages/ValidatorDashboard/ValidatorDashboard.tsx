import React, { useState } from "react";

import Tabs from "../../Library/Tabs";
import { DashboardBody } from "./ValidatorDashboard.styles";
import Box from "../../Library/Box";
import { CHAINS } from "../../../constants";
import Table from "../../Library/Table";

import { useValidatorData } from "../../../utils";

import { statisticsMockData } from "../../../fixtures";

import StatisticsPanel from "../../Library/StatisticsPanel/StatisticsPanel";

import { columns } from "../../../constants";

export default function ValidatorDashboard() {
  const [chain, setChain] = useState(CHAINS.Osmosis);
  const validators = useValidatorData(chain);

  const handleSetChains = (value: string) => {
    setChain(value as CHAINS);
  };

  return (
    <DashboardBody>
      <Tabs
        initialValue={chain}
        options={Object.values(CHAINS)}
        onClick={handleSetChains}
      />
      <Box display="flex" justify="space-between" gap="40px">
        <Table
          title="Top MEV Validators on Osmosis"
          tableData={validators}
          columns={columns}
        />
        <StatisticsPanel
          title="Osmosis Validator Stats"
          data={statisticsMockData}
        />
      </Box>
    </DashboardBody>
  );
}
