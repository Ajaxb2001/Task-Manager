// src/components/Welcome.js

import React from "react";
import { Link } from "react-router-dom";
import "../css/Welcome.css";
import image from "../images/Wavy_Bus-15_Single-10.jpg";
const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-text">
        <h1>Welcome to Task Manager</h1>
        <p>Organize your tasks efficiently and stay productive.</p>
        <Link to="/tasks">
          <button className="start-button">Get Started</button>
        </Link>
      </div>
      <div className="welcome-image">
        <img src={image} alt="Task Management" />
      </div>
    </div>
  );
};

export default Welcome;
