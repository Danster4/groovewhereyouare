import React from 'react';
import './App.css';
// import Container from 'react-bootstrap/Container';

import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      
        
       
        <Nav />
        <div className='container'>
          <Home />        
        </div>
        <Footer />
      
    </div>
  );
}

export default App;
