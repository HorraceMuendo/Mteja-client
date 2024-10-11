// src/pages/Enquiries.js
import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';
import '../Styles/Enquiries.css'; // Create this CSS file for styling if needed

const Enquiries = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [productdetails, setProductdetails]=useState('');

const handleAddEnquiries = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post ('http://localhost:6969/enquiries/add',{
      name: name,
      email:email,
      productdetails: productdetails,
    });
    console.log('Enquiry sent: ', response.data)
    setName('');
    setEmail('');
    setProductdetails('');
  } catch (error) {
    console.error('There was an error posting the enquiry, ', error)
  }
};

  return (
    <Container className="mt-5">
      <h1 className="mb-4">Enquiries</h1>
      <Form onSubmit={handleAddEnquiries}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            value={name}
            onChange={(e)=> setName(e.target.value)}
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
            onChange={(e)=> setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formProductDetails" className="mt-3">
          <Form.Label>Product Details</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Provide details about the product"
            name="productDetails"
            value={productdetails}
            onChange={(e)=> setProductdetails(e.target.value)}
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

export default Enquiries;
