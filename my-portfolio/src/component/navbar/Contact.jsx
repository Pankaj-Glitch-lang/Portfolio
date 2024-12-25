import React from "react";
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";


const Contact = () => (
  <section id="contact" className="contact-section">
    <h2 className="contact-title">Contact Me</h2>
    <p className="contact-description">
      I’d love to hear from you! Whether it’s a project, job opportunity, or just a chat, feel free to connect with me.
    </p>
    <ul className="contact-list">
      <li>
        <FaPhone className="contact-icon" />
        <span>Phone:</span> <a href="tel:+6207737580">6207737580</a>
      </li>
      <li>
        <FaEnvelope className="contact-icon" />
        <span>Email:</span>{" "}
        <a href="mailto:pankajmahato0420@gmail.com">pankajmahato0420@gmail.com</a>
      </li>
      <li>
        <FaLinkedin className="contact-icon" />
        <span>LinkedIn:</span>{" "}
        <a
          href="https://www.linkedin.com/in/pankaj-kumar-464379212"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Profile
        </a>
      </li>
      <li>
        <FaGithub className="contact-icon" />
        <span>GitHub:</span>{" "}
        <a
          href="https://github.com/Pankaj-Glitch-lang"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/Pankaj-Glitch-lang
        </a>
      </li>
    </ul>
  </section>
);

export default Contact;
