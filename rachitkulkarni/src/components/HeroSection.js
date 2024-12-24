import React from "react";
import "../styles/HeroSection.css";
import profileImage from "../assets/Rachit.jpeg";

const HeroSection = () => {
    return (
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <p>Hello, I'm <span>👋</span></p>
            <h1>Rachit Girish Kulkarni</h1>
            <h2>Full Stack Developer <span>🚀</span></h2>
            <div className="buttons">
            <a
              href="/Resume.pdf" /* Path to your resume in the public folder */
              download
              className="download-cv"
            >
              <span>📄</span> Download CV
            </a>
            <button className="contact-info">
              <span>📞</span> Contact Info
            </button>
          </div>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/rachitkulkarni/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/rachitkulkarni9" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img src={profileImage} alt="Rachit Girish Kulkarni" />
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroSection;