// App.js

import React from "react";
import { Link } from "react-router-dom";
import "./Message.css";

const Message = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <h1>Welcome to ChatApp</h1>
        <nav>
          <Link to="/chat/personal" className="nav-link">
            Personal Chat
          </Link>
          <Link to="/chat/public" className="nav-link">
            Public Chat
          </Link>
        </nav>
      </header>
      <section className="hero-section">
        <div className="hero-content">
          <h2>Connect with your friends and the world around you.</h2>
          <p>
            Join our community to enjoy personal and public chatting
            experiences.
          </p>
          <div className="cta-buttons">
            <Link to="/chat/personal" className="btn primary-btn">
              Start Personal Chat
            </Link>
            <Link to="/chat/public" className="btn secondary-btn">
              Join Public Chat
            </Link>
            <Link to='/chat/group' className="btn primary-btn">
               Group chat
            </Link>
          </div>
        </div>
        <div className="hero-image">
        </div>
      </section>
    </div>
  );
};

export default Message;
