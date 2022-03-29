import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Map from '../components/Map';
import AboutCompany from '../components/AboutCompany';

const Home = () => {
  return (
    <main>
      <Container className='flex-row justify-space-between '>
        <video autoPlay loop muted className='videoBg'>
          <source src="https://www.youtube.com/watch?v=7jWzXfRBUtU" />
        </video>
        <Map />
        <AboutCompany />
      </Container>
    </main>
  )
  
}
export default Home;