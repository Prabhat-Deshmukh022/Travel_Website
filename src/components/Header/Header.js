import React from 'react';
import "./Header.css";
import logo from "../../logo.png";
export default function Header() {
  return (
    <div className="header">
    <nav>
      <input type="checkbox" id="show-search" />
      <input type="checkbox" id="show-menu" />
      <label htmlFor="show-menu" className="menu-icon">
        <i className="fas fa-bars"></i>
      </label>
      <div className="content">
        <div className="logo">
          <a href="/Home2">
            <img src={logo} alt="" />
          </a>
        </div>
        <ul className="links">
          <li><a href="/Home2">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="/About2">About</a></li>
          <li><a href="/Packages2">Packages</a></li>
          <li><a href="/Book2">Book</a></li>
          <li><a href="/Reviews2">Reviews and Feedback</a></li>
        </ul>
      </div>
      <label htmlFor="show-search" className="search-icon">
        <i className="fas fa-search"></i>
      </label>
      <form action="#" className="search-box">
        <input type="text" placeholder="Search" required />
        <button type="submit" className="go-icon">
          <i className="fas fa-long-arrow-alt-right"></i>
        </button>
      </form>
    </nav>
  </div>
  )
}
