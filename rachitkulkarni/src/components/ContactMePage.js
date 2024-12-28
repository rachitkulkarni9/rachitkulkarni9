import React from "react";
import "../styles/ContactMePage.css";

const ContactMePage = () => {
  return (
    <div className="contact-page-container">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-subtitle">
        Feel free to reach out for collaborations, queries, or just a friendly chat!
      </p>

      <div className="contact-form-container">
        <form className="contact-form">
          <input
            type="text"
            className="form-input"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            className="form-input"
            placeholder="Your Email"
            required
          />
          <textarea
            className="form-textarea"
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="social-logos-container">
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="linkedin.png" /* LinkedIn Logo */
              alt="LinkedIn"
              className="social-logo"
            />
          </a>
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="github.png" /* GitHub Logo */
              alt="GitHub"
              className="social-logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMePage;
