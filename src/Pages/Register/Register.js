import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../Components/Header/LOGO.png";

const Register = () => {
  return (
    <div className="login">
      <div className="loginContainer">
        <img src={logo} className="loginLogo" alt="" />
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="name" placeholder="Enter Full Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Re-type Password</Form.Label>
            <Form.Control type="password" placeholder="Retype Password" />
          </Form.Group>
          <div className="d-grid gap-2">
            <Button variant="primary" type="submit">
              Register
            </Button>
          </div>
        </Form>
        <hr />
        <h6>
          Have an account? <Link to="/login"> Login </Link>
        </h6>
        <br />
        <h6>or,</h6>
        <Button variant="primary" type="submit">
        <i className="fab fa-google"></i>  Sign up with Google
        </Button>
      </div>
    </div>
  );
};

export default Register;
