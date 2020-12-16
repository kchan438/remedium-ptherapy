import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PEOPLE_MOCK_DATA from "../components/PEOPLE_MOCK_DATA";
import PATIENT_PROGRESS from "../components/PATIENT_PROGRESS";
import { addMilliseconds, differenceInDays } from "date-fns";
import Grid from "@material-ui/core/Grid";
import TestCheckData from "./TestCheckData";
import axios from "axios";
import ReactPlayer from "react-player";

import { Row, Col, Button } from "react-bootstrap";
import CircularProgressWithLabel from "../components/MaterialUIcomponents/CircularProgressWithLabel";

import { ProfileCard } from "../components/ProfileCard/ProfileCard.js";
import { ProgressBox1 } from "../components/ProgressBox1/ProgressBox1.js";
import { ProgressBox2 } from "../components/ProgressBox1/ProgressBox2.js";
import "../pages/PageStyle.css";

//var data = PEOPLE_MOCK_DATA;
var progressData = PATIENT_PROGRESS;

const getPatientById = (id, patients) => {
  console.log("999CHECKING patients: ", patients);
  return patients.filter((patient) => {
    return patient.User_ID.toString() === id;
  });
};

const getProgressById = (id, progress) => {
  console.log("!progress!:", progress);
  return progress.filter((patient) => {
    return patient.Patient_ID === id;
  });
};

