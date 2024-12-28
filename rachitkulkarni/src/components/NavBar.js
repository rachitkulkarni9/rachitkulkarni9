import React from "react";
import { Link } from "react-scroll";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <header className="navbar">
      <div className="logo-container">
        <img src="R.png" alt="Logo" className="logo-image" />
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="skills" smooth={true} duration={500} offset={-70}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} offset={-70}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} offset={-70}>
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
