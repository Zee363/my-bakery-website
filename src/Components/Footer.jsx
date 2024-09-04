import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-section">
      <footer>
        <div className="location-div">
        <h2>Location</h2>
        <div className="footer-item">
          <i className="fa-solid fa-location-dot fa-2xl"></i>
          <p>
            Checkers, Rosebank Mall <br />
            50 Bath Ave, Rosebank <br />
            Johannesburg, 2196
          </p>
          </div>
        </div>
        <div className="contact-div">
        <h2>Contact Us</h2>
        <div className="footer-item">
          <i className="fa-solid fa-phone"></i>
          <p>011 945 1770</p>
        </div>
        <div className="footer-item">
          <i className="fa-solid fa-envelope"></i>
          <p>lubabalobakery@gmail.com</p>
          </div>
        </div>
        <p className="coded">This project was coded by Zinhle Nhlapo.</p>
      </footer>
    </div>
  );
}

export default Footer;