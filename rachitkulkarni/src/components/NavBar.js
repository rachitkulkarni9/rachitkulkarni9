import React, { useEffect, useState } from "react";
import "../styles/NavBar.css";
import logo from "../assets/sample.jpeg";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      threshold: 0.6, // Trigger when 60% of a section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect(); // Cleanup observer on unmount
  }, []);

  return (
    <header className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo-image" />
      </div>
      <nav>
        <ul className="nav-links">
          <li className={activeSection === "hero" ? "active" : ""}>
            <a href="#hero">About <span>ℹ️</span></a>
          </li>
          <li className={activeSection === "about" ? "active" : ""}>
            <a href="#about">Skills <span>🛠️</span></a>
          </li>
          <li className={activeSection === "skills" ? "active" : ""}>
            <a href="#skills">Projects <span>📂</span></a>
          </li>
          <li className={activeSection === "contact" ? "active" : ""}>
            <a href="#contact">Contact <span>📬</span></a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
