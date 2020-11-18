import React from 'react';

import {Row, Col, Button} from 'react-bootstrap';

import {ProfileCard} from '../components/ProfileCard/ProfileCard.js';
import {ProgressBox1} from '../components/ProgressBox1/ProgressBox1.js';

const ReportPage = () => {
    return(
        <>
            <h1>Progress Report Page</h1>
            <Row>
              <Col>
                <ProfileCard style={{width: "350px", height: "550px"}} />
              </Col>
              <Col>
                <ProgressBox1 
                  cardTitle="Overall Progress"
                  cardBody="*# of Completed exercises / # of total exercises / Progress Bar on Completion*" 
                  />
                <ProgressBox1 
                  cardTitle="Completed Exercises" 
                  cardBody="*Exercise result item in this box will be scrollable*"/>
                <ProgressBox1 
                  cardTitle="Excerises In Progress"
                  cardBody="*Various exercise result items this box will be scrollable*"/>
              </Col>
            </Row>
        </>
    );
}

export default ReportPage;