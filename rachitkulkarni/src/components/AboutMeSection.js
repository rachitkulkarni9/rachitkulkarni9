import React from "react";
import "../styles/AboutMeSection.css";

const AboutMeSection = () => {
  return (
    <div className="about-section">
      <h2 className="about-title">About Me</h2>
      <div className="about-content">
        <img
          src="Portfolio_Image.jpeg" // Replace with your actual image path
          alt="About Me"
          className="about-image"
        />
        <div className="about-text">
          <p>
            I am a passionate software engineering graduate with expertise in
            building dynamic and responsive web applications. Skilled in
            full-stack development, database management, and object-oriented
            programming, I thrive on solving real-world problems with elegant
            and efficient solutions.
          </p>
          <p>
            My proficiency spans technologies such as JavaScript, React.js,
            Python, and SQL. I am continually learning to expand my technical
            and problem-solving skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
