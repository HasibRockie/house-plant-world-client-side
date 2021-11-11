import React, { useState, useEffect, useRef } from "react";
import { Form, Button, FloatingLabel, Alert } from "react-bootstrap";
import Rating from "react-rating";
import "./Review.css";
import useAuth from "./../../Context/useAuth";

const Review = () => {
  const { name } = useAuth();
  const [products, setProducts] = useState([]);
  const reviewRef = useRef();
  const productRef = useRef();
  const [rating, setRating] = useState(0);
  const [successful, setSuccessful] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleSubmit = (e) => {
    const review = reviewRef.current.value;
    const product = productRef.current.value;
    const object = { name, review, product, rating };
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(object),
    }).then((res) => {
      setSuccessful(true);
      e.target.reset();
    });
    e.preventDefault();
  };

  return (
    <div className="review">
      <h2>Review us</h2> <br />
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            value={name}
            placeholder="Enter Your Name"
            readOnly
          />
        </Form.Group>
        <FloatingLabel controlId="floatingTextarea2" label="Write Your Review">
          <Form.Control
            as="textarea"
            placeholder="Write Your Review"
            ref={reviewRef}
            style={{ height: "100px" }}
            required
          />
        </FloatingLabel>
        <br />
        <FloatingLabel controlId="floatingSelect" label="Review Your Product">
          <Form.Select
            ref={productRef}
            aria-label="Floating label select example"
          >
            <option>Select Your Product </option>
            {products.map((product) => (
              <option key={product._id}>{product.name}</option>
            ))}
          </Form.Select>
        </FloatingLabel>
        <br />
        <div className="float-left">
          <Form.Label>Give Ratings: </Form.Label> <br />
          <Rating
            required
            onChange={(value) => setRating(value)}
            className="text-left"
            emptySymbol="fa fa-star-o fa-2x"
            fullSymbol="fa fa-star fa-2x"
          />
        </div>
        <br />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {successful && (
        <Alert variant="success">Review Added Successfully!</Alert>
      )}
    </div>
  );
};

export default Review;
