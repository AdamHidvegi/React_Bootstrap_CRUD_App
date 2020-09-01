import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export default function ClientList({clients}) {

  const clientDetail = clients.map((data, index) => {
    return(
      <tr key={index}>
        <td>{data.name}</td>
        <td>{data.email}</td>
        <td>{data.phone_number}</td>
        <td>{data.domain}</td>
        <td>{data.notes}</td>
        <td><Button>Edit</Button> <Button>Delete</Button></td>
      </tr>
    )
  })

  return(
    <div>
      <h3>Contact Information:</h3>
        <Table bordered>
        <thead>
          <tr>
            <th>Name</th>
            <th>E-mail</th>
            <th>Phone number</th>
            <th>Domain</th>
            <th>Notes</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {clientDetail}
        </tbody>
      </Table>
      <Button href='/'>Back to home</Button>
    </div>
  )

}
