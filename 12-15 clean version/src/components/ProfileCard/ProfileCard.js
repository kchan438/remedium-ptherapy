import React, { Component } from "react";
import CircularProgressWithLabel from "../MaterialUIcomponents/CircularProgressWithLabel";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Button, ButtonGroup } from "react-bootstrap";

import "../ProfileCard/ProfileCard.css";

import { Card } from "react-bootstrap";
import ReportPageHelper from "../../pages/ReportPageHelper";

export class ProfileCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      first_name: this.props.first_name,
      last_name: this.props.last_name,
      email: this.props.email,
      avatar: this.props.avatar,
      bio: this.props.bio,
      Registration_Date: this.props.Registration_Date,
    };
  }
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
    console.log("props from ProfileCard", this.props);
    console.log("props from ProfileCard", this.state.id);
    console.log("props from ProfileCard", this.state.first_name);
    console.log("props from ProfileCard", this.state.last_name);

    console.log("props from ProfileCard", this.state.email);

    console.log("props from ProfileCard", this.state.avatar);
    console.log("props from ProfileCard", this.state.bio);
    console.log("props from ProfileCard", this.state.Registration_Date);

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
            src="https://fertilitynetworkuk.org/wp-content/uploads/2017/01/Facebook-no-profile-picture-icon-620x389.jpg"
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
          <p>email: {this.props.email}</p>
          <div className="align-to-bottom">
            <p>
              Exercise Summary: <ReportPageHelper id={this.props.id} />
              {/*
            <CircularProgressWithLabel
              variant="determinate"
              value={this.props.progress}
            />
            */}
            </p>
            <Link
              to={"/patientprofile/" + this.props.id}
              id={this.state.id}
              first_name={this.state.first_name}
              last_name={this.state.last_name}
            >
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
