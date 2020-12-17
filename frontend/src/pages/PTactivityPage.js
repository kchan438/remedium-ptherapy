import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PEOPLE_MOCK_DATA from "../components/PEOPLE_MOCK_DATA";
import PATIENT_PROGRESS from "../components/PATIENT_PROGRESS";
import PT_ACTIVITY from "../components/PT_ACTIVITY";
import axios from "axios";

import { differenceInDays } from "date-fns";
import ReportPageHelper from "./ReportPageHelper";

import { Col, Row } from "react-bootstrap";

import { ProfileCard } from "../components/ProfileCard/ProfileCard.js";
import { AboutMe } from "../components/AboutMe/AboutMe.js";
import { ProfileButtons } from "../components/ProfileButtons/ProfileButtons.js";
import "../pages/PageStyle.css";

var data = PEOPLE_MOCK_DATA;
var progressdata = PATIENT_PROGRESS;
var ptActivity = PT_ACTIVITY;

const getPatientById = (id, patients) => {
  console.log("999CHECKING patients: ", patients);
  return patients.filter((patient) => {
    return patient.User_ID.toString() === id;
  });
};

const getProgressById = (id) => {
  return progressdata.filter((patient) => {
    return patient.id.toString() === id;
  });
};

const getPTactivityById = (id, patients) => {
  console.log("getPTactivityById patients", patients);
  patients.map((patient) =>
    console.log("getPTactivityById patient.Patient_ID", patient.Patient_ID)
  );

  return patients.filter((patient) => {
    console.log("inside getPTactivityById patient", patient);
    //console.log("patient.Patient_ID.toString()", patient.Patient_ID.toString());
    //console.log("id.toString()", id.toString());
    console.log("patient.Patient_ID", patient.Patient_ID);
    console.log("id", id);

    return patient.Patient_ID === id;
  });
};

class PTactivityPage extends Component {
  constructor(props) {
    super(props);
    console.log("props from Contact page", this.props);

    /*
    //const patient = getPatientById(this.props.match.params.id);
    const progress = getProgressById(this.props.match.params.id);
    const activity = getPTactivityById(this.props.match.params.id);


    console.log("checking stored patient: ", patient);
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
    let progressId = "not found";
    let progressCompleted = "not found";
    let progressAssignStartDate = "not found";
    let progressAssignEndDate = "not found";
    let ptActivityId = [];
    let ptActivityName = [];
    let ptActivityDate = [];

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
      progressId = progress[0].id;
      progressCompleted = progress[0].completed;
      progressAssignStartDate = progress[0].assignstartdate;
      progressAssignEndDate = progress[0].assignenddate;

      activity.map(
        (chosen) => (
          ptActivityId.push(chosen.patient_id),
          ptActivityName.push(chosen.activity),
          ptActivityDate.push(chosen.date)
        )
      );
    }
    this.state = {
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
      pid: progressId,
      pcompleted: progressCompleted,
      pstartdate: progressAssignStartDate,
      penddate: progressAssignEndDate,
      aid: ptActivityId,
      aact: ptActivityName,
      adate: ptActivityDate,
    };
    */
    this.state = {
      timeStampData: [],
      currentPatients: [],
    };
  }
  componentDidMount() {
    axios.get("/getAssignedPlans").then((res) => {
      console.log("/getAssignedPlans", res);

      this.setState({ timeStampData: res.data.data.assignedPlans });
    });
    axios.get("/getCurrentPatients").then((res) => {
      console.log("/getCurrentPatients res:", res);
      console.log(
        "/getCurrentPatients  res.data.data.currentPatients:",
        res.data.data.currentPatients
      );
      this.setState({ currentPatients: res.data.data.currentPatients });
      console.log(
        "CONTINUED/getCurrentPatients  currentPatients:",
        this.state.currentPatients
      );
    });
  }
  checkIfComplete(currentProgress, maxProgress, progressPercentage) {
    if (currentProgress >= maxProgress) {
      return "100";
    } else {
      return progressPercentage;
    }
  }

  render() {
    var selectedPatients = getPatientById(
      this.props.match.params.id,
      this.state.currentPatients
    );
    var selectedActivity = getPTactivityById(
      this.props.match.params.id,
      this.state.timeStampData
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
    var currentProgress = Math.abs(
      differenceInDays(new Date(this.state.pstartdate), new Date())
    );
    var maxProgress = Math.abs(
      differenceInDays(
        new Date(this.state.pstartdate),
        new Date(this.state.penddate)
      )
    );
    var progressPercentage = Math.floor(
      (Math.abs(differenceInDays(new Date(this.state.pstartdate), new Date())) /
        Math.abs(
          differenceInDays(
            new Date(this.state.pstartdate),
            new Date(this.state.penddate)
          )
        )) *
        100
    );
    /*
    var listItems = this.state.aid.map((chosen, idx) => {
      return (
        <div>
          <div>
            {"\t [Patient ID]: " +
              this.state.aid[idx] +
              " [Activity]: " +
              this.state.aact[idx] +
              " [Date]: " +
              this.state.adate[idx]}
          </div>
        </div>
      );
    });
    */
    var listActivity = selectedActivity.map((patient) => {
      return (
        <div>{"Exercise Assignment at: " + patient.activitytimestamp}</div>
      );
    });

    return (
      <div className="page-background">
        <Row>
          <Col>
            <br></br>
            <ProfileCard
              id={selectedID}
              first_name={selectedFirstName}
              last_name={selectedLastName}
              email={selectedEmail}
              bio={selectedBio}
              Registration_Date={selectedRegistration_Date}
            />{" "}
          </Col>
          <Col>
            <br></br>
            <ProfileButtons
              id={selectedID}
              first_name={selectedFirstName}
              last_name={selectedLastName}
              email={selectedEmail}
              bio={selectedBio}
              Registration_Date={selectedRegistration_Date}
            />
            <AboutMe info={listActivity} />
          </Col>
        </Row>
      </div>
    );
    /*
  render() {
    return (
      <>
        <Row>
          <Col>
            <br></br>
            <ProfileCard
              id={this.props.id}
              first_name={this.props.first_name}
              last_name={this.props.last_name}
            />
          </Col>
          <Col>
            <br></br>
            <ProfileButtons
              id={this.props.id}
              first_name={this.props.first_name}
              last_name={this.props.last_name}
            />
            <AboutMe info={"idk"} />
          </Col>
        </Row>
      </>
    );
  }
    */
  }
}

export default withRouter(PTactivityPage);
