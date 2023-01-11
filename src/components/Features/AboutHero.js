import React from "react";
import "./AboutHero.css";
import BR from "../../assets/BR.jpg";

const AboutHero = () => {
  return (
    <div className="about about-container ">
      <div className="content">
        <img src={BR} alt="" className="about-work box" />
      </div>
    </div>
  );
};

export default AboutHero;
