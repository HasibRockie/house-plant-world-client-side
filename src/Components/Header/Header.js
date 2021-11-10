import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from './LOGO.png'

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand as={Link} to='/' className="font-bold">
        <img src={logo} alt="" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to='/'>Home</Nav.Link>
        <Nav.Link as={Link} to='/services'>Services</Nav.Link>
        <NavDropdown title="Dashboard" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Pay</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">My Orders</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Review</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Log Out</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Manage" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Manage All Orders</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Add A Product</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Make Admin</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Manage Products</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Log Out</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link as={Link} to='/login'>Login</Nav.Link> 
        <Nav.Link as={Link} to='/register'>Register</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
};

export default Header;
