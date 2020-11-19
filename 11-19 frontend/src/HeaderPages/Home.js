import React, { Component } from "react";

import ReactPlayer from "react-player";

import { BasicTable } from "../TableComponents/BasicTable";
import { SortingTable } from "../TableComponents/SortingTable";
import { FTpatientList } from "../TableComponents/FTpatientList";
import { FTexercisePlan } from "../TableComponents/FTexercisePlan";
import { FTprogressReport } from "../TableComponents/FTprogressReport";
import { FTptActivity } from "../TableComponents/FTptActivity";
import { FTmockData } from "../TableComponents/FTmockData";
import { PaginationTable } from "../TableComponents/PaginationTable";
import { RowSelection } from "../TableComponents/RowSelection";
import { IntuitiveTable } from "../TableComponents/IntuitiveTable";

import DynamicTable from "../DynamicTable";
import expandedTable from "../TableComponents/expandedTable";
import YoutubeForm from "../FormComponents/YoutubeForm";
import FormikContainer from "../FormComponents/FormikContainer";
import AssignmentFormTabled from "../FormComponents/AssignmentFormTabled";
import TestFormForPost from "../FormComponents/TestFormForPost";
import SimpleAssignmentForm from "../FormComponents/SimpleAssignmentForm";

class Home extends Component {
  render() {
    return (
      <div>
        <h2> This is our Home Page! </h2>
        <h3> Patient List for PT A! </h3>

        {<SimpleAssignmentForm />}
        {/*
          //<FTmockData />
          //<TestFormForPost />
          ;
        <ReactPlayer url="https://www.youtube.com/watch?v=CpHevwEGGyM" />
*/}
        <h1>Patient List</h1>
        <FTpatientList />
        <h1>Exercise Plan Directory</h1>
        <FTexercisePlan />
        <h1>Progress Report Directory</h1>
        <FTprogressReport />
        <h1>Physical Therapist Activity</h1>
        <FTptActivity />

        <div></div>
      </div>
    );
  }
}
export default Home;
