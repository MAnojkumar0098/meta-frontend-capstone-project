// Footer.js
import React from "react";
import "./Footer.css"; // Importing external CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-col">
        <h3>Top Products</h3>
        <ul>
          <li>Manage Reputation</li>
          <li>Power Tools</li>
          <li>Managed Website</li>
          <li>Marketing Service</li>
        </ul>
      </div>

      <div className="footer-col">
        <h3>Power Tools</h3>
        <ul>
          <li>Jobs</li>
          <li>Marketing Service</li>
          <li>Top Products</li>
          <li>Manage Reputation</li>
        </ul>
      </div>

      <div className="footer-col">
        <h3>Power Tools</h3>
        <ul>
          <li>Managed Website</li>
          <li>Manage Reputation</li>
          <li>Top Products</li>
          <li>Marketing Service</li>
        </ul>
      </div>

      <div className="footer-col">
        <h3>Guides</h3>
        <ul>
          <li>Research</li>
          <li>Experts</li>
          <li>Managed Website</li>
          <li>Marketing Service</li>
        </ul>
      </div>

      <div className="footer-col newsletter">
        <h3>Newsletter</h3>
        <p>You can trust us. we only send promo offers.</p>
        <div className="subscribe">
          <input type="email" placeholder="Your email Address" />
          <button className="btn-yellow">SUBSCRIBE</button>
        </div>
      </div>

      <div className="copyright">
        <p>
          Copyright © 2025 All rights reserved |  made by{" "}
          <a href="https://atulcodex.com" target="_blank" rel="noreferrer">
            newtechnology.m
          </a>
        </p>
        <div className="pro-links">
          <h2>CONNECT WITH US</h2><br/>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-linkedin-in"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
