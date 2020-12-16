import React, {Component} from 'react';
// import '../Box/Box.css';
import '../Box/Box.css';

import { Card, Form, Button } from 'react-bootstrap';

export class Box extends Component {

    render() {
        return(
            <Card style={this.props.style} className="Box">
              <div className="BoxDiv">
                {this.props.text}
              </div>
              {this.props.fileForm}
          </Card>
        );
    }
}