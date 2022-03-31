import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import USAMap from 'react-usa-map';
import AboutUs from '../../pages/AboutUs';

import Florida from '../../pages/statePages/Florida';



class Map extends Component {

  mapHandler = (event) => {
    return(
    <Navigate exact path="/about-us" element={<AboutUs />} />

      // alert(event.target.dataset.name + " this is florida")
    )
    
};

//  mapHandler = (event) => {
//   const name = event.target.dataset.name;
//   return (
//     <Navigate exact path="/about-us" element={<AboutUs />} />
//     // alert(event.target.dataset.name + " this is florida")
//     // <Router>
//     //   <Routes>
//     //     <Navigate exact path="/about-us" element={<AboutUs />} />
//     //   </Routes>
//     // </Router>
   
//   )
// };

//   statesCustomConfig = () => {
//     return {
//       "FL": {
//         clickHandler: (event) => {
//           <Navigate push to="/about-us"/>
// //  <Router>
// //        <Routes>
// //        <Navigate exact path="/about-us" element={<AboutUs />} />
// //       </Routes>
// //     </Router>
//           // alert(event.target.dataset.name + " this is florida")
//           // <Navigate to="/FL" replace={true} />

//         }
       
//         // <Link to="/FL">Florida</Link>
     
//       },
//       "NY": {
//         fill: "#CC0000"
//       }
//     };
//   };

  render() {
    return (
    <div>
      <Container fluid>
        <section>
          <h1 className="">
            Film Your Home.
          </h1>
        </section>

        <USAMap onClick={this.mapHandler} />
      </Container>
    </div>
    )
  }   
}

// onClick={this.mapHandler}
// customize={this.statesCustomConfig()}

export default Map;