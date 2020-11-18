import React, {Component} from 'react';
import '../ProfileButtons/ProfileButtons.css';
import {Button, ButtonGroup} from 'react-bootstrap';

export class ProfileButtons extends Component {

    render() {
        return(
            <>
            <ButtonGroup size="lg" className="ButtonGroup mb-2">
              <Button href="/assign">Assign</Button>
              <Button>User Content</Button>
              <Button href="/progressreport">Progress Report</Button>
              <Button>Contact</Button>
            </ButtonGroup>
          </>
        );
    }
}