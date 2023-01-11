import React from "react";
import "./Hreo.css";
import { Typewriter } from "react-simple-typewriter";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import Barek from "../../assets/barek.jpg";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container hero-container">
          <div className=" ">
            <h3>WELCOME TO MY WORLD</h3>
            <h1>Hi I'm Barek Ibrahim</h1>
            <h2>
              <span className="a-hero ">a</span>
              <span>
                <Typewriter
                  words={[
                    " React js",
                    " Back-end",
                    " Front-end",
                    " Javascript!",
                  ]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              pariatur non quos exercitationem eligendi dicta optio culpa
              temporibus at aut.
            </p>
            <div className="hero-btn d-flex">
              <div>
                <h4>FIND WITH ME!</h4>
                <div className="button">
                  <button className="btn_shadow">
                    <FaInstagram fontSize={30} />
                  </button>
                  <button className="btn_shadow">
                    <a href="https://github.com/">
                      <FaLinkedinIn fontSize={30} />
                    </a>
                  </button>
                  <button className="btn_shadow">
                    <FaGithub fontSize={30} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div>
              <img src={Barek} alt="Barek" className="barek" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
