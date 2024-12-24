import React from "react";
import "../styles/NavBar.css";
import logo from "../assets/sample.jpeg"; // Replace with the path to your logo

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo-image" />
      </div>
      <nav>
        <ul className="nav-links">
          <li>About <span>ℹ️</span></li>
          <li>Skills <span>🛠️</span></li>
          <li>Projects <span>📂</span></li>
          <li>Contact <span>📬</span></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
