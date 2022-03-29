import React, { Component } from 'react';
import Container from "react-bootstrap/Container";
import USAMap from 'react-usa-map';

class Map extends Component {

 mapHandler = (event) => {
    alert(event.target.dataset.name)
  }

  render() {
    return (
    <div>
      <Container>
        <USAMap onClick={this.mapHandler} />
      </Container>
    </div>
    )
  }   
}

export default Map;