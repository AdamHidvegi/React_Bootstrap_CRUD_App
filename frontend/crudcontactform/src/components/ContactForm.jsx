import React from 'react';
import Request from '../helpers/request';
import Button from 'react-bootstrap/button';
import Form from 'react-bootstrap/Form'

export default function ContactForm() {

  function handleSignUp(client) {
    const request = new Request();
    const clients_url = '/api/clients';
    request.post(clients_url, client)
    .then(() => {
      console.log(client);
      window.location = '/list-of-contacts'
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    const client = {
      "name": event.target.name.value,
      "email": event.target.email.value,
      "phone_number": event.target.phone_number.value,
      "domain": event.target.domain.value,
      "notes": event.target.notes.value
    }
    handleSignUp(client)
  }

  return(
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control required type='text' placeholder='Enter your name'/>
          <Form.Control.Feedback type="invalid">
            Please provide a valid name.
          </Form.Control.Feedback>
        </Form.Group>
        <br/>
        <Form.Group controlId='email'>
          <Form.Label>E-mail</Form.Label>
          <Form.Control required type='email' placeholder='Enter your email address' />
          <Form.Control.Feedback type="invalid">
            Please provide a valid e-mail address.
          </Form.Control.Feedback>
        </Form.Group>
        <br/>
        <Form.Group controlId='phone_number'>
          <Form.Label>Phone number</Form.Label>
          <Form.Control required type='text' placeholder='Enter your phone number' />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a valid phone number.
          </Form.Control.Feedback>
        </Form.Group>
        <br/>
        <Form.Group controlId='domain'>
          <Form.Label>Domain</Form.Label>
          <Form.Control required type='text' placeholder='Enter your domain name' />
          <Form.Control.Feedback type="invalid">
            Please provide a valid domain name.
          </Form.Control.Feedback>
        </Form.Group>
        <br/>
        <Form.Group controlId='notes'>
          <Form.Label>Notes</Form.Label>
          <Form.Control as='textarea' placeholder='Enter your notes' row='5' />
        </Form.Group>
        <br/>
        <Button type='submit' value='submit'>Add new contact</Button>
        <br/>
      </Form>
      <br/>
      <Button href='/'>Back to home</Button>
    </div>
  )

}
