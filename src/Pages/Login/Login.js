import React, { useRef } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import "./Login.css";
import logo from "../../Components/Header/LOGO.png";
import { Link } from "react-router-dom";
import useAuth from "./../../Context/useAuth";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { SignInWithEmail, error } = useAuth();

  const handleLogin = (e) => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    SignInWithEmail(email, password);
    e.preventDefault()
  };

  return (
    <div className="login">
      <div className="loginContainer">
        <img src={logo} className="loginLogo" alt="" />
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              ref={emailRef}
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              ref={passwordRef}
              placeholder="Password"
            />
          </Form.Group>

          

          <div className="d-grid gap-2">
            <Button variant="primary" type="submit">
              Login
            </Button>
          </div>
          <br />
          {
              error && <Alert variant="danger">
              {error} 
            </Alert>
          }
        </Form>

        <hr />
        <h6>
          Have an account? <Link to="/register"> Register </Link>
        </h6>
        <br />
        
      </div>
    </div>
  );
};

export default Login;
