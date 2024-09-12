// src/pages/Home.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../Styles/Home.css'; // Create this CSS file for styling if needed

function Home() {
  return (
    <Container className=" home mt-5">
      <header className="text-center mb-5">
        <h1>Welcome to NaivasCRM</h1>
        <p>Your one-stop solution for managing customer relations.</p>
        <Button variant="primary" href="/products">Explore Our Products</Button>
      </header>

      <section className="features mb-5">
        <h2>Features</h2>
        <Row>
          <Col md={4}>
            <div className="feature-item text-center">
              <i className="bi bi-gear-fill feature-icon"></i>
              <h3>Customizable</h3>
              <p>Tailor the CRM to fit your business needs with flexible settings and configurations.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="feature-item text-center">
              <i className="bi bi-people-fill feature-icon"></i>
              <h3>Easy Collaboration</h3>
              <p>Facilitate team collaboration with shared access and communication tools.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="feature-item text-center">
              <i className="bi bi-bar-chart-fill feature-icon"></i>
              <h3>Advanced Analytics</h3>
              <p>Gain insights into customer interactions with powerful analytics and reporting tools.</p>
            </div>
          </Col>
        </Row>
      </section>

      <section className="call-to-action text-center mb-5">
        <h2>Get Started Today</h2>
        <p>Contact us to learn more about how NaivasCRM can benefit your business.</p>
        <Button variant="primary" href="/contact">Contact Us</Button>
      </section>
    </Container>
  );
}

export default Home;
