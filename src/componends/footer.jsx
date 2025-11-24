import React from "react";
import logo from "../assets/logo/logo.png"
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="footer container">
      <div className="footer-box row">
        <div className="col-12 col-md-4 col-lg-4" id="footer-title" data-aos="fade-down-right" data-aos-duration="1000">
          <div className="d-flex gap-2" id="footer-img">
            <img src={`${logo}`} alt="loading..." height={80} width={80} /><h3>Wrix Studio</h3>
          </div>
          <p>Professional Photography & Editing Studio</p>
          <p>© {new Date().getFullYear()} Wrix Studio. All Rights Reserved.</p>
        </div>

        <div className="col-12 col-md-4 col-lg-4" id="footer_pages" data-aos="fade-down-right" data-aos-duration="1000">
          <h3>Pages</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="col-12 col-md-4 col-lg-4" id="footer_contact" data-aos="fade-down-right" data-aos-duration="1000">
          <h3>Contact</h3>
          <Link to="/">Instagram : wrix_studio123</Link>
          <Link to="/">Telegram : wrix_123</Link>
          <Link to="/">Number : 9785589164</Link>
          <Link to="/">email : wrix12@gmai.com</Link>
        </div>
      </div>
    </footer>
  );
}
