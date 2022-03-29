import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';

import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      
        
       
        <Nav />
        <Button>I am a Bootstrap Button!</Button>
        <Footer />
      
    </div>
  );
}

export default App;
