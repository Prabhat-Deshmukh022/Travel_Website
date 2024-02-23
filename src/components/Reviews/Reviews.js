import React from 'react';
import "./Reviews.css";
import pic1 from "../../pic-1.png";

export default function Reviews() {
  return (
    <section className="reviews" id="reviews">
      <div className="main-txt">
        <h3>What Customers Say</h3>
      </div>
      <div className="card-content">
        <div className="row">
          <h5>
            <img src={pic1} alt="" />
            Elon Musk
          </h5>
          <div className="rating">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
          <p>Amazing experience</p>
        </div>
        <div className="row">
          <h5>
            <img src="./images/pic-2.png" alt="" />
            Akshay
          </h5>
          <div className="rating">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
          <p>Luxurious travel with minimal cost</p>
        </div>
        <div className="row">
          <h5>
            <img src="./images/pic-3.png" alt="" />
            Akash
          </h5>
          <div className="rating">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
          <p>Nice tour hoping to travel soon with you</p>
        </div>
      </div>
    </section>
  )
}
