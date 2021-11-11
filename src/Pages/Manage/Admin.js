import React, { useEffect, useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";

const Admin = () => {
  const [userData, setUserData] = useState(null);
  const [email, setEmail] = useState(null);
  const [successful, setSuccessful] = useState(false);
  const [error, setError] = useState(false);

  const getEmail = (e) => {
    if (e.target.value === "") {
      setSuccessful(false);
    }
    setEmail(e.target.value.toLowerCase());
  };

  useEffect(() => {
    console.log(email);
    fetch(`http://localhost:5000/users/${email}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, [email]);

  const handleMakeAdmin = (e) => {
    if (userData) {
      const object = { ...userData, role: "admin" };

      fetch(`http://localhost:5000/users/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(object),
      }).then((res) => {
        e.target.reset();
        setSuccessful(true);
        setError(false);
      });
    } else {
      e.target.reset();
      setError(true);
      setSuccessful(false);
    }
    e.preventDefault();
  };

  return (
    <div className="m-3">
      <Card className="text-center w-50 mx-auto">
        <Card.Header> Add New Admin </Card.Header>
        <Card.Body className="text-left mt-3 mb-4">
          <Form className="text-left" onSubmit={handleMakeAdmin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={getEmail}
                required
              />
            </Form.Group>

            <div className="d-grid gap-2">
              <Button variant="danger" type="submit">
                Make Admin
              </Button>
            </div>
          </Form>
        </Card.Body>
        <Card.Footer className="text-muted">
          {successful && (
            <Alert variant="success">
              Email added as Admin Successfully!
            </Alert>
          )}
          {error && (
            <Alert variant="danger">
              Sorry! Something Wrong! Either user doesn't exist or you
              misspelled the email! Please Try Again!
            </Alert>
          )}
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Admin;
