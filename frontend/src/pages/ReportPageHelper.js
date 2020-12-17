import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PEOPLE_MOCK_DATA from "../components/PEOPLE_MOCK_DATA";
import PATIENT_PROGRESS from "../components/PATIENT_PROGRESS";
import { addMilliseconds, differenceInDays } from "date-fns";
import Grid from "@material-ui/core/Grid";
import TestCheckData from "./TestCheckData";
import axios from "axios";
import CircularProgressWithLabel from "../components/MaterialUIcomponents/CircularProgressWithLabel";

import { Row, Col, Button } from "react-bootstrap";

import { ProfileCard } from "../components/ProfileCard/ProfileCard.js";
import { ProgressBox1 } from "../components/ProgressBox1/ProgressBox1.js";
import { ProgressBox2 } from "../components/ProgressBox1/ProgressBox2.js";
import "../pages/PageStyle.css";

var data = PEOPLE_MOCK_DATA;
var progressData = PATIENT_PROGRESS;

const getPatientById = (id, patients) => {
  console.log("inside getPatientById", id);

  return patients.filter((patient) => {
    return patient.User_ID.toString() === id.toString();
  });
};

const getProgressById = (id, progress) => {
  console.log("!progress!:", progress);
  return progress.filter((patient) => {
    return patient.Patient_ID === id.toString();
  });
};

class ReportPageHelper extends Component {
  constructor(props) {
    super(props);
    console.log("!!!props from ReportPageHelper page", this.props);
    console.log("this.props.id)", this.props.id);

    console.log("this.props.id", this.props.id);
    console.log("666", this.props.id);
    //const patient = getPatientById(this.props.id, currentPatients);
    /*
    console.log("666 patient", patient);

    let patientId = "not found";
    let patientFirstName = "not found";
    let patientLastName = "not found";
    let patientEmail = "not found";
    let patientGender = "not found";
    let patientBio = "not found";
    let patientAge = "not found";
    let patientLocation = "not found";
    let patientInjury = "not found";
    let patientProgress = "not found";
    let patientAvatar = "not found";

    if (patient.length > 0) {
      patientId = patient[0].id;
      patientFirstName = patient[0].first_name;
      patientLastName = patient[0].last_name;
      patientEmail = patient[0].email;
      patientGender = patient[0].gender;
      patientBio = patient[0].bio;
      patientAge = patient[0].age;
      patientLocation = patient[0].location;
      patientInjury = patient[0].current_injury_type;
      patientProgress = patient[0].progress;
      patientAvatar = patient[0].avatar;
    }
*/
    this.state = {
      /*
      id: patientId,
      first_name: patientFirstName,
      last_name: patientLastName,
      email: patientEmail,
      gender: patientGender,
      bio: patientBio,
      age: patientAge,
      location: patientLocation,
      current_injury_type: patientInjury,
      progress: patientProgress,
      avatar: patientAvatar,
      */
      progressData: [],
      selectedProgressData: [],
      selectedInProgressData: [],
      calculatedProgressData: 0,
      finalProgressPercentage: 0,
      numInProgress: 0,
      numCompleted: 0,
      currentPatients: [],

      allCurrentProgress: 0,
      allMaxProgress: 0,
      allProgressPercentage: 0,
    };
  }
  componentDidMount() {
    axios.get("/getAssignedPlans").then((res) => {
      console.log("/getAssignedPlans res:", res);
      console.log(
        "/getAssignedPlans  res.data.data.assignedPlans:",
        res.data.data.assignedPlans
      );

      this.setState({ progressData: res.data.data.assignedPlans });
      console.log(
        "CONTINUED/getAssignedPlans  this.state.progressData:",
        this.state.progressData
      );
    });
    axios.get("/getCurrentPatients").then((res) => {
      console.log("/getCurrentPatients res:", res);
      console.log(
        "/getCurrentPatients  res.data.data.currentPatients:",
        res.data.data.currentPatients
      );

      this.setState({ currentPatients: res.data.data.currentPatients });
      console.log(
        "CONTINUED/getCurrentPatients  this.state.currentPatients:",
        this.state.currentPatients
      );
    });
  }

