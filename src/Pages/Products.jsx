// // src/pages/Products.js
// import React, { useState, useEffect } from 'react';
// import ProductCard from '../Components/ProductCard.js';
// import { Container, Row, Col } from 'react-bootstrap';

// function Products() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Replace with your API endpoint
//     fetch('http://localhost:6969/products/list')
//       .then(response => response.json())
//       .then(data => setProducts(data))
//       .catch(error => console.error('Error fetching products:', error));
//   }, []);

//   return (
//     <Container className="mt-5">
//       <h1 className="mb-4">Our Products</h1>
//       <Row>
//         {products.map(product => (
//           <Col key={product.id} md={4}>
//             <ProductCard 
//               name={product.name}
//               description={product.description}
//               details={product.details}
//             />
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// }

// export default Products;


// src/pages/Products.js
import React, { useState, useEffect } from 'react';
import ProductCard from '../Components/ProductCard.js';
import TrackPageVisit from './TrackingPageVisits.jsx'; // Import the TrackPageVisit component
import { Container, Row, Col } from 'react-bootstrap';

function Products() {
  const [products, setProducts] = useState([]);
  const customerId = 1; // This should be dynamically set based on the logged-in user

  useEffect(() => {
    // Replace with your API endpoint
    fetch('http://localhost:6969/products/list')
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
            <TrackPageVisit 
              customerId={customerId} 
              pageUrl={product.details} 
              visitType="page_view" 
            />
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
