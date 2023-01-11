import React from "react";
import AboutHero from "../components/Features/AboutHero";
import Features from "../components/Features/Features";
import Resume from "../components/Features/Resume/Resume";
import NavBar from "../components/NabBar/NavBar";

const About = () => {
  return (
    <div>
      <NavBar />
      <AboutHero />
      <Features />
      <Resume />
    </div>
  );
};

export default About;
