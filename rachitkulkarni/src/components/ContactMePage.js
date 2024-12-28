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

        {/* Social Links */}
        <div className="social-logos-container">
          <a
            href="https://www.linkedin.com/in/rachitkulkarni/"
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
            href="https://github.com/rachitkulkarni9/"
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
