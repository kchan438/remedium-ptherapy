import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import style from './App.css';

//Spencer's Pages
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


class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      title: 'Remedium',
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'My Patients', path: '/mypatients'},
        {title: 'Upload', path: '/upload'},
        {title: 'Pings', path: '/pings'},
        {title: 'My Content', path: '/content'},
        {title: 'Profile', path: '/profile'},
        {title: 'login', path: '/login'},
        {title: 'register', path: '/register'},
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
        title: 'Profile Page'
      },
      register: {
        title: 'Profile Page'
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
              <Nav classname="center">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/mypatients">Patients</Link>
                <Link className="nav-link" to="/upload">Upload</Link>
                <Link className="nav-link" to="/pings">Pings</Link>
                <Link className="nav-link" to="/content">Content</Link>
                <Link className="nav-link" to="/profile">Profile</Link>
                <Link className="nav-link" to="/login">Login</Link>
                <Link className="nav-link" to="/register">Register</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text}/>} />
          <Route path="/mypatients" render={() => <PatientsPage title={this.state.patients.title}/> }/>
          <Route path="/upload" render={() => <UploadPage title={this.state.upload.title}/> }/>
          <Route path="/pings" render={() => <PingsPage title={this.state.pings.title}/> }/>
          <Route path="/content" render={() => <ContentPage title={this.state.content.title}/> }/>
          <Route path="/profile" render={() => <ProfilePage title={this.state.profile.title}/> }/>
          <Route path='/login' render={() => <LoginPage title={this.state.login.title}/> }/>
          <Route path='/register' render={() => <RegisterPage title={this.state.register.title}/> }/>
        </Container>
      </Router>
    );
  }
}

export default App;
