import React, { useState } from "react";

import Tabs from "../../Library/Tabs";
import {
  DashboardBody,
  ResponsiveBox,
  MobileBox,
  DesktopBox,
} from "./ValidatorDashboard.styles";
import { CHAINS } from "../../../constants";
import Table from "../../Library/Table";

import { useValidatorData } from "../../../utils";

import { statisticsMockData } from "../../../fixtures";

import StatisticsPanel from "../../Library/StatisticsPanel";

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
      <ResponsiveBox display="flex" justify="space-between" gap="40px">
        <MobileBox>
          <StatisticsPanel
            title="Osmosis Validator Stats"
            data={statisticsMockData}
          />
        </MobileBox>
        <Table
          title="Top MEV Validators on Osmosis"
          tableData={validators}
          columns={columns}
        />
        <DesktopBox>
          <StatisticsPanel
            title="Osmosis Validator Stats"
            data={statisticsMockData}
          />
        </DesktopBox>
      </ResponsiveBox>
    </DashboardBody>
  );
}
