import React from "react";
import "../styles/NavBar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <h1 className="logo">Rachit Girish Kulkarni</h1>
      <nav>
        <ul className="nav-links">
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
