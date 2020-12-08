import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PEOPLE_MOCK_DATA from "../components/PEOPLE_MOCK_DATA";
import PATIENT_PROGRESS from "../components/PATIENT_PROGRESS";
import { addMilliseconds, differenceInDays } from "date-fns";
import Grid from "@material-ui/core/Grid";
import TestCheckData from "./TestCheckData";
import axios from "axios";

import { Row, Col, Button } from "react-bootstrap";

import { ProfileCard } from "../components/ProfileCard/ProfileCard.js";
import { ProgressBox1 } from "../components/ProgressBox1/ProgressBox1.js";
import { ProgressBox2 } from "../components/ProgressBox1/ProgressBox2.js";
import "../pages/PageStyle.css";

var data = PEOPLE_MOCK_DATA;
var progressData = PATIENT_PROGRESS;
//var progressData = [];

const getPatientById = (id) => {
  console.log("inside getPatientById", id);

  return data.filter((patient) => {
    return patient.id.toString() === id;
  });
};

const getProgressById = (id) => {
  console.log("inside getProgressById", id);

  return progressData.filter((patient) => {
    return patient.id.toString() === id;
  });
};

/*
const differenceInDays = (a, b) =>
  Math.floor((a.getTime() - b.getTime()) / (1000 * 60 * 60 * 24));
*/

class ReportPage extends Component {
  /*
  componentDidMount() {
    axios.get("/getAssignedPlans").then((res) => {
      console.log("/getAssignedPlans res: ", res);
      console.log(
        "/getAssignedPlans res.data.data.getVideos: ",
        res.data.data.getVideos
      );

      this.setState({ progressData: res.data.data.getVideos });
    });
  }
  */
  constructor(props) {
    super(props);

    this.state = {
      data,
    };

    console.log("!!!props from ReportPage page", this.props);

    const patient = getPatientById(this.props.match.params.id);
    console.log(
      " getPatientById(this.props.match.params.id)",
      getPatientById(this.props.match.params.id)
    );
    const progress = getProgressById(this.props.match.params.id);
    console.log(
      " getProgressById(this.props.match.params.id)",
      getProgressById(this.props.match.params.id)
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
      "getProgressById(this.props.match.params.id)",
      getProgressById(this.props.match.params.id)
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
      console.log(
        "inside this.state.allCurrentProgress",
        this.state.allCurrentProgress
      );
      console.log(
        "inside this.state.allMaxProgress",
        this.state.allMaxProgress
      );
      console.log(
        "inside this.state.allProgressPercentage",
        this.state.allProgressPercentage
      );
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

    getProgressById(this.props.match.params.id).map(
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

    return (
      <div className="page-background">
        <br />
        {/*"Checking database of Assigned Plans: "}
        <TestCheckData />
        <br></br>
        {/* <h1>Progress Report Page</h1> */}

        {/*currentProgress +
          " day of " +
          maxProgress +
          " days total. Progress: " +
          progressPercentage +
          "% => " +
          this.checkIfComplete(
            currentProgress,
            maxProgress,
            progressPercentage
          ) +
          "%."*/}

        <Row>
          <Col>
            {getProgressById(this.props.match.params.id).map((chosen, idx) =>
              this.checkIfCompleteHelper(
                currentProgress[idx],
                maxProgress[idx],
                progressPercentage[idx],
                idx
              )
            )}
            {" AllCurrentProgress: " +
              this.state.allCurrentProgress +
              " AllMaxProgress: " +
              this.state.allMaxProgress +
              " AllProgressPercentage: " +
              this.state.allProgressPercentage}
            {console.log(
              "!getProgressById(this.props.match.params.id): ",
              getProgressById(this.props.match.params.id)
            )}
            {console.log(
              "!!this.props.match.params.id: ",
              this.props.match.params.id
            )}
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
          </Col>
          <Col>
            {/*
            <ProgressBox2
              cardTitle="Overall Progress/ Combination of completed Assignments and on going assingments"
              cardBody="*# of Completed exercises / # of total exercises / Progress Bar on Completion*"
            />
            <br></br>
*/}
            <ProgressBox1
              cardTitle="Excerises In Progress/On Going Assignments"
              cardBody={getProgressById(
                this.props.match.params.id
              ).map((chosen, idx) =>
                this.displayInProgress(
                  currentProgress[idx],
                  maxProgress[idx],
                  progressPercentage[idx],
                  idx
                )
              )}
              /*
               
                */
              //"*Various exercise result items this box will be scrollable*"
            />
            <br></br>

            <ProgressBox1
              cardTitle="Completed Exercises/Completed Assignments"
              cardBody={getProgressById(
                this.props.match.params.id
              ).map((chosen, idx) =>
                this.displayCompleted(
                  currentProgress[idx],
                  maxProgress[idx],
                  idx
                )
              )} //"*Exercise result item in this box will be scrollable*"
            />
            <br />
          </Col>
          <br></br>
        </Row>
      </div>
    );
  }
}

export default withRouter(ReportPage);