class ReportPage extends Component {
  constructor(props) {
    super(props);
    /*
    state = {
      progressAxiosData: [],
    };
    axios.get("/getAssignedPlans").then((res) => {
      console.log("/getAssignedPlans res: ", res);
      this.setState({
        progressAxiosData: res.data.data.getVideos,
      }).catch((error) => {
        console.log(error);
      });
    });
    */

    console.log("!!!props from ReportPage page", this.props);

    //const patient = getPatientById(this.props.match.params.id);
    /*
    const progress = getProgressById(this.props.match.params.id);
    console.log("PLZ patient: ", patient);
    console.log("PLZ progress: ", progress);
    
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
      /*
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
      
      pid: progressId,
      ptitle: progressTitle,
      pdesc: progressDescription,
      pvids: progressVideos,
      pstartdate: progressAssignStartDate,
      penddate: progressAssignEndDate,
      */

      progressData: [],
      selectedProgressData: [],
      /*
      selectedInProgressData: [],
      calculatedProgressData: 0,
      finalProgressPercentage: 0,
      numInProgress: 0,
      numCompleted: 0,
      */

      allCurrentProgress: 0,
      allMaxProgress: 0,
      allProgressPercentage: 0,
      currentPatients: [],
    };
    /*
    console.log("this.state.pid: ", this.state.pid);
    console.log("this.state.pid[0 ]: ", this.state.pid[0]);
    console.log("this.state.ptitle: ", this.state.ptitle);
    console.log("this.state.pdesc: ", this.state.pdesc);
    console.log("this.state.pvids: ", this.state.pvids);
    console.log("this.state.pstartdate: ", this.state.pstartdate);
    console.log("this.state.penddate: ", this.state.penddate);
    */
  }
  componentDidMount() {
    axios.get("/getAssignedPlans").then((res) => {
      console.log(res);

      this.setState({ progressData: res.data.data.assignedPlans });
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

  displayCompleted(currentProgress, maxProgress, id) {
    console.log("displayCOMPLETED props ID:", id);
    this.state.selectedProgressData = getProgressById(
      this.props.match.params.id,
      this.state.progressData
    );
    console.log(
      "getProgressById(this.state.selectedProgressData)",
      this.state.selectedProgressData
    );
    console.log("displayCompleted currentProgress: ", currentProgress);
    console.log("displayCompleted maxProgress: ", maxProgress);
    if (currentProgress >= maxProgress) {
      console.log("inside if displaywhich props:", id);
      this.state.numCompleted++;
      console.log("***this.state.numCompleted:", this.state.numCompleted);

      return (
        <Grid
          container
          spacing={0}
          justify="center"
          alignItems="center"
          style={{
            display: "grid",
            border: "2px solid grey",
            borderRadius: "5px",
          }}
          className="order-body"
        >
          {"Progress:"}
          <div>
            <CircularProgressWithLabel
              variant="determinate"
              value={Math.floor(
                this.checkIfCompleteDouble(
                  -differenceInDays(
                    new Date(
                      this.state.selectedProgressData[id].assignstartdate
                    ),
                    new Date()
                  ),
                  -differenceInDays(
                    new Date(
                      this.state.selectedProgressData[id].assignstartdate
                    ),
                    new Date(this.state.selectedProgressData[id].assignenddate)
                  )
                )
              )}
            />
          </div>
          {"Title: " + this.state.selectedProgressData[id].title} <br />
          {"Description: " +
            this.state.selectedProgressData[id].description}{" "}
          {
            //"Video: " + this.state.selectedProgressData[id].checked
          }{" "}
          {
            <ReactPlayer
              controls={true}
              url={this.state.selectedProgressData[id].checked}
              width="400px"
              height="200px"
            />
          }
          {"Start Date: " + this.state.selectedProgressData[id].assignstartdate}{" "}
          <br />
          {"End Date: " +
            this.state.selectedProgressData[id].assignenddate}{" "}
          <br />
        </Grid>
      );
    } else {
      return "";
    }
  }

  displayInProgress(currentProgress, maxProgress, progressPercentage, id) {
    if (currentProgress < maxProgress) {
      console.log("displayINPROGRESS props ID:", id);
      this.state.selectedProgressData = getProgressById(
        this.props.match.params.id,
        this.state.progressData
      );

      console.log(
        "getProgressById(this.state.selectedProgressData)",
        this.state.selectedProgressData
      );
      console.log("displayInProgress currentProgress: ", currentProgress);
      console.log("displayInProgress maxProgress: ", maxProgress);

      return (
        <Grid
          container
          spacing={0}
          justify="center"
          alignItems="center"
          style={{
            display: "grid",
            border: "2px solid grey",
            borderRadius: "5px",
          }}
          className="order-body"
        >
          {"Progress: "}
          <div>
            <CircularProgressWithLabel
              variant="determinate"
              value={this.checkIfCompleteDouble(
                -differenceInDays(
                  new Date(this.state.selectedProgressData[id].assignstartdate),
                  new Date()
                ),
                -differenceInDays(
                  new Date(this.state.selectedProgressData[id].assignstartdate),
                  new Date(this.state.selectedProgressData[id].assignenddate)
                )
              )}
            />
          </div>
          {"Title: " + this.state.selectedProgressData[id].title} <br />
          {"Description: " +
            this.state.selectedProgressData[id].description}{" "}
          {
            //"Videos: " + this.state.selectedProgressData[id].checked
          }{" "}
          {
            <ReactPlayer
              controls={true}
              url={this.state.selectedProgressData[id].checked}
              width="400px"
              height="200px"
            />
          }
          {"Start Date: " + this.state.selectedProgressData[id].assignstartdate}{" "}
          <br />
          {"End Date: " +
            this.state.selectedProgressData[id].assignenddate}{" "}
          <br />
        </Grid>
      );
    } else {
      return "";
    }
  }
  checkIfCompleteHelper(currentProgress, maxProgress, progressPercentage) {
    if (currentProgress < maxProgress) {
      this.state.numInProgress++;
      console.log("*** this.state.numInProgress: ", this.state.numInProgress);

      this.state.allCurrentProgress += currentProgress;
      this.state.allMaxProgress += maxProgress;
      this.state.allProgressPercentage =
        (this.state.allCurrentProgress / this.state.allMaxProgress) * 100;
      console.log(
        "FINAL checkIfCompleteHelper allCurrentProgress",
        this.state.allCurrentProgress
      );
      console.log(
        "FINAL checkIfCompleteHelper allMaxProgress",
        this.state.allMaxProgress
      );
      console.log(
        "FINAL checkIfCompleteHelper allProgressPercentage",
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
    }
    if (0 > currentProgress) {
      //this.state.selectedInProgressData.push(0);
      return 0;
    } else {
      //this.state.selectedInProgressData.push(progressPercentage);
      return progressPercentage;
    }
  }

  checkIfCompleteDouble(currentProgress, maxProgress) {
    console.log("what's the issue? currentProgress: ", currentProgress);
    console.log("what's the issue? maxProgress: ", maxProgress);

    if (currentProgress >= maxProgress) {
      return "100";
    }
    if (0 > currentProgress) {
      return "0";
    } else {
      return Math.floor((currentProgress / maxProgress) * 100);
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

  render() {
    console.log("@@@@this.state.progressData: ", this.state.progressData);
    var currentProgress = [];
    var maxProgress = [];
    var progressPercentage = [];
    console.log("currentProgress: ", currentProgress);
    console.log("maxProgress: ", maxProgress);
    console.log("progressPercentage: ", progressPercentage);
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

    getProgressById(this.props.match.params.id, this.state.progressData).map(
      (chosen) => (
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
    );

    getProgressById(
      this.props.match.params.id,
      this.state.progressData
    ).map((chosen, idx) =>
      this.checkIfComplete(
        currentProgress[idx],
        maxProgress[idx],
        progressPercentage[idx]
      )
    );

    getProgressById(
      this.props.match.params.id,
      this.state.progressData
    ).map((chosen, idx) =>
      this.checkIfCompleteHelper(
        currentProgress[idx],
        maxProgress[idx],
        progressPercentage[idx],
        idx
      )
    );

    return (
      //<div className="page-background">
      <div className="page-background">
        <br />
        {/*"Checking database of Assigned Plans: "}
        <TestCheckData />
        <br></br>
        {/* <h1>Progress Report Page</h1> */}

        <br />

        {/*"this.state.selectedInProgressData: " +
          this.state.selectedInProgressData}
        <br />
        {this.state.selectedInProgressData.map(
          (number) => (this.state.calculatedProgressData += number)
        )}
        <br />
        {"this.state.calculatedProgressData: " +
          this.state.calculatedProgressData}
        {"this.state.calculatedProgressData/length*100: " +
          (this.state.finalProgressPercentage =
            (this.state.calculatedProgressData /
              (this.state.selectedInProgressData.length * 100)) *
            100)}

        <br />
        {"this.state.finalProgressPercentage: " +
            this.state.finalProgressPercentage*/}

        <Row>
          <Col>
            {/*}
            {"[FINAL AllCurrentProgress: " +
              this.state.allCurrentProgress +
              "] [FINAL AllMaxProgress: " +
              this.state.allMaxProgress +
              "] [FINAL AllProgressPercentage: " +
              this.state.allProgressPercentage +
              "%.]" +
              " => " +
              this.finalProgressPercentage(this.state.allProgressPercentage) +
              "%."}
            {console.log(
              "!getProgressById(this.props.match.params.id): ",
              getProgressById(
                this.props.match.params.id,
                this.state.progressData
              )
            )}
            {console.log(
              "!!this.props.match.params.id: ",
              this.props.match.params.id
            )*/}

            <ProfileCard
              id={selectedID}
              first_name={selectedFirstName}
              last_name={selectedLastName}
              email={selectedEmail}
              bio={selectedBio}
              Registration_Date={selectedRegistration_Date}
              //progress={this.state.finalProgressPercentage}
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
              cardTitle="In Progress Exercise Assignments"
              cardBody={getProgressById(
                this.props.match.params.id,
                this.state.progressData
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
              cardTitle="Completed Exercise Assignments"
              cardBody={getProgressById(
                this.props.match.params.id,
                this.state.progressData
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
