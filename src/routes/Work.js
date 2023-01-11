import React from "react";
import NavBar from "../components/NabBar/NavBar";
import Portfolio from "../components/Portfolio/Portfolio";
import WorkHome from "../components/Portfolio/WorkHome";
import PricingCard from "../components/PricingCard/PricingCard";

function Work() {
  return (
    <div>
      <NavBar />
      <WorkHome />
      <Portfolio />
      <PricingCard />
    </div>
  );
}

export default Work;
