import React from 'react';
import Card from './PingsCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


//image imports, probably won't be done like this in the live version
import icon from '../images(test)/message-icon.png';
import alert from '../images(test)/alert.jpg';

class Carousel extends React.Component{
constructor(props){
    super(props);
    this.state = {
        items: [
            {
            id: 0,
            title: 'Dummy Upload Notification',
            subTitle: 'By: Sender',
            imgSrc: alert,
            selected: true
            },
            {
            id: 1,
            title: 'Dummy Message',
            subTitle: 'From: Sender',
            imgSrc: icon,
            selected: true
            },
        ]
    }
}
/*
handleCardClick(id, card) => {
  //will need this method to go to a card's page  
}
*/

makeItems = (items) => {
    return items.map(item => {
        return <Card item={item}/> //add: onClick={(e => this.handleCardClick(item.id, e))} key={item, id}
    })
}

render(){
    return(
        <Container fluid={true}>
            <Row className="justify-content-around">
                {this.makeItems(this.state.items)}
            </Row>
        </Container>
    );
}
}

export default Carousel;