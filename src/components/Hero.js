import React from "react";
import "./styles/Hero.css";
import HeroImage from "./assets/gourmet.jpg";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-left">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button class="btn">Reserve a Table</button>
        </div>
        <div className="hero-right">
          <dcoiv className="image-box">
            <img src={HeroImage} alt="Serving delicious dish" />
          </dcoiv>
        </div>
      </div>
    </div>
  );
}

export default Hero;
