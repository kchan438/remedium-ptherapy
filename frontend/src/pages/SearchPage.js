import React from 'react';
import { Row, Col, Form, Button, Dropdown} from 'react-bootstrap';
import {ProfileCard} from '../components/ProfileCard/ProfileCard.js';
// import ProfilePage from '../pages/ProfilePage/ProfilePage.js';

const SearchPage = () => {
    return(
        <>
        <Row>
            <Col></Col>
            <Col>
                {/* <Box style={{width: "250px", height: "50px"}} text="Filter" /> */}
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
            {/* <Box style={{width: "750px", height: "50px"}} text="Search Bar" /> */}
                <Form style={{width: "750px", paddingTop: "5px"}}>
                    <Form.Control type="text" placeholder="Search Bar"style={{textAlign: "center"}}/>
                </Form>
            </Col>
            <Col className="mt-2">
                <Button variant="success" style={{paddingBottom: "10px"}}>Search</Button>
            </Col>
        </Row>
        <br></br>

        {/* Here is where we will use rows to add more profile search cards */}
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

export default SearchPage;