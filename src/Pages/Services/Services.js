import React, {useEffect, useState} from "react";
import banner from "./banner.png";
import Product from "./../Home/Product";

const Services = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="service">
      <div>
        <img src={banner} alt="" width="100%" />
      </div>
      <div className="mt-5">
        <h1>See Our products: </h1>
        <div className="products">
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