  checkIfComplete(currentProgress, maxProgress, progressPercentage) {
    console.log("checkIfComplete currentProgress: ", currentProgress);
    console.log("checkIfComplete maxProgress: ", maxProgress);
    console.log("checkIfComplete progressPercentage: ", progressPercentage);
    if (currentProgress >= maxProgress) {
      this.state.numCompleted++;
      return "100";
    }
    if (0 > currentProgress) {
      this.state.numInProgress++;
      this.state.selectedInProgressData.push(0);
      return 0;
    } else {
      this.state.numInProgress++;
      this.state.selectedInProgressData.push(progressPercentage);
      return progressPercentage;
    }
  }

  finalProgressPercentage(progressPercentage) {
    if (progressPercentage >= 100) {
      return "100";
    }
    if (0 > progressPercentage) {
      return "0";
    } else {
      return progressPercentage;
    }
  }
  quickCheck() {
    console.log("***********************");
    console.log(
      "QUICKCHECK this.state.numInProgress: ",
      this.state.numInProgress
    );
    if (this.state.numInProgress === 0) {
      return "Ready To Assign";
    } else {
      return (
        <CircularProgressWithLabel
          variant="determinate"
          value={this.state.finalProgressPercentage}
        />
      );
    }
  }

  resetState() {
    this.state.calculatedProgressData = 0;
    this.state.finalProgressPercentage = 0;
    this.state.numInProgress = 0;
    this.state.numCompleted = 0;
  }

  render() {
    console.log("@@@@this.state.progressData: ", this.state.progressData);
    var currentProgress = [];
    var maxProgress = [];
    var progressPercentage = [];
    /*
    var patient = getPatientById(
      this.props.id,
      this.state.currentPatients
    );
    */
    var selectedPatients = getPatientById(
      this.props.id,
      this.state.currentPatients
    );
    var selectedBio = "";
    var selectedFirstName = "";
    var selectedLastName = "";
    var selectedEmail = "";
    var selectedRegistration_Date = "";
    var selectedID = "";

    console.log("this.state.currentPatients", this.state.currentPatients);
    console.log("selectedPatients", selectedPatients);
    selectedPatients.map(
      (patient) => {
        selectedBio = patient.bio;
        selectedFirstName = patient.first_Name;
        selectedLastName = patient.last_Name;
        selectedEmail = patient.email;
        selectedRegistration_Date = patient.Registration_Date;
        selectedID = patient.User_ID;
      }
      //console.log("patient.bio", patient.bio)
    );
    console.log("currentProgress: ", currentProgress);
    console.log("maxProgress: ", maxProgress);
    console.log("progressPercentage: ", progressPercentage);

    getProgressById(this.props.id, this.state.progressData).map(
      (chosen) => (
        console.log("inside map currentProgress: ", currentProgress),
        console.log("inside map maxProgress: ", maxProgress),
        console.log("inside map progressPercentage: ", progressPercentage),
        //chosen.assignstartdate, chosen.assignenddate
        currentProgress.push(
          //Math.abs(
          -differenceInDays(new Date(chosen.assignstartdate), new Date())
          //)
        ),
        maxProgress.push(
          //Math.abs(
          -differenceInDays(
            new Date(chosen.assignstartdate),
            new Date(chosen.assignenddate)
          )
          //)
        ),
        progressPercentage.push(
          Math.floor(
            //Math.abs(
            (-differenceInDays(new Date(chosen.assignstartdate), new Date()) /
              //)
              //Math.abs(
              -differenceInDays(
                new Date(chosen.assignstartdate),
                new Date(chosen.assignenddate)
              )) *
              //)
              100
          )
        )
      )
    );
    getProgressById(this.props.id, this.state.progressData).map((chosen, idx) =>
      this.checkIfComplete(
        currentProgress[idx],
        maxProgress[idx],
        progressPercentage[idx]
      )
    );
    this.state.selectedInProgressData.map(
      (number) => (this.state.calculatedProgressData += number)
    );
    this.state.finalProgressPercentage =
      (this.state.calculatedProgressData /
        (this.state.selectedInProgressData.length * 100)) *
      100;

    return (
      <>
        <br />

        {"In Progress: " + this.state.numInProgress}
        <br />
        {"Completed: " + this.state.numCompleted}
        <br />

        <br />

        {"Current Progress:"}
        <br />

        {this.quickCheck()}
        <br />
        {this.resetState()}
      </>
    );
  }
}

export default withRouter(ReportPageHelper);
