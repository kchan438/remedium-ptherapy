import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PEOPLE_MOCK_DATA from "../components/PEOPLE_MOCK_DATA";

import { Col, Row } from "react-bootstrap";

import { ProfileCard } from "../components/ProfileCard/ProfileCard.js";
import { AboutMe } from "../components/AboutMe/AboutMe.js";
import { ProfileButtons } from "../components/ProfileButtons/ProfileButtons.js";

var data = PEOPLE_MOCK_DATA;

const getPatientById = (id) => {
  return data.filter((patient) => {
    return patient.id.toString() === id;
  });
};

class ContactPage extends Component {
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
              progress={this.state.progress}
              avatar={this.state.avatar}
            />
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
            <AboutMe info={this.state.bio} />
          </Col>
        </Row>
      </>
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
