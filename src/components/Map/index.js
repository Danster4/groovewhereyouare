import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import USAMap from 'react-usa-map';

import Florida from '../../pages/statePages/Florida';



class Map extends Component {

 mapHandler = (event) => {
    alert(event.target.dataset.name);
};

  statesCustomConfig = () => {
    return {
      "FL": {
        clickHandler: (event) => 
        alert(event.target.dataset.name)
        // <Link to="/FL">Florida</Link>
     
      },
      "NY": {
        fill: "#CC0000"
      }
    };
  };

  render() {
    return (
    <div>
      <Container fluid>
        <section>
          <h1 className="text-white">
            Film Your Home.
          </h1>
        </section>

        <USAMap customize={this.statesCustomConfig()} onClick={this.mapHandler} />
      </Container>
    </div>
    )
  }   
}

export default Map;