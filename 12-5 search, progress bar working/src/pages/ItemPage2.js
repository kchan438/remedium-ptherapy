import React from 'react';
// import '../ItemPage2/ItemPage2.css';
import { Row, Col, Button } from 'react-bootstrap';

//Components
import {Box} from '../components/Box/Box.js';

const ItemPage2 = () => {
    return(
        <>
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
            <Box style={{height: "200px", width: "91.2%"}} text="*Description*" />
        </>
    )
}

export default ItemPage2;