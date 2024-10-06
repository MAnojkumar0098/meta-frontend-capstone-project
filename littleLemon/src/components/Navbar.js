import React from "react";
import './Navbar.css'

const Navbar = () => {
  return (
    <nav id="nav">
      <img
        src="https://littlelemon.alexismenest.vercel.app/static/media/logo.e68246686f716ff6e5d8.png"
        className="logo"
        alt="Logo"
      />
      <div className="navigation">
        <ul>
          <li>
            <a href="#home" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="chat">Chat Section</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <img src="img/menu.png" id="menu-btn" alt="Menu" />
      </div>
    </nav>
  );
};

export default Navbar;
