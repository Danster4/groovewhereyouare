import React from 'react';
import Container from "react-bootstrap/Container";

import AboutCompany from '../../components/AboutCompany';

const Florida = () => {
  return (
    <main>
      <Container className='flex-row justify-space-between '>
        
        <h1 className='text-white'>This is the Florida State page </h1>
        <AboutCompany />
      </Container>
    </main>
  )
  
}
export default Florida;