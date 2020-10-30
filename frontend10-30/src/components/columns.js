import React, { useMemo, useState, useEffect } from "react";
import { format } from "date-fns";
import { ColumnFilter } from "./ColumnFilter";
import axios from "axios";

/*
export default function FetchData() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("/getCurrentPatients")
      .then((res) => {
        console.log(res.data.data.currentPatients);
        setPosts(res.data.data.currentPatients);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (FetchData = { posts });
}
*/

export const patientCOLUMNS = [
  {
    Header: "ID",
    accessor: "id",
    Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: "First Name",
    accessor: "firstName",
    Filter: ColumnFilter,
  },
  {
    Header: "Last Name",
    accessor: "lastName",
    Filter: ColumnFilter,
  },
  {
    Header: "Age",
    accessor: "age",
    Filter: ColumnFilter,
  },
  {
    Header: "Bio",
    accessor: "bio",
    Filter: ColumnFilter,
  },
  {
    Header: "Email",
    accessor: "email",
    Filter: ColumnFilter,
  },
  {
    Header: "Physical Therapist ID",
    accessor: "ptID",
    Filter: ColumnFilter,
  },
];

export const exerciseCOLUMNS = [
  {
    Header: "Exercise Plan ID",
    accessor: "exerciseplanID",
    Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: "Plan Name",
    accessor: "planName",
    Filter: ColumnFilter,
  },
  {
    Header: "Description",
    accessor: "description",
    Filter: ColumnFilter,
  },
  {
    Header: "Reps (Repetitions)",
    accessor: "reps",
    Filter: ColumnFilter,
  },

  {
    Header: "Assigned Video ID",
    accessor: "assignedVideoID",
    Filter: ColumnFilter,
  },
  {
    Header: "Date Created",
    accessor: "datecreated",
    Filter: ColumnFilter,
  },
  {
    Header: "Patient",
    accessor: "patient",
    Filter: ColumnFilter,
  },
  {
    Header: "Physical Therapist ID",
    accessor: "ptID",
    Filter: ColumnFilter,
  },
];

export const progressCOLUMNS = [
  {
    Header: "Progress Report ID",
    accessor: "progressreportID",
    Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: "Progress Text",
    accessor: "progressText",
    Filter: ColumnFilter,
  },
  {
    Header: "Patient ID",
    accessor: "patientID",
    Filter: ColumnFilter,
  },
  {
    Header: "Exercise Plan ID",
    accessor: "exercisePlanID",
    Filter: ColumnFilter,
  },
];
export const ptActivityCOLUMNS = [
  {
    Header: "PT Activity ID",
    accessor: "ptActivityId",
    Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: "Activity Description",
    accessor: "activityDes",
    Filter: ColumnFilter,
  },
  {
    Header: "Time and Duration",
    accessor: "timeAndDur",
    Filter: ColumnFilter,
  },
];
/*
export const GROUPED_COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
  },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "First Name",
        Footer: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        Footer: "Last Name",
        accessor: "last_name",
      },
    ],
  },
  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        Header: "Email",
        Footer: "Email",
        accessor: "email",
      },
      {
        Header: "Gender",
        Footer: "Gender",
        accessor: "gender",
      },
      {
        Header: "Age",
        Footer: "Age",
        accessor: "age",
      },
      {
        Header: "Phone",
        Footer: "Phone",
        accessor: "phone",
      },
      {
        Header: "Date of Exercise",
        Footer: "Date of Exercise",
        accessor: "date_of_exercise",
      },
    ],
  },
 
];
 */
