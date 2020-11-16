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
    Header: "User ID",
    accessor: "User_ID",
    Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: "First Name",
    accessor: "first_Name",
    Filter: ColumnFilter,
  },
  {
    Header: "Last Name",
    accessor: "last_Name",
    Filter: ColumnFilter,
  },
  {
    Header: "Email",
    accessor: "email",
    Filter: ColumnFilter,
  },
  {
    Header: "Bio",
    accessor: "bio",
    Filter: ColumnFilter,
  },
  {
    Header: "Registration Date",
    accessor: "Registration_Date",
    Filter: ColumnFilter,
  },
];

export const exerciseCOLUMNS = [
  {
    Header: "Exercise Plan ID",
    accessor: "Plan_ID",
    Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: "Plan Name",
    accessor: "Plan_Name",
    Filter: ColumnFilter,
  },
  {
    Header: "Description",
    accessor: "Description",
    Filter: ColumnFilter,
  },
  {
    Header: "Date Created",
    accessor: "date_created",
    Filter: ColumnFilter,
  },

  {
    Header: "Reps (Repetitions)",
    accessor: "reps",
    Filter: ColumnFilter,
  },
];

export const progressCOLUMNS = [
  {
    Header: "Report ID",
    accessor: "Report_ID",
    Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: "Start Time Date",
    accessor: "Start_Time_Date",
    Filter: ColumnFilter,
  },
  {
    Header: "End Time Date",
    accessor: "End_Time_Date",
    Filter: ColumnFilter,
  },
  {
    Header: "Patient ID",
    accessor: "Patient_ID",
    Filter: ColumnFilter,
  },
  {
    Header: "Tag",
    accessor: "Tag",
    Filter: ColumnFilter,
  },
  {
    Header: "Exercise Plan ID",
    accessor: "Plan_ID",
    Filter: ColumnFilter,
  },
  {
    Header: "Frequency",
    accessor: "Frequency",
    Filter: ColumnFilter,
  },
  {
    Header: "Activities",
    accessor: "Activities",
    Filter: ColumnFilter,
  },

  {
    Header: "Total Time",
    accessor: "total_time",
    Filter: ColumnFilter,
  },
];
export const ptActivityCOLUMNS = [
  {
    Header: "Activity ID",
    accessor: "at_ID",
    Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: "Start Questions",
    accessor: "start_questions",
    Filter: ColumnFilter,
  },
  {
    Header: "End Questions",
    accessor: "end_questions",
    Filter: ColumnFilter,
  },
  {
    Header: "Start View Video",
    accessor: "start_view_video",
    Filter: ColumnFilter,
  },
  {
    Header: "End View Video",
    accessor: "end_view_video",
    Filter: ColumnFilter,
  },
  {
    Header: "Start Reading Profile",
    accessor: "start_reading_profile",
    Filter: ColumnFilter,
  },
  {
    Header: "End Reading Profile",
    accessor: "end_reading_profile",
    Filter: ColumnFilter,
  },
  {
    Header: "Physical Therapist ID",
    accessor: "pt_ID",
    Filter: ColumnFilter,
  },
  {
    Header: "Patient ID",
    accessor: "patient_ID",
    Filter: ColumnFilter,
  },
];

export const COLUMNS = [
  {
    Header: "ID",
    accessor: "id",
    Filter: ColumnFilter,
  },
  {
    Header: "First Name",
    accessor: "first_name",
    Filter: ColumnFilter,
  },
  {
    Header: "Last Name",
    accessor: "last_name",
    Filter: ColumnFilter,
  },
  {
    Header: "Email",
    accessor: "email",
    Filter: ColumnFilter,
  },
  {
    Header: "Gender",
    accessor: "gender",
    Filter: ColumnFilter,
  },
  {
    Header: "IP Address",
    accessor: "ip_address",
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
