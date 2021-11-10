import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="top-footer">
      <div>
        <p>
          {" "}
          <span>Plant House World's</span> Social Link{" "}
        </p>
        <a href="/" className="social-media"><i className="fab fa-facebook-square fa-2x"></i></a>
        <a href="/" className="social-media"><i className="fab fa-instagram fa-2x"></i></a>
        <a href="/" className="social-media"><i className="fab fa-twitter fa-2x"></i></a> 
        <a href="/" className="social-media"><i className="fab  fa-youtube fa-2x"></i></a>
      </div>
      <div>
        <p><span>About Plant House World</span></p>
        <ul>
            <li>Contact</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Service Management</li>
        </ul>
      </div>
      <div>
        <p> <span>Plant House World Pages</span> </p>
        <ul className="pages">
            <Link to='/'><li>Home</li></Link>
            <Link to='/services'><li>Services</li></Link>
            <Link to='/dashboard'><li>Dashboard</li></Link>
            <Link to='/login'><li>Login</li></Link>
        </ul>
      </div>
      </div>
    
        <div className="bottom-footer text-center">
            <p className="copyright">© <span>Plant House World</span> All rights reserved.</p>
            <p className="copyright">Developped by <span className="text-bold text-center">Hasib Rockie</span></p>
        </div>
    </div>
  );
};

export default Footer;
