import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import style from "./App.css";

import SAMPLE_LOGIN_PAGE from "./pages/SAMPLE_LOGIN_PAGE";
import HomePage from "./pages/HomePage.js";
import ContentPage from "./pages/ContentPage.js";
import ProfilePage from "./pages/ProfilePage.js";
import PingsPage from "./pages/PingsPage.js";
import PatientsPage from "./pages/PatientsPage.js";
import UploadPage from "./pages/UploadPage.js";
//Kolapo's Pages
import LoginPage from "./pages/LoginPage.js";
import RegisterPage from "./pages/RegisterPage.js";
//Kevin's Pages
import PatientProfilePage from "./pages/PatientProfilePage.js";
import AssignPage from "./pages/AssignPage.js";
import ReportPage from "./pages/ReportPage.js";
import SearchPage from "./pages/SearchPage.js";
import ContentItemPage from "./pages/ContentItemPage.js";
import ItemPage2 from "./pages/ItemPage2.js";
import PTactivityPage from "./pages/PTactivityPage.js";
import UserContentPage from "./pages/UserContentPage.js";
import UploadVideoPage from "./pages/UploadVideoPage.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Remedium",
      headerLinks: [
        { title: "Home", path: "/home" },
        { title: "My Patients", path: "/mypatients" },
        { title: "Upload", path: "/upload" },
        { title: "Pings", path: "/pings" },
        { title: "My Content", path: "/content" },
        { title: "Profile", path: "/profile" },
        { title: "login", path: "/login" },
        { title: "register", path: "/register" },
        { title: "patientProfile", path: "/patientProfile" },
        { title: "assign", path: "/assign" },
        { title: "report", path: "/progressreport" },
        { title: "contentitem", path: "/contentitem" },
        { title: "itempage2", path: "/itempage2" },
        { title: "PTactivity", path: "/PTactivity" },
        { title: "usercontent", path: "/usercontent" },
        { title: "uploadvideo", path: "/uploadvideo" },
      ],
      home: {
        title: "Home Page",
      },
      patients: {
        title: "Patients Page",
      },
      upload: {
        title: "Uploads Page",
      },
      pings: {
        title: "Notification (Ping) Page",
      },
      content: {
        title: "Content Repository",
      },
      profile: {
        title: "Profile Page",
      },
      login: {
        title: "Login Page",
      },
      register: {
        title: "Register Page",
      },
      patientProfile: {
        title: "Patient Profile Page",
      },
      assign: {
        title: "Assign Content Page",
      },
      report: {
        title: "Progress Report Page",
      },
      search: {
        title: "Search Page",
      },
      contentItem: {
        title: "Content Item Page",
      },
      item2: {
        title: "Content Item Page",
      },
      PTactivity: {
        title: "PTactivity Page",
      },
      userContent: {
        title: "User Content Page",
      },
      uploadVideo: {
        title: "Upload Video Page",
      },
    };
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="App-header">
            <div className="logo">Remedium</div>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="center">
                <Link className="navbar-button" to="/home">
                  Home
                </Link>
                <Link className="navbar-button" to="/mypatients">
                  Patients
                </Link>
                <Link className="navbar-button" to="/upload">
                  Upload
                </Link>
                <Link className="navbar-button" to="/pings">
                  Pings
                </Link>
                <Link className="navbar-button" to="/content">
                  Content
                </Link>
                <Link className="navbar-button" to="/profile">
                  Profile
                </Link>
                <Link className="navbar-button" to="/login">
                  Login
                </Link>
                <Link className="navbar-button" to="/register">
                  Register
                </Link>
                <Link className="navbar-button" to="/patientprofile">
                  Patient Profile
                </Link>
                {/* <Link className="navbar-button" to="/assign">Assign Content</Link> */}
                <Link className="navbar-button" to="/search">
                  Search
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route exact path="/" component={SAMPLE_LOGIN_PAGE} />
            <Route exact path="/home" component={SAMPLE_LOGIN_PAGE} />
            <Route exact path="/home:roomId" component={HomePage} />
          </Switch>
          <Route
            exact
            path="/mypatients"
            render={() => <PatientsPage title={this.state.patients.title} />}
          />
          <Route
            exact
            path="/upload"
            render={() => <UploadPage title={this.state.upload.title} />}
          />
          <Route
            exact
            path="/pings"
            render={() => <PingsPage title={this.state.pings.title} />}
          />
          <Route
            exact
            path="/content"
            render={() => <ContentPage title={this.state.content.title} />}
          />
          <Route
            exact
            path="/profile"
            render={() => <ProfilePage title={this.state.profile.title} />}
          />
          <Route
            exact
            path="/login"
            render={() => <LoginPage title={this.state.login.title} />}
          />
          <Route
            exact
            path="/register"
            render={() => <RegisterPage title={this.state.register.title} />}
          />
          <Route
            exact
            path="/patientprofile"
            render={() => (
              <PatientProfilePage title={this.state.patientProfile.title} />
            )}
          />
          <Route
            path="/patientprofile/:id"
            render={() => (
              <PatientProfilePage title={this.state.patientProfile.title} />
            )}
          />

          <Route
            exact
            path="/assign"
            render={() => <AssignPage title={this.state.assign.title} />}
          />
          <Route
            path="/assign/:id"
            render={() => <AssignPage title={this.state.assign.title} />}
          />
          <Route
            exact
            path="/progressreport"
            render={() => <ReportPage title={this.state.report.title} />}
          />
          <Route
            path="/progressreport/:id"
            render={() => <ReportPage title={this.state.report.title} />}
          />
          <Route
            exact
            path="/search"
            render={() => <SearchPage title={this.state.search.title} />}
          />

          <Route
            exact
            path="/contentitem"
            render={() => (
              <ContentItemPage title={this.state.contentItem.title} />
            )}
          />
          <Route
            path="/contentitem/:id"
            render={() => (
              <ContentItemPage title={this.state.contentItem.title} />
            )}
          />
          <Route
            exact
            path="/itempage2"
            render={() => <ItemPage2 title={this.state.item2.title} />}
          />
          <Route
            path="/itempage2/:id"
            render={() => <ItemPage2 title={this.state.item2.title} />}
          />
          <Route
            exact
            path="/PTactivity"
            render={() => (
              <PTactivityPage title={this.state.PTactivity.title} />
            )}
          />
          <Route
            path="/PTactivity/:id"
            render={() => (
              <PTactivityPage title={this.state.PTactivity.title} />
            )}
          />
          <Route
            exact
            path="/usercontent/"
            render={() => (
              <UserContentPage title={this.state.userContent.title} />
            )}
          />
          <Route
            path="/usercontent/:id"
            render={() => (
              <UserContentPage title={this.state.userContent.title} />
            )}
          />
          <Route
            exact
            path="/uploadvideo/"
            render={() => (
              <UploadVideoPage title={this.state.uploadVideo.title} />
            )}
          />
          <Route
            path="/uploadvideo/:id"
            render={() => (
              <UploadVideoPage title={this.state.uploadVideo.title} />
            )}
          />
        </Container>
      </Router>
    );
  }
}

export default App;
