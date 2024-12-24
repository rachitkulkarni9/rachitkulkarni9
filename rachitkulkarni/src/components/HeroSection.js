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
              <button className="download-cv">
                <span>📄</span> Download CV
              </button>
              <button className="contact-info">
                <span>📞</span> Contact Info
              </button>
            </div>
            <div className="social-icons">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
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