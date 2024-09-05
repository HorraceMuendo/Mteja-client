
// import React from 'react'
// import "../Styles/Header.css"

// function Header() {
//   return (
//     <header id='header' className='header fixed-top d-flex align-items-center'>
//       {/* LOGO */}
//       <div className='d-flex align-items-center justify-content-between'>
//         <a href='/' className='logo d-flex align-items-center'>
//           <img src='' alt='' />
//           <span className='d-none d-lg-block'>NaivasCRM</span>
//         </a>
//       </div>
  

//       {/* navbar */}
//       <nav className='header-nav ms-auto'>
           
//       </nav>


//    </header>

   
//   )
// }

// export default Header;

// src/components/Header.js
import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../Styles/Header.css';

function Header() {
  return (
    <Navbar bg="light" expand="lg" className="header fixed-top justify-content-end" >
      <Navbar.Brand href="#home">MySite</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#complaints">Complaints</Nav.Link>
          <Nav.Link href="#compliments">Compliments</Nav.Link>
          <Nav.Link href="#products">Products</Nav.Link>
          <Nav.Link href="#enquiries">Enquiries</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;


