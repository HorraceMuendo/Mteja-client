// src/pages/Contact.js
import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';
import '../Styles/ContactUs.css'; // Create this CSS file for styling if needed


const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject]=useState('');
  const [message, setMessage]=useState('');

const handleAddContact = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post ('http://localhost:6969/contact/add',{
      name: name,
      email:email,
      subject: subject,
      message: message
    });
    console.log('contact info sent: ', response.data)
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  } catch (error) {
    console.error('There was an error posting the enquiry, ', error)
  }
};


  return (
    <Container className="mt-5">
      <h1 className="mb-4 text-center">Contact Us</h1>
      <Form onSubmit={handleAddContact}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
        <Form.Group controlId="formSubject" className="mt-3">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter subject"
            name="subject"
            value={subject}
            onChange={(e)=> setSubject (e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formMessage" className="mt-3">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Your message"
            name="message"
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Send Message
        </Button>
      </Form>
    </Container>
  );
}

export default Contact;
