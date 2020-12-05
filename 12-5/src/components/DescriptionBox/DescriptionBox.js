import React, {Component} from 'react';
import './DescriptionBox.css';
import { Row, Col, Button, Card } from 'react-bootstrap';

export class DescriptionBox extends Component {
    render() {
        return(
            <>
                <Card style={this.props.style} className="DescBox">
                    <div className="DescBoxDiv">
                        {this.props.text}
                    </div>
                    <div className="addDiv">
                        <Button className="addButton" variant="success" >Add To List</Button>
                    </div>
                </Card>
            </>
        );
    }
}