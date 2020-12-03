import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PEOPLE_MOCK_DATA from "../components/PEOPLE_MOCK_DATA";
import PATIENT_PROGRESS from "../components/PATIENT_PROGRESS";
import { differenceInDays } from "date-fns";
import ReportPageHelper from "./ReportPageHelper";

import { Col, Row } from "react-bootstrap";

import { ProfileCard } from "../components/ProfileCard/ProfileCard.js";
import { AboutMe } from "../components/AboutMe/AboutMe.js";
import { ProfileButtons } from "../components/ProfileButtons/ProfileButtons.js";
import "../pages/PageStyle.css";

var data = PEOPLE_MOCK_DATA;
var progressdata = PATIENT_PROGRESS;

const getPatientById = (id) => {
  return data.filter((patient) => {
    return patient.id.toString() === id;
  });
};

const getProgressById = (id) => {
  return progressdata.filter((patient) => {
    return patient.id.toString() === id;
  });
};

class ContactPage extends Component {
  constructor(props) {
    super(props);
    console.log("props from Contact page", this.props);

    const patient = getPatientById(this.props.match.params.id);
    const progress = getProgressById(this.props.match.params.id);

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
    };
  }
  checkIfComplete(currentProgress, maxProgress, progressPercentage) {
    if (currentProgress >= maxProgress) {
      return "100";
    } else {
      return progressPercentage;
    }
  }

  render() {
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
    return (
      <div className="page-background">
        <Row>
          <Col>
            <br></br>
            <ProfileCard
              id={this.state.id}
              first_name={this.state.first_name}
              last_name={this.state.last_name}
              age={this.state.age}
              location={this.state.location}
              current_injury_type={this.state.current_injury_type}
              progress={this.checkIfComplete(
                currentProgress,
                maxProgress,
                progressPercentage
              )}
              avatar={this.state.avatar}
            />{" "}
          </Col>
          <Col>
            <br></br>
            <ProfileButtons
              id={this.state.id}
              first_name={this.state.first_name}
              last_name={this.state.last_name}
              age={this.state.age}
              location={this.state.location}
              current_injury_type={this.state.current_injury_type}
              progress={this.state.progress}
              avatar={this.state.avatar}
            />
            <AboutMe info={"Contact Info: " + this.state.email} />
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

export default withRouter(ContactPage);
