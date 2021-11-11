import React, { useEffect, useRef, useState } from "react";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import { useParams } from "react-router";
import "./Service.css";
import useAuth from "./../../Context/useAuth";

const Service = () => {
  const { user, name } = useAuth();
  const [service, setService] = useState({});
  const [successful, setSuccessful] = useState(false);
  const [price, setPrice] = useState(parseInt(service?.price));
  const quanitityRef = useRef(1);
  const priceRef = useRef();
  const { id } = useParams();
  const [details, setDetails] = useState({
    name: name,
    email: user?.email,
    address: "",
    district: "",
    thana: "",
    zip: "",
    price: price,
  });
  const detailsRef = useRef();

  useEffect(() => {
    const quantity = parseInt(quanitityRef.current.value);
    // const productPrice = parseInt(service?.price);
    const totalPrice = service?.price * quantity;
    setPrice(totalPrice);
  }, []);

  fetch(`http://localhost:5000/service?_id=${id}`)
    .then((res) => res.json())
    .then((data) => setService(data));

  const handlePrice = () => {
    const quantity = quanitityRef.current?.value || 1;
    setPrice(quantity * service.price);
  };

  const handleDetails = (e) => {
    const title = e.target.title;
    const value = e.target.value;
    const object = {
      ...details,
      name: name,
      price: priceRef.current?.value,
      [`${title}`]: value,
    };
    setDetails(object);
  };

  const handlePlaceorder = (e) => {
    const date = new Date().toLocaleDateString();
    const status = "pending";
    const quantity = quanitityRef.current.value;
    const detailsPrice = priceRef.current?.value;
    const orderedProduct = service?.name;
    const object = {
      ...details,
      price: detailsPrice,
      quantity: quantity,
      product: orderedProduct,
      date: date,
      status: status,
    };
    setDetails(object);

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(object),
    }).then((res) => {
      e.target.reset();
      setSuccessful(true);
    });

    e.preventDefault();
  };

  return (
    <div className="service-div">
      <div className="container order-container">
        <br />
        <h2>Your Order:</h2>
        <hr />
        <br /> <br />
        <div className="item">
          <div>
            <img className="border rounded" src={service.image} alt="" />
          </div>
          <h4>{service.name}</h4>
          <h3 className="font-bold">${price || service.price}</h3>
          <Form.Select
            ref={quanitityRef}
            onChange={handlePrice}
            aria-label="Select Quanity"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Select>
        </div>
      </div>
      <div className="infos">
        <h2>Your Infos</h2>
        <hr />
        <Form onSubmit={handlePlaceorder}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                readOnly
                placeholder="Enter Full Name"
                onChange={handleDetails}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={user?.email}
                readOnly
                placeholder="Enter email"
                onChange={handleDetails}
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              onChange={handleDetails}
              title="address"
              ref={detailsRef}
              placeholder="ex: 12/A, Dhanmondi, Dhaka "
              required
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>District</Form.Label>
              <Form.Control
                title="district"
                onChange={handleDetails}
                ref={detailsRef}
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Thana</Form.Label>
              <Form.Control
                title="thana"
                onChange={handleDetails}
                ref={detailsRef}
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Postal Code</Form.Label>
              <Form.Control
                title="zip"
                onChange={handleDetails}
                ref={detailsRef}
                required
              />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                ref={priceRef}
                onChange={handleDetails}
                value={`$${price || service?.price}`}
              />
            </Form.Group>
          </Row>
          <br />
          <Button variant="danger" type="submit">
            Place Order
          </Button>
        </Form>
        <br />
        {successful && (
          <Alert variant="success">
            Order Placed Successfully! Thanks You!
          </Alert>
        )}
      </div>
    </div>
  );
};

export default Service;
