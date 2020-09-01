import React, { useState } from "react";
import Request from "../helpers/request";
import Button from "react-bootstrap/button";
import Form from "react-bootstrap/Form";

export default function ContactForm() {
  const [validated, setValidated] = useState(false);
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");

  function handleSignUp(client) {
    const request = new Request();
    const clients_url = "/api/clients";
    request.post(clients_url, client).then(() => {
      console.log(client);
      setValidated(true);
      // window.location = '/list-of-contacts'
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const client = {
      first_name: event.target.first_name.value,
      last_name: event.target.last_name.value,
      username: event.target.username.value,
      email: event.target.email.value,
      phone_number: event.target.phone_number.value,
      notes: event.target.notes.value,
    };
    handleSignUp(client);
  }

  return (
    <div>
      <h2>New Contact Form:</h2>
      <p>* required fields</p>
      <br />
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="first_name">
          <Form.Label>* First name:</Form.Label>
          <Form.Control required type="text" placeholder="Enter your first name" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a valid name.
          </Form.Control.Feedback>
        </Form.Group>
        <br />
        <Form.Group controlId="last_name">
          <Form.Label>* Last name:</Form.Label>
          <Form.Control required type="text" placeholder="Enter your last name" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a valid name.
          </Form.Control.Feedback>
        </Form.Group>
        <br />
        <Form.Group controlId="username">
          <Form.Label>* Username:</Form.Label>
          <Form.Control required type="text" placeholder="Enter your username" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a valid username.
          </Form.Control.Feedback>
        </Form.Group>
        <br />
        <Form.Group controlId="email">
          <Form.Label>* E-mail</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter your email address"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a valid e-mail address.
          </Form.Control.Feedback>
        </Form.Group>
        <br />
        <Form.Group controlId="phone_number">
          <Form.Label>* Phone number</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter your phone number"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a valid phone number.
          </Form.Control.Feedback>
        </Form.Group>
        <br />
        <Form.Group controlId="notes">
          <Form.Label>Notes</Form.Label>
          <Form.Control as="textarea" placeholder="Enter your notes" row="5" />
        </Form.Group>
        <br />
        <Button type="submit" value="submit">
          Add new contact
        </Button>
        <br />
      </Form>
      <br />
      <Button href="/">Back to home</Button>
    </div>
  );
}
