import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import {Box} from '../components/Box/Box.js';

function UploadPage(props){

    return(
        <>
            <center>
            <p className="header-text">Uploads</p>
            </center>
            <br></br>
            <Row>
                <Col>
                    <Box style={{width: "82%"}} text="*Video*" />
                </Col>
                <Col>
                    <Box style={{width:"82%", marginRight: "80%"}} text="Can display Body Model here or extend the width of the video"/>
                </Col>
            </Row>
            <br></br>
            <Box style={{width: "91.2%", height: "150px"}} text="Color Pallete Settings" />
            <br></br>
            <Box style={{height: "200px", width: "91.2%"}} text="*Description*" />
            <br></br>
            <div className="uploadButtons">
                <Button variant="danger" size="md">Cancel</Button>
                <Button variant="success" size="md" className="ml-3">Upload</Button>
            </div>
       </>
    );
}

export default UploadPage;