import React from 'react';
import "./Gallery.css";
import p1 from "../../p1.jpg";
import p2 from "../../p2.png";
import p3 from "../../p3.png";
import p4 from "../../p4.png";
import p5 from "../../p5.png";

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="heading">
        <h3>OUR GALLERY <i className="fas fa-arrow-down"></i></h3>
      </div>
      <div className="gallery-card">
        <div className="row">
          <img src={p1} alt="" />
        </div>
        <div className="row">
          <img src={p2} alt="" />
        </div>
        <div className="row">
          <img src={p3} alt="" />
        </div>
        <div className="row">
          <img src={p4} alt="" />
        </div>
        <div className="row">
          <img src={p5} alt="" />
        </div>
      </div>
    </section>
  )
}
