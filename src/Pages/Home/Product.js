import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const url = `${product._id}`;
  
  return (
    <Card className="p-3">
      <Card.Header bg="light">
        <img src={product?.image} height="320px" width="100%" alt="" />
      </Card.Header>
      <Card.Body>
        <h4 className="text-bold">{product?.name}</h4>
        <h2>${product?.price}</h2>
      </Card.Body>
      <Link to={url}>
        <Button variant="dark">Order Now</Button>
      </Link>
    </Card>
  );
};

export default Product;
