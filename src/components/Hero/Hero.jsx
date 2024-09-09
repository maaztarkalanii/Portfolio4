import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>Building Digital Experiences That Inspire</h2>
        <p>
          Passionate Frontend Developer | Transforming ideas into Seamless and
          visually stunning Web Solutions
        </p>
      </div>

      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src="./assets/images/react.png" alt="" />
          </div>
          <img src="/assets/images/realimg.JPG" alt="" />
        </div>
        <div>
          <div className="tech-icon">
            <img src="./assets/images/logo1.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/logo2.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/logo3.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
