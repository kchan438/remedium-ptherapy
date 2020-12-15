import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PEOPLE_MOCK_DATA from "../components/PEOPLE_MOCK_DATA";
import PATIENT_PROGRESS from "../components/PATIENT_PROGRESS";
import { differenceInDays } from "date-fns";
import axios from "axios";

import { Row, Col, Button } from "react-bootstrap";
import "../pages/PageStyle.css";

//Components
import { ProfileCard } from "../components/ProfileCard/ProfileCard.js";
import { ProfileButtons } from "../components/ProfileButtons/ProfileButtons.js";
import { AboutMe } from "../components/AboutMe/AboutMe.js";
import ReportPageHelper from "./ReportPageHelper";

//var data = PEOPLE_MOCK_DATA;
//console.log("Checking data: ", data);
//var progressdata = PATIENT_PROGRESS;

const getPatientById = (id, patients) => {
  console.log("999CHECKING patients: ", patients);
  return patients.filter((patient) => {
    return patient.User_ID.toString() === id;
  });
};

class PatientProfilePage extends Component {
  constructor(props) {
    super(props);
    console.log("props from patientProfile page", this.props);
    this.state = {
      currentPatients: [],
    };
  }

  componentDidMount() {
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

    return (
      <div className="page-background">
        {console.log("selectedFirstName", selectedFirstName)}
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
            <AboutMe info={selectedBio} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default withRouter(PatientProfilePage);
