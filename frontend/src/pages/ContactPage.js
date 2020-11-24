import React from 'react';
import {Col, Row} from 'react-bootstrap';
import {ProfileCard} from '../components/ProfileCard/ProfileCard.js';
import {AboutMe} from '../components/AboutMe/AboutMe.js';
import {ProfileButtons} from '../components/ProfileButtons/ProfileButtons.js';


const ContactPage = () => {
        return(
            <>
                <Row>
                <Col>
                    <br></br>
                    <ProfileCard />
                </Col><Col>
                <br></br>
                    <ProfileButtons />
                    <AboutMe info="This is the contact section." />
                </Col>
                </Row>
          </>
        );
}

export default ContactPage;