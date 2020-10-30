import React, { Component } from "react";

import { BasicTable } from "../components/BasicTable";
import { SortingTable } from "../components/SortingTable";
import { FilteringTable } from "../components/FilteringTable";
import { FTexercisePlan } from "../components/FTexercisePlan";
import { FTprogressReport } from "../components/FTprogressReport";
import DynamicTable from "../DynamicTable";
import expandedTable from "../components/expandedTable";

class Home extends Component {
  render() {
    return (
      <div>
        <h2> This is our Home Page! </h2>
        <h3> Patient List for PT A! </h3>
        <h1>Patient List</h1>
        <FilteringTable />
        <h1>Exercise Plan Directory</h1>
        <FTexercisePlan />
        <h1>Progress Report Directory</h1>
        <FTprogressReport />
        <div></div>
      </div>
    );
  }
}
export default Home;
