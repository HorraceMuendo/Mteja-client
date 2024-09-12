// src/components/ProductCard.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import '../Styles/Product.css'; 

function ProductCard({ name, description, details }) {
  return (
    <Card className="mb-4 product-card">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" href={details}>More Details</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
