
import React from 'react';
import { Navbar, Nav,  } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../Styles/Header.css';
import logo from '../Images/logo.jpg' 

function Header() {
  return (
    <Navbar bg="light" expand="lg" className="header fixed-top" >
      <Navbar.Brand href="/" className="d-flex align-items-center">
        <img src={logo} alt="Logo" className="logo-image d-inline-block align-top" />
        <span className="d-none d-lg-block ml-2">NaivasCRM</span>
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#products">Products</Nav.Link>
          <Nav.Link href="#enquiries">Enquiries</Nav.Link>
          <Nav.Link href="#compliments">Compliments</Nav.Link>
          <Nav.Link href="#complaints">Complaints</Nav.Link>
          <Nav.Link href="#complaints">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;


