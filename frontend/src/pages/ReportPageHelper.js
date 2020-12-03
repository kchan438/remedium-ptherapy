import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PEOPLE_MOCK_DATA from "../components/PEOPLE_MOCK_DATA";
import PATIENT_PROGRESS from "../components/PATIENT_PROGRESS";
import { differenceInDays } from "date-fns";
import Grid from "@material-ui/core/Grid";
import CircularProgressWithLabel from "../components/MaterialUIcomponents/CircularProgressWithLabel";

import { Row, Col, Button } from "react-bootstrap";

import { ProfileCard } from "../components/ProfileCard/ProfileCard.js";
import { ProgressBox1 } from "../components/ProgressBox1/ProgressBox1.js";
import { ProgressBox2 } from "../components/ProgressBox1/ProgressBox2.js";

var data = PEOPLE_MOCK_DATA;
var progressdata = PATIENT_PROGRESS;

const getPatientById = (id) => {
  console.log("inside getPatientById", id);
  return data.filter((patient) => {
    return patient.id.toString() === id;
  });
};

const getProgressById = (id) => {
  console.log("inside getProgressById", id);
  return progressdata.filter((patient) => {
    return patient.id.toString() === id;
  });
};

/*
const differenceInDays = (a, b) =>
  Math.floor((a.getTime() - b.getTime()) / (1000 * 60 * 60 * 24));
*/

