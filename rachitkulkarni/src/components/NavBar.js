import React, { useEffect, useState } from "react";
import "../styles/NavBar.css";


const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');

  const handleScroll = () => {
    const sections = ['skills', 'projects','contact'];
    const scrollPosition = window.scrollY;

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element && scrollPosition >= element.offsetTop - 50) {
        setActiveSection(section);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="navbar">
      <div className="logo-container">
        <img src="sample.jpeg" alt="Logo" className="logo-image" />
      </div>
      <nav>
        <ul className="nav-links">
          <li className={activeSection === 'skills' ? 'active' : ''}>
            <a href="#skills">Skills</a>
          </li>
          <li className={activeSection === 'projects' ? 'active' : ''}>
            <a href="#projects">Projects</a>
          </li>
          <li className={activeSection === 'contact' ? 'active' : ''}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;