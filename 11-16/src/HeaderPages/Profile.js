//not using this .js yet
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { getPatientById } from "../PatientAPI";

class Profile extends Component {
  constructor(props) {
    super(props);
    const patient = getPatientById(this.props.match.params.id);
    let patientId = "not found";
    let patientName = "not found";
    let patientRole = "not found";

    if (patient.length > 0) {
      patientId = patient[0].id;
      patientName = patient[0].name;
    }
    this.state = {
      id: patientId,
      name: patientName,
      role: patientRole,
    };
  }

  render() {
    return (
      <div>
        <h4>This is our profile Page!</h4>
        <h5>Name: {this.state.name}</h5>
        <h5>id: {this.state.id}</h5>
      </div>
    );
  }
}
export default withRouter(Profile);
