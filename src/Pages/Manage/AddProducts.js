import React, { useRef, useState } from "react";
import { Col, Form, Row, Button, Alert } from "react-bootstrap";
import "./Manage.css";

const AddProducts = () => {
  const addRef = useRef();
  const [object, setObject] = useState({});
  const [successful, setSuccessful] = useState(false);
  const [error, setError] = useState(false);

  const addObject = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const modifiedObject = { ...object, [`${name}`]: value };
    setObject(modifiedObject);
    // console.log(object);
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    fetch("https://house-plant-world.herokuapp.com/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(object),
    })
      .then((res) => {
        console.log(res);
        setSuccessful(true);
        setError(false);
        e.target.reset();
        setObject({});
      })
      .catch((err) => {
          console.log(err);
        setError(true);
        setSuccessful(false);
      });
  };

  return (
    <div className="add">
      <Form
        onSubmit={handleAddProduct}
        className="add-products w-50 mx-auto text-left"
      >
        <h3>Add A Product:</h3>
        <hr />
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label className="text-left ">Product Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Product Name"
              ref={addRef}
              name="name"
              onChange={addObject}
              required
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formUrl">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            name="image"
            placeholder="https://example.com/abc.jpg"
            ref={addRef}
            onChange={addObject}
            required
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Price</Form.Label>
            <Form.Control
              name="price"
              placeholder="type in $dollars, ( ex: 100 )"
              ref={addRef}
              onChange={addObject}
              required
            />
          </Form.Group>
        </Row>

        <div className="button-submit d-grid">
          <Button className="text-center" variant="primary" type="submit">
            Add
          </Button>
        </div>
        <br />
        {successful && (
          <Alert variant="success">Product Added Successfully</Alert>
        )}
        {error && <Alert variant="danger">Something Wrong! Try Again!</Alert>}
      </Form>
    </div>
  );
};

export default AddProducts;
