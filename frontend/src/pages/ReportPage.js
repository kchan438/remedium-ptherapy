import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PEOPLE_MOCK_DATA from "../components/PEOPLE_MOCK_DATA";

import { Row, Col, Button } from "react-bootstrap";

import { ProfileCard } from "../components/ProfileCard/ProfileCard.js";
import { ProgressBox1 } from "../components/ProgressBox1/ProgressBox1.js";

var data = PEOPLE_MOCK_DATA;

const getPatientById = (id) => {
  return data.filter((patient) => {
    return patient.id.toString() === id;
  });
};

class ReportPage extends Component {
  constructor(props) {
    super(props);
    console.log("props from Contact page", this.props);

    const patient = getPatientById(this.props.match.params.id);

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
    };
  }
  render() {
    return (
      <>
        <br></br>
        {/* <h1>Progress Report Page</h1> */}
        <Row>
          <Col>
            <ProfileCard
              id={this.state.id}
              first_name={this.state.first_name}
              last_name={this.state.last_name}
              age={this.state.age}
              location={this.state.location}
              current_injury_type={this.state.current_injury_type}
              progress={this.state.progress}
              avatar={this.state.avatar}
            />
          </Col>
          <Col>
            <ProgressBox1
              cardTitle="Overall Progress"
              cardBody="*# of Completed exercises / # of total exercises / Progress Bar on Completion*"
            />
            <br></br>
            <ProgressBox1
              cardTitle="Completed Exercises"
              cardBody="*Exercise result item in this box will be scrollable*"
            />
            <br></br>
            <ProgressBox1
              cardTitle="Excerises In Progress"
              cardBody="*Various exercise result items this box will be scrollable*"
            />
          </Col>
          <br></br>
        </Row>
      </>
    );
  }
}

export default withRouter(ReportPage);
