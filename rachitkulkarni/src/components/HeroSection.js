import React from "react";
import "../styles/HeroSection.css";

const HeroSection = () => {
  const handleOpenCV = () => {
    // Open resume in a new tab
    window.open("Resume.pdf", "_blank"); // Replace with the actual URL of the resume
  };

  return (
    <div className="hero-container">
      <div className="hero-text">
        <p>Hello, Welcome</p>
        <h1>I'm Rachit G Kulkarni</h1>
        <p>
          Software Engineering graduate with experience in full-stack
          development. Skilled in creating dynamic web applications with
          React.js, Flask, and integrating graph databases like GraphDB.
          Experienced in deployment on platforms like Azure.
        </p>
        <button className="hero-button" onClick={handleOpenCV}>
          View CV
        </button>
      </div>
      <div className="hero-image-container">
        <img
          src="Portfolio_Image.jpeg"
          alt="Profile"
          className="hero-image"
        />
      </div>
    </div>
  );
};

export default HeroSection;
