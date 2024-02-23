import React from 'react';
import "./Packages.css";
import unitedstates from "../../united state.png";
import jordan from "../../jordan.png";
import china from "../../china.png";
import Mexico from "../../Mexico.png";
import france from "../../france.png";
import Greece from "../../Greece.png";

import Spain from "../../Spain.png";
import Turkey from "../../Turkey.png";


import {useNavigate} from "react-router-dom";



export default function Packages() {
  const navigate=useNavigate();
  return (
    <section className="packages" id="packages">
      <div className="main-txt">
        <h3>Packages</h3>
      </div>
      <div className="card-content">
        <div className="row">
          <img src={unitedstates} alt="" />
          <div className="card-body">
            <h3>United States</h3>
            <p>Enjoy your trip!</p>
            <div className="rating">
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
            </div>
            <h5>Total price (per head) :$999</h5>
            <button onClick={()=>{navigate("/Book2")}}>Book Now</button>
          </div>
        </div>
        <div className="row">
          <img src={jordan} alt="" />
          <div className="card-body">
            <h3>Jordan</h3>
            <p>Enjoy your trip!</p>
            <div className="rating">
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
            </div>
            <h5>Total price (per head) :$999</h5>
            <button onClick={()=>{navigate("/Book2")}}>Book Now</button>
          </div>
        </div>
        {/* Repeat the structure for other packages */}
        <div className="row">
          <img src={china} alt="" />
          <div className="card-body">
            <h3>China</h3>
            <p>Enjoy your trip!</p>
            <div className="rating">
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
            </div>
            <h5>Total price (per head) :$999</h5>
            <button onClick={()=>{navigate("/Book2")}}>Book Now</button>
          </div>
        </div>
        <div className="row">
          <img src={Mexico} alt="" />
          <div className="card-body">
            <h3>Mexico</h3>
            <p>Enjoy your trip!</p>
            <div className="rating">
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
            </div>
            <h5>Total price (per head) :$999</h5>
            <button onClick={()=>{navigate("/Book2")}}>Book Now</button>
          </div>
        </div>
        <div className="row">
          <img src={france} alt="" />
          <div className="card-body">
            <h3>France</h3>
            <p>Enjoy your trip!</p>
            <div className="rating">
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
            </div>
            <h5>Total price (per head) :$999</h5>
            <button onClick={()=>{navigate("/Book2")}}>Book Now</button>
          </div>
        </div>
        <div className="row">
          <img src={Greece} alt="" />
          <div className="card-body">
            <h3>Greece</h3>
            <p>Enjoy your trip!</p>
            <div className="rating">
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
            </div>
            <h5>Total price (per head) :$999</h5>
            <button onClick={()=>{navigate("/Book2")}}>Book Now</button>
          </div>
        </div>
        <div className="row">
          <img src={Spain} alt="" />
          <div className="card-body">
            <h3>Spain</h3>
            <p>Enjoy your trip!</p>
            <div className="rating">
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
            </div>
            <h5>Total price (per head) :$999</h5>
            <button onClick={()=>{navigate("/Book2")}}>Book Now</button>
          </div>
        </div>
        <div className="row">
          <img src={Turkey} alt="" />
          <div className="card-body">
            <h3>Turkey</h3>
            <p>Enjoy your trip!</p>
            <div className="rating">
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
            </div>
            <h5>Total price (per head) :$999</h5>
            <button onClick={()=>{navigate("/Book2")}}>Book Now</button>
          </div>
        </div>
        
      </div>
    </section>
  )
}
