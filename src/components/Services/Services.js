import React, { Component } from 'react';
import "./Services.css";

export default class Services extends Component {
  render() {
    return (
        <section className="services" id="services">
      <div className="heading">
        <h3>Services</h3>
      </div>
      <div className="card-content">
        <div className="row">
          <i className="fas fa-globe-asia"></i>
          <div className="card-body">
            <h3>Around The World</h3>
            <p>
              Our travel agency specializes in taking you on a journey around the world, allowing you to explore diverse destinations and cultures
            </p>
          </div>
        </div>
        <div className="row">
          <i className="fas fa-plane"></i>
          <div className="card-body">
            <h3>Fastest Travel</h3>
            <p>
              We understand the importance of time, and that's why we prioritize fast and efficient travel arrangements, ensuring you get to your destination swiftly
            </p>
          </div>
        </div>
        <div className="row">
          <i className="fas fa-hotel"></i>
          <div className="card-body">
            <h3>Affordable Hotels</h3>
            <p>
              We believe that comfortable accommodations don't have to break the bank. Our agency offers a range of affordable hotel options that provide both comfort and convenience.
            </p>
          </div>
        </div>
        <div className="row">
          <i className="fas fa-bullhorn"></i>
          <div className="card-body">
            <h3>Safety Guide</h3>
            <p>
              Your safety is our top priority. Our experienced team provides comprehensive safety guides and recommendations to ensure you have a secure and worry-free travel experience
            </p>
          </div>
        </div>
      </div>
    </section>
    )
  }
}
