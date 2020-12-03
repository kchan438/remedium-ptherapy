import React, { Component } from "react";
import "../ProgressBox1/ProgressBox1.css";

import { Row, Col, Form, Button, Card } from "react-bootstrap";

export class ProgressBox1 extends Component {
  render() {
    return (
      <>
        <Card style={this.props.style} className="progress-box-1">
          <Card.Title className="card-title">{this.props.cardTitle}</Card.Title>
          <Card.Body className="card-body" style={{ overflow: "auto" }}>
            {this.props.cardBody}
          </Card.Body>
        </Card>
      </>
    );
  }
}
