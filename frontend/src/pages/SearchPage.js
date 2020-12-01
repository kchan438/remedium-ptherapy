import React, { useMemo, useState, useEffect } from "react";
import { Row, Col, Form, Button, Dropdown } from "react-bootstrap";
import { ProfileCard } from "../components/ProfileCard/ProfileCard.js";
// import ProfilePage from '../pages/ProfilePage/ProfilePage.js';
import PEOPLE_MOCK_DATA from "../components/PEOPLE_MOCK_DATA";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import "../pages/PageStyle.css";

function SearchPage() {
  const patients = PEOPLE_MOCK_DATA;
  const [search, setSearch] = useState("");
  const [filteredFirstName, setFilteredFirstName] = useState([]);
  const [filteredLastName, setFilteredLastName] = useState([]);

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

  const patientDetail = (props) => {
    const { name, flag } = props;
    return (
      <>
        <p>
          <img
            src={flag}
            alt={name}
            style={{ width: "20px", height: "20px" }}
          />
        </p>
        <p>{name}</p>
      </>
    );
  };

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
              <ProfileCard
                id={patient.id}
                first_name={patient.first_name}
                last_name={patient.last_name}
                age={patient.age}
                location={patient.location}
                current_injury_type={patient.current_injury_type}
                progress={patient.progress}
                avatar={patient.avatar}
                bio={patient.bio}
                //style={{ width: "250px", height: "400px" }}
              />
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

export default SearchPage;
