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
        <Map />
        <AboutCompany />
      </Container>
    </main>
  )
  
}
export default Home;