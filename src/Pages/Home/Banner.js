import React from "react";
import { Button } from "react-bootstrap";
import banner from "./banner.jpg";
import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner">
      <img className="img-banner" src={banner} width="100%" alt="" />
      <div className="banner-container">
        <div className="half banner-text">
          <h1>DECORATE YOUR WORLD WITH US</h1>
          <p>
            You can have the best home decorator plants here. All varieties
            plants are available with affordable price.{" "}
          </p>
          <Link to="/services">
            <Button variant="outline-light">Exprore All Products</Button>
          </Link>
        </div>
        <div className="banner-text half">
          <h1>SUITABLE FOR ALL AGES & TASTES</h1>
          <p>
            You can have the best home decorator plants here. All varieties
            plants are available with affordable price.{" "}
          </p>
          <Link to="/services">
            <Button variant="outline-light">Exprore All Products</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
