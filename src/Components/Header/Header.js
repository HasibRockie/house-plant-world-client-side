import React, { useEffect } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./LOGO.png";
import useAuth from "./../../Context/useAuth";

const Header = () => {
  const { user, Logout, isAdmin, name } = useAuth();
  const handleLogOut = () => {
    Logout();
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="font-bold">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/services">
              Services
            </Nav.Link>
            {user?.email && (
              <Nav.Link as={Link} to="/dashboard">
                Dashboard
              </Nav.Link>
            )}
            {user?.email && (
              <NavDropdown
                title={`${name}`}
                className="text-danger"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item as={Link} to="/dashboard/pay">
                  Pay
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/dashboard/orders">
                  My Orders
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/dashboard/review">
                  Review
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogOut}>
                  Log Out
                </NavDropdown.Item>
              </NavDropdown>
            )}

            {isAdmin === "admin" && (
              <NavDropdown title="Manage" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Manage All Orders
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Add A Product
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Make Admin
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Manage Products
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogOut}>
                  Log Out
                </NavDropdown.Item>
              </NavDropdown>
            )}

            {!user?.email && (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}

            {!user?.email && (
              <Nav.Link as={Link} to="/register">
                Register
              </Nav.Link>
            )}

            {/* {user?.email && <Nav.Link className="text-danger">{name}</Nav.Link>} */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
