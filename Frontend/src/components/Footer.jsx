import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <h2>Contact Us</h2>
        <p>Feel free to reach out to us for any inquiries or support.</p>

        <div className="contact-info">
          <p>Email: info@example.com</p>
          <p>Phone: +123 456 7890</p>
        </div>

        <h2>Useful Links</h2>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
