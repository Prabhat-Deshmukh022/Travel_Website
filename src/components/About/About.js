import React from 'react';
import "./About.css";
import Aboutimg from "../../about-img.png";
import {useNavigate} from "react-router-dom";
export default function About() {
  const navigate=useNavigate();
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src={Aboutimg} alt="" />
      </div>
      <div className="about-info">
        <h6>About us</h6>
        <h3>How This Travel Agency works</h3>
        <p>
          Our team creates custom travel itineraries tailored to your preferences and interests.
          <br />
          We handle all the booking logistics, including flights, hotels, and transportation.
          <br />
          During your trip, our agency provides support and assistance, ensuring a smooth and enjoyable journey.
          <br />
          We stay up-to-date with the latest travel trends and safety guidelines to offer you the best possible experience.
          <br />
          Our goal is to make your travel dreams a reality, taking care of all the details so you can relax and enjoy your trip
        </p>
      </div>
    </section>
  )
}
