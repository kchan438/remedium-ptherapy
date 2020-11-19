const express = require("express");
const db = require("./db");

const app = express();
const cors = require("cors");
const path = require("path");
const e = require("express");

app.use(cors());
app.use(express.json());
//app.use(express.static('../frontend/website648'))

//routs

app.get("/getCurrentPatients", async (req, res) => {
  try {
    const results = await db.query(
      'SELECT "first_Name", "last_Name", email, bio, "Registration_Date", "User_ID" FROM public."Registered_User" WHERE "User_ID" = (SELECT "User_ID" FROM public."Patient" WHERE "PTID" =1)'
    );
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        currentPatients: results.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
});

app.get("/getExercisePlan", async (req, res) => {
  try {
    const results = await db.query(
      'SELECT "Plan_ID", "Plan_Name", "Description", date_created, reps FROM public."Exercise_Plan" WHERE "Patient_ID" = 1'
    );
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        exercisePlan: results.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
});

//SELECT * FROM public."ProgessReport" WHERE "patientID" = 4
app.get("/getProgressReports", async (req, res) => {
  try {
    const results = await db.query(
      'SELECT "Start_Time_Date", "End_Time_Date", "Patient_ID", "Tag", "Plan_ID", "Frequency", "Activities", "Report_ID", total_time FROM public."Report" WHERE "Patient_ID" = 1'
    );
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        exercisePlan: results.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
});

app.get("/getActivityReport", async (req, res) => {
  try {
    const results = await db.query(
      'SELECT "at_ID", start_questions, end_questions, start_view_video, end_view_video, start_reading_profile, end_reading_profile, "pt_ID", "patient_ID" FROM public."ActivityReport" WHERE "pt_ID" = 1 AND "patient_ID" = 1;'
    );
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        exercisePlan: results.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
});

app.get("/", function (req, res) {
  res.sendFile(
    "/Users/agunderson/Desktop/csc648/project/frontend/website648/Home.html"
  );
});

app.get("/backendlead", function (req, res) {
  res.sendFile();
});

app.listen(5000, () => {
  console.log("server has started on port");
});
