import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import style from './App.css';

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
import PatientProfilePage from './pages/PatientProfilePage.js';
import AssignPage from './pages/AssignPage.js';
import ReportPage from './pages/ReportPage.js';
import SearchPage from './pages/SearchPage.js';
import ContentItemPage from './pages/ContentItemPage.js';
import ItemPage2 from './pages/ItemPage2.js';
import ContactPage from './pages/ContactPage.js';



class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      title: 'Remedium',
      headerLinks: [
        {title: 'Home', path: '/home'},
        {title: 'My Patients', path: '/mypatients'},
        {title: 'Upload', path: '/upload'},
        {title: 'Pings', path: '/pings'},
        {title: 'My Content', path: '/content'},
        {title: 'Profile', path: '/profile'},
        {title: 'login', path: '/login'},
        {title: 'register', path: '/register'},
        {title: 'patientProfile', path: '/patientProfile'},
        {title: 'assign', path: '/assign'},
        {title: 'report', path: '/progressreport'},
        {title: 'contentitem', path: '/contentitem'},
        {title: 'itempage2', path: '/itempage2'},
        {title: 'contact', path: '/contact'}
      ],
      home: {
        title: 'Home Page'
      },
      patients: {
        title: 'Patients Page'
      },
      upload: {
        title: 'Uploads Page'
      },
      pings: {
        title: 'Notification (Ping) Page'
      },
      content: {
        title: 'Content Repository'
      },
      profile: {
        title: 'Profile Page'
      },
      login: {
        title: 'Login Page'
      },
      register: {
        title: 'Register Page'
      },
      patientProfile: {
        title: 'Patient Profile Page'
      },
      assign: {
        title: 'Assign Content Page'
      },
      report: {
        title: 'Progress Report Page'
      },
      search: {
        title: 'Search Page'
      },
      contentItem: {
        title: 'Content Item Page'
      },
      item2: {
        title: 'Content Item Page'
      },
      contact: {
        title: 'Contact Page'
      }
      
    }
  }

  render(){

    return(
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="App-header">
            <Navbar.Brand>Remedium</Navbar.Brand>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="center">
                <Link className="nav-link" to="/home">Home</Link>
                <Link className="nav-link" to="/mypatients">Patients</Link>
                <Link className="nav-link" to="/upload">Upload</Link>
                <Link className="nav-link" to="/pings">Pings</Link>
                <Link className="nav-link" to="/content">Content</Link>
                <Link className="nav-link" to="/profile">Profile</Link>
                <Link className="nav-link" to="/login">Login</Link>
                <Link className="nav-link" to="/register">Register</Link>
                <Link className="nav-link" to="/patientprofile">Patient Profile</Link>
                {/* <Link className="nav-link" to="/assign">Assign Content</Link> */}
                <Link className="nav-link" to="/search">Search</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route exact path="/" component = {SAMPLE_LOGIN_PAGE}/>
            <Route exact path="/home:roomId" component={HomePage} />
          </Switch>
          <Route path="/mypatients" render={() => <PatientsPage title={this.state.patients.title}/> }/>
          <Route path="/upload" render={() => <UploadPage title={this.state.upload.title}/> }/>
          <Route path="/pings" render={() => <PingsPage title={this.state.pings.title}/> }/>
          <Route path="/content" render={() => <ContentPage title={this.state.content.title}/> }/>
          <Route path="/profile" render={() => <ProfilePage title={this.state.profile.title}/> }/>
          <Route path='/login' render={() => <LoginPage title={this.state.login.title}/> }/>
          <Route path='/register' render={() => <RegisterPage title={this.state.register.title}/> }/>
          <Route path='/patientprofile' render={() => <PatientProfilePage title={this.state.patientProfile.title}/> }/>
          <Route path='/assign' render={() => <AssignPage title={this.state.assign.title}/> }/>
          <Route path='/progressreport' render={() => <ReportPage title={this.state.report.title}/> }/>
          <Route path='/search' render={() => <SearchPage title={this.state.search.title}/> }/>
          <Route path='/contentitem' render={() => <ContentItemPage title={this.state.contentItem.title}/> }/>
          <Route path='/itempage2' render={() => <ItemPage2 title={this.state.item2.title}/> }/>
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title}/> }/>
        </Container>
      </Router>
    );
  }
}

export default App;