class ReportPageHelper extends Component {
  constructor(props) {
    super(props);
    console.log("props from ReportPageHelper", this.props);

    const patient = getPatientById(String(this.props.props.id));
    console.log(
      " getPatientById(String(this.props.props.id))",
      getPatientById(String(this.props.props.id))
    );
    const progress = getProgressById(String(this.props.props.id));
    console.log(
      " getProgressById(String(this.props.props.id))",
      getProgressById(String(this.props.props.id))
    );

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
    let progressId = [];
    let progressTitle = [];
    let progressDescription = [];
    let progressVideos = [];
    let progressAssignStartDate = [];
    let progressAssignEndDate = [];

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

      progress.map(
        (chosen) => (
          progressId.push(chosen.id),
          progressTitle.push(chosen.title),
          progressDescription.push(chosen.description),
          progressVideos.push(chosen.checked),
          progressAssignStartDate.push(chosen.assignstartdate),
          progressAssignEndDate.push(chosen.assignenddate)
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
      ptitle: progressTitle,
      pdesc: progressDescription,
      pvids: progressVideos,
      pstartdate: progressAssignStartDate,
      penddate: progressAssignEndDate,

      allCurrentProgress: 0,
      allMaxProgress: 0,
      allProgressPercentage: 0,
    };
    console.log("this.state.pid: ", this.state.pid);
    console.log("this.state.pid[0 ]: ", this.state.pid[0]);

    console.log("this.state.ptitle: ", this.state.ptitle);
    console.log("this.state.pdesc: ", this.state.pdesc);
    console.log("this.state.pvids: ", this.state.pvids);
    console.log("this.state.pstartdate: ", this.state.pstartdate);
    console.log("this.state.penddate: ", this.state.penddate);
  }

  displayCompleted(currentProgress, maxProgress, id) {
    console.log("displaywhich props:", id);
    console.log(
      "getProgressById(String(this.props.props.id))",
      getProgressById(String(this.props.props.id))
    );
    <div>checking just in case</div>;
    if (currentProgress >= maxProgress) {
      console.log("inside if displaywhich props:", id);
      return (
        <Grid
          container
          spacing={0}
          justify="center"
          alignItems="center"
          style={{
            border: "2px solid grey",
            borderRadius: "5px",
          }}
          className="order-body"
        >
          {this.state.ptitle[id]} <br />
          {this.state.pdesc[id]} <br />
          {this.state.pvids[id]} <br />
          {this.state.pstartdate[id]} <br />
          {this.state.penddate[id]} <br />
        </Grid>
      );
    } else {
      return "none ";
    }
  }

  displayInProgress(currentProgress, maxProgress, progressPercentage, id) {
    if (currentProgress < maxProgress) {
      console.log(
        "this.state.allCurrentProgress",
        this.state.allCurrentProgress
      );
      console.log("this.state.allMaxProgress", this.state.allMaxProgress);
      console.log(
        "this.state.allProgressPercentage",
        this.state.allProgressPercentage
      );

      return (
        <Grid
          container
          spacing={0}
          justify="center"
          alignItems="center"
          style={{
            border: "2px solid grey",
            borderRadius: "5px",
          }}
          className="order-body"
        >
          {this.state.ptitle[id]} <br />
          {this.state.pdesc[id]} <br />
          {this.state.pvids[id]} <br />
          {this.state.pstartdate[id]} <br />
          {this.state.penddate[id]} <br />
        </Grid>
      );
    } else {
      return "none ";
    }
  }
  checkIfCompleteHelper(currentProgress, maxProgress, progressPercentage) {
    if (currentProgress < maxProgress) {
      this.state.allCurrentProgress += currentProgress;
      this.state.allMaxProgress += maxProgress;
      this.state.allProgressPercentage =
        (this.state.allCurrentProgress / this.state.allMaxProgress) * 100;
    }
  }

  checkIfComplete(currentProgress, maxProgress, progressPercentage) {
    console.log("checkIfComplete currentProgress: ", currentProgress);
    console.log("checkIfComplete maxProgress: ", maxProgress);
    console.log("checkIfComplete progressPercentage: ", progressPercentage);

    if (currentProgress >= maxProgress) {
      return "100";
    } else {
      return progressPercentage;
    }
  }

  render() {
    var currentProgress = [];
    var maxProgress = [];
    var progressPercentage = [];
    console.log("currentProgress: ", currentProgress);
    console.log("maxProgress: ", maxProgress);
    console.log("progressPercentage: ", progressPercentage);

    getProgressById(String(this.props.props.id)).map(
      (chosen) => (
        //chosen.assignstartdate, chosen.assignenddate
        currentProgress.push(
          Math.abs(
            differenceInDays(new Date(chosen.assignstartdate), new Date())
          )
        ),
        maxProgress.push(
          Math.abs(
            differenceInDays(
              new Date(chosen.assignstartdate),
              new Date(chosen.assignenddate)
            )
          )
        ),
        progressPercentage.push(
          Math.floor(
            (Math.abs(
              differenceInDays(new Date(chosen.assignstartdate), new Date())
            ) /
              Math.abs(
                differenceInDays(
                  new Date(chosen.assignstartdate),
                  new Date(chosen.assignenddate)
                )
              )) *
              100
          )
        )
      )
    );
    {
      getProgressById(String(this.props.props.id)).map((chosen, idx) =>
        this.checkIfCompleteHelper(
          currentProgress[idx],
          maxProgress[idx],
          progressPercentage[idx],
          idx
        )
      );
    }
    {
      //I want to return value so that SearchPage gets the progress Value
      this.state.allProgressPercentage = this.checkIfComplete(
        this.state.allCurrentProgress,
        this.state.allMaxProgress,
        this.state.allProgressPercentage
      );
    }
    /*
<ProfileCard
          id={this.state.id}
          first_name={this.state.first_name}
          last_name={this.state.last_name}
          age={this.state.age}
          location={this.state.location}
          current_injury_type={this.state.current_injury_type}
          progress={this.checkIfComplete(
            this.state.allCurrentProgress,
            this.state.allMaxProgress,
            this.state.allProgressPercentage
          )}
          avatar={this.state.avatar}
        />
*/
    return (
      <>
        {
          <CircularProgressWithLabel
            variant="determinate"
            value={this.state.allProgressPercentage}
          />
        }
      </>
    );
  }
}

export default withRouter(ReportPageHelper);
