import React, {Component} from 'react';
import '../ProfileCard/ProfileCard.css';

import { Card } from 'react-bootstrap';

export class ProfileCard extends Component {
    render() {
        return(
            <>
            <Card className="ProfileCard" style={this.props.style}>
                <h2>Full Name Here</h2>
                <img id="profilepic" src="https://fertilitynetworkuk.org/wp-content/uploads/2017/01/Facebook-no-profile-picture-icon-620x389.jpg" alt="No display" />
                <br></br>
                {/* <p>Full Name</p> */}
                <p>Location: SF, CA</p>
                <p>Age: 15</p>
                <p>Current Injury Type: </p>
          </Card>
          </>
        );
    }
}