import React, { Component } from "react";

import ReactPlayer from "react-player";

import { BasicTable } from "../TableComponents/BasicTable";
import { SortingTable } from "../TableComponents/SortingTable";
import { FilteringTable } from "../TableComponents/FilteringTable";
import { FTexercisePlan } from "../TableComponents/FTexercisePlan";
import { FTprogressReport } from "../TableComponents/FTprogressReport";
import { FTptActivity } from "../TableComponents/FTptActivity";
import { FTmockData } from "../TableComponents/FTmockData";
import { PaginationTable } from "../TableComponents/PaginationTable";
import { RowSelection } from "../TableComponents/RowSelection";

import DynamicTable from "../DynamicTable";
import expandedTable from "../TableComponents/expandedTable";
import YoutubeForm from "../FormComponents/YoutubeForm";
import FormikContainer from "../FormComponents/FormikContainer";
import AssignmentForm from "../FormComponents/AssignmentForm";
import TestFormForPost from "../FormComponents/TestFormForPost";

class Home extends Component {
  render() {
    return (
      <div>
        <h2> This is our Home Page! </h2>
        <h3> Patient List for PT A! </h3>
        <AssignmentForm />
        {
          //<FTmockData />
          //        <TestForm />
          //<ReactPlayer url="https://www.youtube.com/watch?v=Rm48uz2emp8" />;
        }
        {/*
        <h1>Patient List</h1>
        <FilteringTable />
        <h1>Exercise Plan Directory</h1>
        <FTexercisePlan />
        <h1>Progress Report Directory</h1>
        <FTprogressReport />
        <h1>Physical Therapist Activity</h1>
        <FTptActivity />
        */}
        <div></div>
      </div>
    );
  }
}
export default Home;
