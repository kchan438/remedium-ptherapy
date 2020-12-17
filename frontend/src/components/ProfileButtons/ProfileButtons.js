import React, { Component } from "react";
import "../ProfileButtons/ProfileButtons.css";
import { Button, ButtonGroup } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import { AboutMe } from "../AboutMe/AboutMe.js";

export class ProfileButtons extends Component {
  constructor(props) {
    super(props);

    console.log("props from profile buttons: ", this.props);
    /*
    this.state = {
      id: this.props.id,
      first_name: this.props.first_name,
      last_name: this.props.last_name,
    };
    */
  }
  render() {
    return (
      <>
        <ButtonGroup size="lg" className="ButtonGroup mb-2">
          <Button
            href={"/patientprofile/" + this.props.id}
            id={this.props.id}
            first_name={this.props.first_name}
            last_name={this.props.last_name}
          >
            About Me
          </Button>
          <Button
            href={"/assign/" + this.props.id}
            id={this.props.id}
            first_name={this.props.first_name}
            last_name={this.props.last_name}
          >
            Assign
          </Button>
          <Button
            href={"/usercontent/" + this.props.id}
            id={this.props.id}
            first_name={this.props.first_name}
            last_name={this.props.last_name}
          >
            User Content
          </Button>
          <Button
            href={"/progressreport/" + this.props.id}
            id={this.props.id}
            first_name={this.props.first_name}
            last_name={this.props.last_name}
          >
            Progress Report
          </Button>

          <Button
            href={"/PTactivity/" + this.props.id}
            id={this.props.id}
            first_name={this.props.first_name}
            last_name={this.props.last_name}
          >
            PT Activity
          </Button>

          {/*"id: " +
            this.props.id +
            "first_name: " +
            this.props.first_name +
            "last_name: " +
            this.props.first_name*/}
        </ButtonGroup>
      </>
    );
  }
}
