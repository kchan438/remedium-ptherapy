import React, { Component } from "react";
import "../ProgressBox1/ProgressBox2.css";

import { Row, Col, Form, Button, Card } from "react-bootstrap";

export class ProgressBox2 extends Component {
  render() {
    return (
      <>
        <Card style={this.props.style} className="progress-box-2">
          <Card.Title className="card-title2">
            {this.props.cardTitle}
          </Card.Title>
          <Card.Body className="card-body2" style={{ overflow: "auto" }}>
            {this.props.cardBody}
          </Card.Body>
        </Card>
      </>
    );
  }
}
