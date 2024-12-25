import React from 'react';
import '../styles/AboutMeSection.css'; // Import the CSS file
import { FaLaptop } from 'react-icons/fa'; // Import Laptop icon from react-icons

const AboutMeSection = () => {
  return (
    <section className="about-me">
      <h2 className="title">About Me</h2>
      <div className="container">
        <div className="image-box">
          <img
            src="Portfolio_Image.jpeg" // Replace with the path to your image
            alt="Profile"
          />
        </div>
        <div className="info-boxes">
          <div className="box">
            <div className="icon">
              <FaLaptop />
            </div>
            <h3>Experience</h3>
            <p>3+ years</p>
            <p>Full-Stack Development</p>
          </div>
          <div className="box">
            <div className="icon">🎓</div>
            <h3>Education</h3>
            <p>M.S. Software Engineering</p>
            <p>B.Tech. Computer Science</p>
          </div>
        </div>
      </div>
      <div className="description">
        <p>
          Software Engineering graduate with experience in full-stack
          development. Skilled in creating dynamic web applications with
          React.js, Flask, and integrating graph databases like GraphDB.
          Experienced in deployment on platforms like Azure and Vercel.
        </p>
      </div>
    </section>
  );
};

export default AboutMeSection;
