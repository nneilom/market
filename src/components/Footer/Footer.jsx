import React from "react";
import "../Footer/Footer.css";
import twitter from "../Images/icons8-твиттер-100.png";
import facebook from "../Images/icons8-facebook-100.png";
import inst from "../Images/icons8-instagram-100.png";

const Footer = () => {
  return (
    <div>
      <div className="footercontanier">
        <div className="footerLeft">
          <ul className="ul1">
            <li>Customer Service</li>
            <li>Help / FAQ</li>
            <li>Returns & Exchanges</li>
            <li>Sizing</li>
            <li>Gift Cards</li>
            <li>Contact Us</li>
          </ul>
          <ul className="ul2">
            <li>About</li>
            <li>Our Story</li>
            <li>Shop</li>
            <li>Journal</li>
            <li>About Our Tees</li>
            <li>Reviews</li>
          </ul>
        </div>
        <div className="footerRight">
          <span>© Ugmonk 2023</span>
          <p>All images and content may not be used without permission</p>
          <div className="icons">
            <img src={twitter} alt="" />
            <img src={facebook} alt="" />
            <img src={inst} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
