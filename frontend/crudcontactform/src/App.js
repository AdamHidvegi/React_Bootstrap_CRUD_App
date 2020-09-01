import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Home from './components/Home';
import ClientList from './components/ClientList';
import ContactForm from './components/ContactForm';

export default function App() {

  const [clients, setClients] = useState([])

  useEffect(() => {
    const getClients = () => {
      fetch('/api/clients')
      .then(res => res.json())
      .then(data => setClients(data._embedded.clients));
    };
    getClients();
  }, []);

  return(
    <Container fluid>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/new-contact'>
            <ContactForm />
          </Route>
          <Route exact path='/list-of-contacts'>
            <ClientList clients={clients} />
          </Route>
        </Switch>
      </Router>
    </Container>
  )

}
