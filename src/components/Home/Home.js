import React from 'react';
import  "./Home.css";

export default function Home() {
  return (
    <section className="home" id="home">
  
      <div className="main-text">
        <h3>
          Travel The World
          <br /> & Explore The New Destination
        </h3>
        <p>Don't know where to go on your vacations? We'll help you find your trip!</p>
        <a href="/Packages2">
          <button id="home-btn">
            PACKAGES <i className="fas fa-arrow-down"></i>
            <button id="home-btn2">
              <i className="fa-sharp fa-solid fa-circle-play"></i>
            </button>
          </button>
        </a>
      </div>
    </section>
  )
}
