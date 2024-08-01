import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";
import logo from "../images/task management.png"; // Replace with the correct path to your logo

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Task Manager Logo" className="header-logo" />
      </div>
      <div className="header-right">
        <div className="header-text">
          <h1>Task Manager</h1>
          <p>Organize your tasks efficiently</p>
        </div>
        <nav className="header-nav">
          <ul>
            <li>
              <Link to="/">Welcome</Link>
            </li>
            <li>
              <Link to="/tasks">Task List</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
