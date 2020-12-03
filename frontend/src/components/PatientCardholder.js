import React from "react";
import Card from "./PatientCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

//image imports, probably won't be done like this in the live version
import todd from "../images(test)/todd.jpg";
import skyrim from "../images(test)/skyrim.jpg";
import bigsmoke from "../images(test)/bigsmoke.jpg";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Todd Howard",
          age: "Age: 49",
          subTitle: "Developer for Bethesda, Creator of Skyrim",
          percentFinished: "75% FINISHED",
          imgSrc: todd,
          selected: true,
        },
        {
          id: 1,
          title: "Skyrim Elderscroll",
          age: "Age: 5000",
          subTitle: "Son of Todd, Prodigal Son",
          percentFinished: "55% FINISHED",
          imgSrc: skyrim,
          selected: true,
        },
        {
          id: 2,
          title: "Big Smoke",
          age: "Age: 27",
          subTitle: "Absolute Unit, Professional Large Man",
          percentFinished: "15% FINISHED",
          imgSrc: bigsmoke,
          selected: true,
        },
      ],
    };
  }
  /*
handleCardClick(id, card) => {
  //will need this method to go to a card's page  
}
*/

  makeItems = (items) => {
    return items.map((item) => {
      return <Card item={item} />; //add: onClick={(e => this.handleCardClick(item.id, e))} key={item, id}
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
