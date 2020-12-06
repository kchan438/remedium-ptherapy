import React, { Component } from "react";
import CircularProgressWithLabel from "../MaterialUIcomponents/CircularProgressWithLabel";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Button, ButtonGroup } from "react-bootstrap";

import "../ProfileCard/ProfileCard.css";

import { Card } from "react-bootstrap";
import ReportPageHelper from "../../pages/ReportPageHelper";

export class ProfileCard extends Component {
  quickCheck() {
    console.log("***********************");
    console.log(
      "QUICKCHECK this.props.numInProgress: ",
      this.props.numInProgress
    );
    console.log("QUICKCHECK this.props.first_name: ", this.props.first_name);
    if (this.props.numInProgress === 0) {
      return "Ready To Assign";
    } else {
      return <ReportPageHelper props={this.props} />;
    }
  }

  render() {
    return (
      <>
        <Card
          className="ProfileCard"
          //MODIFY HERE FOR THIS PAGE'S PROFILECARD SIZING/BORDERS/MARGINS
          style={{
            width: "65%",
            marginLeft: "15%",
            height: "80vh",
            marginBottom: "5%",
          }}
        >
          <h3 style={{ textAlign: "center" }}>
            {this.props.id} {this.props.first_name} {this.props.last_name}
          </h3>
          <img
            id="profilepic"
            src={this.props.avatar}
            alt="No display"
            style={{
              maxWidth: "250px",
              maxHeight: "180px",
              borderRadius: "0%",
              marginTop: "20px",
              marginLeft: "25%",
              objectFit: "cover",
              display: "flex",
            }}
          />
          <br></br>
          {/* <p>Full Name</p> */}
          <p>Location: {this.props.location}</p>
          <p>Age: {this.props.age}</p>
          <p>Current Injury Type: {this.props.current_injury_type}</p>
          <div className="align-to-bottom">
            <p>
              Current Progress: <ReportPageHelper id={this.props.id} />
              {/*
            <CircularProgressWithLabel
              variant="determinate"
              value={this.props.progress}
            />
            */}
            </p>
            <Link to={"/patientprofile/" + this.props.id}>
              <Button
                style={{
                  width: "80px", // whatever your button's width
                  margin: "0 auto", // auto left/right margins
                  display: "block",
                  /*
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                */
                }}
              >
                Profile
              </Button>
            </Link>
          </div>
        </Card>
      </>
    );
  }
}
