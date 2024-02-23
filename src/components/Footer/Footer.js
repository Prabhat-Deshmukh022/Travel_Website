import React from 'react';
import "./Footer.css";
import app1 from "../../app.png";

export default function Footer() {
  return (
    <footer id="footer">
            <div className="footer-content">
                <div className="row" id="row1">
                    <a href="#" id="footer-logo">Travel Agency</a>
                    <p>Discover the world with our expert travel agency, where every journey is an unforgettable adventure waiting to be explored</p>
                    <div className="social-links">
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-youtube"></i>
                        <i className="fab fa-pinterest-p"></i>
                    </div>
                </div>
                <div className="row" id="row2">
                    <h3>Useful Links</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Packages</a></li>
                        <li><a href="#">Book</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Contact us</a></li>
                    </ul>
                </div>
                <div className="row" id="row3">
                    <h3>Other Links</h3>
                    <ul>
                        <li><a href="#">History</a></li>
                        <li><a href="#">About the founder</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="row" id="row4">
                    <h3>Download App</h3>
                    <img src={app1} alt="" />
                </div>
            </div>
        </footer>
  )
}
