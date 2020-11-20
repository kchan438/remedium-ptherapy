import React, {Component} from 'react';
import '../AboutMe/AboutMe.css';

import { Card } from 'react-bootstrap';

export class AboutMe extends Component {

    render() {
        return(
          <>
            <Card className="AboutMe">
              <div className="AboutMeDiv">
                {this.props.info}
              </div>
            </Card>
          </>
        );
    }
}