// src/pages/Complaints.js
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import '../Styles/Complaints.css'; // Create this CSS file for styling if needed

const AddComplain = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [ complain, setComplain]=useState('');

const handleAddComplain= async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post ('http://localhost:6969/customers/complains/add',{
      name: name,
      email:email,
      complain: complain,
    });
    console.log('Compliment sent: ', response.data)
    setName('');
    setEmail('');
    setComplain('');
  } catch (error) {
    console.error('There was an error posting the compliment, ', error)
  }
};

  return (
    <Container className="mt-5">
      <h1 className="mb-4">Complaints</h1>
      <Form onSubmit={handleAddComplain}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            value={name}
            onChange={(e) => setName (e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formEmail" className="mt-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formComplaints" className="mt-3">
          <Form.Label>Complaints</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Share your Complaints here"
            name="Complaints"
            value={complain}
            onChange={(e) => setComplain(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default AddComplain;
