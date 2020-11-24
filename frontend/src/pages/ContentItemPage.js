import React from 'react';
// import './ContentItemPage.css';
import { Row, Col, Button, Form } from 'react-bootstrap';

//Components
import {Box} from '../components/Box/Box.js';

// const fileForm =  () => {
//     <Form>
//         <Form.Group>
//             <Form.File id="exampleFormControlFile1" label="Example file input" />
//         </Form.Group>
//     </Form>
// }

const ContentItemPage = () => {
    return(
        <>
            <br></br>
            <Row>
                <Col>
                    <Box style={{width: "82%"}} text="*Video*" />
                </Col>
                <Col>
                    <Box style={{width:"82%", marginRight: "80%"}} text="*Body Model*"/>
                </Col>
            </Row>
            <br></br>
            <Box style={{height: "200px", width: "91.2%"}} text="*Description*" />
            <br></br>
            <center>
                <Button href="/ItemPage2">Item Page 2</Button>
            </center>
        </>
    );
}


export default ContentItemPage;