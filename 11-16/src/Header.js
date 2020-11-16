import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Header extends Component {
  handleClickHome = () => {
    this.props.history.push("/");
  };
  handleClickMyPatients = () => {
    this.props.history.push("/mypatients");
  };
  handleClickUploadContent = () => {
    this.props.history.push("/uploadcontent");
  };
  handleClickNotifications = () => {
    this.props.history.push("/notifications");
  };
  handleClickLoginRegister = () => {
    this.props.history.push("/loginregister");
  };
  handleClickProfile = () => {
    this.props.history.push("/profile");
  };

  render() {
    return (
      <div>
        <h2> This is our Header! </h2>
        <button onClick={this.handleClickHome}>Home</button>
        <button onClick={this.handleClickMyPatients}>My Patients</button>
        <button onClick={this.handleClickUploadContent}>Upload Content</button>
        <button onClick={this.handleClickNotifications}>Notifications</button>
        <button onClick={this.handleClickLoginRegister}>Login/Register</button>
        <button onClick={this.handleClickProfile}>Profie</button>
      </div>
    );
  }
}
export default withRouter(Header);
