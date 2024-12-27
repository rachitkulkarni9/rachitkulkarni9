import React from "react";
import "../styles/HeroSection.css";

const HeroSection = () => {
  const handleDownloadCV = () => {
    // Trigger file download
    const link = document.createElement("a");
    link.href = "Resume.pdf"; // Update with the actual resume file path
    link.download = "Resume_Rachit_G_Kulkarni.pdf"; // Name for the downloaded file
    link.click();
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
        <button className="hero-button" onClick={handleDownloadCV}>
          Download CV
        </button>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/rachitkulkarni/" target="_blank" rel="noopener noreferrer">
            <img
              src="/linkedin.png"
              alt="LinkedIn"
              className="social-icon"
            />
          </a>
          <a href="https://github.com/rachitkulkarni9/" target="_blank" rel="noopener noreferrer">
            <img
              src="github.png"
              alt="GitHub"
              className="social-icon"
            />
          </a>
        </div>
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
