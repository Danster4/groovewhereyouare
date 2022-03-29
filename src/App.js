import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
// import Container from 'react-bootstrap/Container';

import Nav from './components/Nav';
import Footer from './components/Footer';

import Home from './pages/Home';
import NoMatch from './pages/NoMatch';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Nav />
          <div className='container'>
          <Routes>
            <Route exact path="/" element={<Home />} />

            <Route component={NoMatch} />
          </Routes>       
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
    
   
  );
}

export default App;
