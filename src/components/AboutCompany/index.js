import React from 'react';
import Container from 'react-bootstrap/Container';

const AboutCompany = () => {
  return (
    <Container className='mt-5 aboutCompany'>
      <h2 className='text-white'>About the GWYA Project</h2>
      <p className='text-white'>
        The Row lets you specify column widths across 6 breakpoint sizes (xs, sm, md, lg, xl and xxl). For every breakpoint, you can specify the amount of columns that will fit next to each other. You can also specify auto to set the columns to their natural widths.
      </p>
    </Container>
  )

}


export default AboutCompany;