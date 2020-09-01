import React from 'react';
import Button from 'react-bootstrap/button'

export default function Home() {

  return(
    <div>
      <h1>Welcome to my CURD Contact Form Application!</h1>
      <Button href='/new-contact'>Add new contact</Button>
      <Button href='/list-of-contacts'>List of contacts</Button>
    </div>
  )

}
