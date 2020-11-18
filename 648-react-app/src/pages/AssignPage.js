import React from 'react';
// import '../AssignPage/AssignPage.css';
import { Row, Col, Button, Dropdown, Form} from 'react-bootstrap';

//Components
import {Box} from '../components/Box/Box.js';

const AssignPage = () => {
    return(
        <>
        <Row>
            <Col></Col>
            <Col>
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
                <Form style={{width: "750px", paddingTop: "5px"}}>
                    <Form.Control type="text" placeholder="Search Bar"style={{textAlign: "center"}}/>
                </Form>
            </Col>
            <Col className="mt-2">
                <Button variant="success" style={{paddingBottom: "10px"}}>Search</Button>
            </Col>
        </Row>
        <br></br>
        <Row>
            <Col>
            <Box style={{width: "800px"}} text="*Filter and Search*" />
            </Col>
            <Col>
                <Box style={{height: "500px"}} text="*Description*" />
            </Col>
        </Row>
        <Row>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col>
                <br></br>
                <div style={{marginLeft: "80px"}}>
                    <Button variant="danger" className="ml-5" size="md">Cancel</Button>
                    <Button variant="success" className="ml-2" size="md">Assign</Button>
                </div>
            </Col>
        </Row>
        </>
    )
}

export default AssignPage;