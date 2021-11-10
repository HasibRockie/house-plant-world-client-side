import React, { useRef, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../Components/Header/LOGO.png";
import useAuth from "./../../Context/useAuth";

const Register = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const retypeRef = useRef();
  const { SignUpWithEmail, error  } = useAuth();
  const [notMatched, setNotMatched] = useState(false)

  const handleLogin = (e) => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const retype = retypeRef.current.value;
    console.log(name, email, password, retype);

    if(password === retype){
        SignUpWithEmail(name, email, password)
    }
    else{
        setNotMatched(true)
    }

    e.preventDefault();
  };

  return (
    <div className="login">
      <div className="loginContainer">
        <img src={logo} className="loginLogo" alt="" />
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              ref={nameRef}
              type="name"
              placeholder="Enter Full Name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={passwordRef}
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Re-type Password</Form.Label>
            <Form.Control
              ref={retypeRef}
              type="password"
              placeholder="Retype Password"
            />
          </Form.Group>
          {
              notMatched && <Alert variant="danger">
              Password not matched! Try again! 
            </Alert>
          }
          {
              error && <Alert variant="danger">
              {error} 
            </Alert>
          }
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
          <i className="fab fa-google"></i> Sign up with Google
        </Button>
      </div>
    </div>
  );
};

export default Register;
