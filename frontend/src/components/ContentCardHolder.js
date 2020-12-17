import React from 'react';
import Card from './ContentCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


//image imports, probably won't be done like this in the live version
import leg from '../images(test)/leg.jpg';
import arm from '../images(test)/arm.jpg';
import knee from '../images(test)/knee.jpg';

class Carousel extends React.Component{
constructor(props){
    super(props);
    this.state = {
        items: [
            {
            id: 0,
            title: 'Leg Lifts',
            subTitle: '',
            region: 'Legs, Calves',
            imgSrc: leg,
            selected: true
            },
            {
            id: 1,
            title: 'Arm and Shoulder Stretch',
            subTitle: '',
            region: 'Shoulder, Upper Arms',
            imgSrc: arm,
            selected: true
            },
            {
            id: 2,
            title: 'Knee Mobility Stretch',
            subTitle: '',
            region: 'Knees',
            imgSrc: knee,
            selected: true
            }
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