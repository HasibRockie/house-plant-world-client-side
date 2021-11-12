import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://house-plant-world.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setProducts(data.reverse().slice(0, 6)));
  }, []);
  return (
    <div className="mt-5">
      <h1>See Our products: </h1>
      <div className="products">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
      <br />
      <Link to='/services'><Button variant="outline-dark">See All Products </Button></Link>
    </div>
  );
};

export default Products;
