import React, { useRef } from "react";
import "../styles/ContactMePage.css";
import emailjs from "@emailjs/browser";

const ContactMePage = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jjzrae9", // Replace with your EmailJS service ID
        "template_xbt7ctd", // Replace with your EmailJS template ID
        formRef.current,
        "BMMVgsmitM-aX-obB" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Failed to send the message. Please try again.");
        }
      );

    e.target.reset(); // Reset the form fields after submission
  };

  return (
    <div className="contact-page-container">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-subtitle">
        Feel free to reach out for collaborations, queries, or just a friendly chat!
      </p>

      {/* Contact Form */}
      <div className="contact-form-container">
        <form ref={formRef} className="contact-form" onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="form-input"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="user_email"
            className="form-input"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            className="form-textarea"
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>

      {/* Social Links */}
      <div className="social-logos-container">
        <a
          href="https://www.linkedin.com/in/rachitkulkarni/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="linkedin.png" /* Replace with your LinkedIn logo path */
            alt="LinkedIn"
            className="social-logo"
          />
        </a>
        <a
          href="https://github.com/rachitkulkarni9/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="github.png" /* Replace with your GitHub logo path */
            alt="GitHub"
            className="social-logo"
          />
        </a>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>Copyright © 2024 Rachit Girish Kulkarni. All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default ContactMePage;
