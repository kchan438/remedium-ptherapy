import React from 'react';

import { Row, Col, Button } from 'react-bootstrap';

//Components
import {ProfileCard} from '../components/ProfileCard/ProfileCard.js';
import {ProfileButtons} from '../components/ProfileButtons/ProfileButtons.js';
import {AboutMe} from '../components/AboutMe/AboutMe.js';

const PatientProfilePage = () => {
    return(
          <>
            <Row>
              <Col>
                <br></br>
                <ProfileCard />
              </Col><Col>
              <br></br>
                <ProfileButtons />
                <AboutMe info="This is the about me section." />
              </Col>
            </Row>
          </>
    );
}

export default PatientProfilePage;