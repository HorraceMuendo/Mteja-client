// src/pages/Products.js
import React, { useState, useEffect } from 'react';
import ProductCard from '../Components/ProductCard.js';
import { Container, Row, Col } from 'react-bootstrap';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Replace with your API endpoint
    fetch('https://api.example.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <Container className="mt-5">
      <h1 className="mb-4">Our Products</h1>
      <Row>
        {products.map(product => (
          <Col key={product.id} md={4}>
            <ProductCard 
              name={product.name}
              description={product.description}
              details={product.details}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;
