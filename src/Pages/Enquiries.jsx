// src/pages/Enquiries.js
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import '../Styles/Enquiries.css'; // Create this CSS file for styling if needed

function Enquiries() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    productDetails: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send formData to a server or API
    console.log('Form submitted:', formData);
    // Reset form after submission (optional)
    setFormData({
      name: '',
      email: '',
      productDetails: ''
    });
  };

  return (
    <Container className="mt-5">
      <h1 className="mb-4">Enquiries</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formEmail" className="mt-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
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
            value={formData.productDetails}
            onChange={handleChange}
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
