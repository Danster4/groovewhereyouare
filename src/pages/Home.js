import React from 'react';
import Container from "react-bootstrap/Container";
import { Link } from 'react-router-dom';

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import HeroFrontPage from '../components/HeroFrontPage';
import Map from '../components/Map';
import AboutCompany from '../components/AboutCompany';

const Home = () => {
  return (
    <main>
      <HeroFrontPage />
      <Container className='flex-row justify-space-between '>
        {/* <video autoPlay loop muted className='videoBg'>
          <source src="https://www.youtube.com/watch?v=7jWzXfRBUtU" />
        </video> */}
        <Map />
        <AboutCompany />
        <Link to="/FL">Florida</Link>
      </Container>
    </main>
  )
  
}
export default Home;