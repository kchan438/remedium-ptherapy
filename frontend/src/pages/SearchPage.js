import React, { useMemo, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Row, Col, Form, Button, Dropdown } from "react-bootstrap";
import { ProfileCard } from "../components/ProfileCard/ProfileCard.js";
// import ProfilePage from '../pages/ProfilePage/ProfilePage.js';
import PEOPLE_MOCK_DATA from "../components/PEOPLE_MOCK_DATA";
import PATIENT_PROGRESS from "../components/PATIENT_PROGRESS";
import { differenceInDays } from "date-fns";
import ReportPageHelper from "./ReportPageHelper";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "../pages/PageStyle.css";

function SearchPage() {
  const patients = PEOPLE_MOCK_DATA;
  const progressdata = PATIENT_PROGRESS;
  console.log("progressdata", progressdata);
  console.log("progressdata[0]", progressdata[0]);
  console.log("progressdata[0].id", progressdata[0].id);
  console.log("progressdata[0].assignenddate", progressdata[0].assignenddate);

  const [search, setSearch] = useState("");
  const [filteredFirstName, setFilteredFirstName] = useState([]);
  const [filteredLastName, setFilteredLastName] = useState([]);

  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    setFilteredFirstName(
      patients.filter((patient) =>
        patient.first_name.toLowerCase().includes(search.toLowerCase())
      )
    );
    setFilteredLastName(
      patients.filter((patient) =>
        patient.last_name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, patients]);

  const currentProgress = (props) => {
    return Math.abs(
      differenceInDays(
        new Date(progressdata[props].assignstartdate),
        new Date()
      )
    );
  };
  const maxProgress = (props) => {
    return Math.abs(
      differenceInDays(
        new Date(progressdata[props].assignstartdate),
        new Date(progressdata[props].assignenddate)
      )
    );
  };
  const progressPercentage = (props) => {
    return Math.floor(
      (Math.abs(
        differenceInDays(
          new Date(progressdata[props].assignstartdate),
          new Date()
        )
      ) /
        Math.abs(
          differenceInDays(
            new Date(progressdata[props].assignstartdate),
            new Date(progressdata[props].assignenddate)
          )
        )) *
        100
    );
  };

  const checkProgressId = (props) => {
    console.log(props);

    if (currentProgress(props) >= maxProgress(props)) {
      return "100";
    } else {
      return progressPercentage(props);
    }
  };
  /*
  const handleCallback = (childValue) => {
    setState(childValue);
  };
  */

  return (
    <div className="page-background">
      <div className="App">
        <h1>My Patients</h1>
        <p></p>
        <input
          type="text"
          placeholder="Search patient"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Row xs="1" sm="2" md="4" className="">
          {filteredFirstName.map((patient, idx) => (
            <div>
              {
                //get progress value then call circularprogress component
              }
              {/*
                <ReportPageHelper
                  props={patient}
                  value={progressValue}
                  onChangeValue={this.handleCallback}
                />
              }
              {console.log(
                "<ReportPageHelper props={patient} />: ",
                <ReportPageHelper
                  props={patient}
                  value={progressValue}
                  onChangeValue={this.handleCallback}
                />
              )
              */}

              {
                <ProfileCard
                  id={patient.id}
                  first_name={patient.first_name}
                  last_name={patient.last_name}
                  age={patient.age}
                  location={patient.location}
                  current_injury_type={patient.current_injury_type}
                  progress={checkProgressId(patient.id - 1)}
                  avatar={patient.avatar}
                  bio={patient.bio}
                  //style={{ width: "250px", height: "400px" }}
                />
              }
            </div>
          ))}
        </Row>
      </div>
    </div>
  );
}
/*
const SearchPage = () => {
    return(
       
        <>
        <Row>
            <Col></Col>
            <Col>
                {/* <Box style={{width: "250px", height: "50px"}} text="Filter" /> }
                <Dropdown className="mt-2">
                    <Dropdown.Toggle variant="info" id="dropdown-basic">
                        Search Filter
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="mt-2">
                        <Dropdown.Item href="#/action-1">User</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Therapist</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Content</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Col>
            <Col className="mt-1">
            {/* <Box style={{width: "750px", height: "50px"}} text="Search Bar" /> }
                <Form style={{width: "750px", paddingTop: "5px"}}>
                    <Form.Control type="text" placeholder="Search Bar"style={{textAlign: "center"}}/>
                </Form>
            </Col>
            <Col className="mt-2">
                <Button variant="success" style={{paddingBottom: "10px"}}>Search</Button>
            </Col>
        </Row>
        <br></br>

        {/* Here is where we will use rows to add more profile search cards }
        <Row xs="1" sm="2" md="4" className="">
            <ProfileCard style={{width: "250px", height: "400px"}}/>
            <ProfileCard style={{width: "250px", height: "400px"}}/>
            <ProfileCard style={{width: "250px", height: "400px"}}/>
            <ProfileCard style={{width: "250px", height: "400px"}}/>
            <ProfileCard style={{width: "250px", height: "400px"}}/>
        </Row>
    </>
   
    );
    
}
 */

export default withRouter(SearchPage);
