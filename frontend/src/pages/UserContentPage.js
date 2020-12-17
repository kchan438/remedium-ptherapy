import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PEOPLE_MOCK_DATA from "../components/PEOPLE_MOCK_DATA";
import USER_UPLOAD_CONTENT from "../components/USER_UPLOAD_CONTENT";
import PATIENT_PROGRESS from "../components/PATIENT_PROGRESS";
import { differenceInDays } from "date-fns";
import ReportPageHelper from "./ReportPageHelper";
import "../pages/PageStyle.css";

import ReactPlayer from "react-player";
import Grid from "@material-ui/core/Grid";

import { Row, Col, Button } from "react-bootstrap";

//Components
import { ProfileCard } from "../components/ProfileCard/ProfileCard.js";
import { ProfileButtons } from "../components/ProfileButtons/ProfileButtons.js";
import { AboutMe } from "../components/AboutMe/AboutMe.js";
import axios from "axios";

//var data = PEOPLE_MOCK_DATA;
var userUploadContent = USER_UPLOAD_CONTENT;
var progressdata = PATIENT_PROGRESS;
//console.log("Checking data: ", data);

const getPatientById = (id, patients) => {
  console.log("999CHECKING patients: ", patients);
  return patients.filter((patient) => {
    return patient.User_ID.toString() === id;
  });
};

const getContentById = (id, videoContent) => {
  console.log("!id!:", id);
  console.log("!videoContent!:", videoContent);

  return videoContent.filter((patient) => {
    console.log("!patient.uploaderID!:", patient.uploaderID);
    return patient.uploaderID.toString() === id;
  });
};

const getProgressById = (id) => {
  return progressdata.filter((patient) => {
    return patient.id.toString() === id;
  });
};

class UserContentPage extends Component {
  constructor(props) {
    super(props);
    console.log("props from patientProfile page", this.props);
    //const patient = getPatientById(this.props.match.params.id);
    //const userUploadContent = getContentById(this.props.match.params.id);
    const progress = getProgressById(this.props.match.params.id);
    /*
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
    

    let contentId = "not found";
    let contentVideo = "not found";

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

      contentId = userUploadContent[0].id;
      contentVideo = userUploadContent[0].uploadVideo;

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

      cid: contentId,
      cvideo: contentVideo,

      pid: progressId,
      pcompleted: progressCompleted,
      pstartdate: progressAssignStartDate,
      penddate: progressAssignEndDate,
      
    };
    */
    this.state = {
      currentId: 0,
      link: "",
      getVideos: [],
      currentPatients: [],
    };
  }
  componentDidMount() {
    axios.get("/getVideos").then((res) => {
      console.log("/getVideos res:", res);
      console.log(
        "/getVideos  res.data.data.getVideos:",
        res.data.data.getVideos
      );

      this.setState({ getVideos: res.data.data.getVideos });
      console.log(
        "CONTINUED/getVideos  this.state.getVideos:",
        this.state.getVideos
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

  mySubmitHandler = (event) => {
    //event.preventDefault();
    alert("You are submitting " + this.state.link);
    axios
      .post("/postVideo", {
        id: this.state.currentId,
        uploadVideo: this.state.link,
        uploadDate: new Date(),
      })
      .then((response) => {
        console.log("onSubmit response: ", response);
      })
      .catch((error) => {
        console.log("onSubmit error: ", error);
      });
  };

  myChangeHandler = (event) => {
    this.setState({ link: event.target.value });
  };

  scrollableContent() {}

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
        this.state.currentId = selectedID;
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
              /*
              progress={this.checkIfComplete(
                currentProgress,
                maxProgress,
                progressPercentage
              )}
              avatar={this.state.avatar}
              */
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
              /*
              progress={this.state.progress}
              avatar={this.state.avatar}
              */
            />
            <AboutMe
              style={{ overflow: "auto" }}
              info={
                <Grid style={{ height: "740px", overflow: "auto" }}>
                  {getContentById(
                    this.props.match.params.id,
                    this.state.getVideos
                  ).map((value, idx) => (
                    <Grid>
                      User Upload Content : {idx + 1}
                      <br />
                      Upload date: {value.uploadDate}
                      <ReactPlayer
                        controls={true}
                        url={value.urlLocation}
                        width="400px"
                        height="200px"
                      />
                    </Grid>
                  ))}
                </Grid>
              }
            />
            <form onSubmit={this.mySubmitHandler}>
              <br />
              <br />

              <h3 style={{ color: "Silver" }}>
                Input youtube link then submit to upload:
              </h3>
              <input type="text" onChange={this.myChangeHandler} />
              <input type="submit" />
            </form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withRouter(UserContentPage);
