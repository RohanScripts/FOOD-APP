import React from "react";
import "./FooterCss.css";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo2} width="95px" alt="" />
          <p>
            Discover delightful dishes delivered to your door with speed and
            convenience from Swaad Safar. Explore our menu of quality
            ingredients and exceptional service. Bon appétit!
          </p>
          <div className="footer-social-media-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <Link to={"http://www.linkedin.com/in/rohan-shelar-2a3969280"}>
              <img src={assets.linkedin_icon} alt="" />
            </Link>
          </div>
        </div>
        <div className="footer-content-center">
          <h3>COMPANY</h3>
          <ul>
            <li>Hoem</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h3>Get In Touch</h3>
          <ul>
            <li>+91 90549 06327</li>
            <li>Mail Us: shelarrohan1810@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p>Copyright 2024 © SwaadSafar.com - All Rights Reserved</p>
    </div>
  );
};

export default Footer;
