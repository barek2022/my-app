import React from "react";
import { Link } from "react-router-dom";
import "./PricingCard.css";

const PricingCard = () => {
  return (
    <div className="pricing">
      <div className="heading text-center ">
        <h4>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4>
        <h1>My Portfolio</h1>
      </div>
      <div className="card-container container grid">
        <div className="card btn_shadow">
          <h3>- Basic -</h3>
          <span className="bar"></span>
          <p className="btc">$ 100</p>
          <p>- 3 Days -</p>
          <p>- 3 Pages -</p>
          <p>- Featured -</p>
          <p className="p-btns">- Responsive Design -</p>
          <Link to="/contact" className="btns">
            PURCHASE NOW
          </Link>
        </div>

        <div className="card btn_shadow">
          <h3>- Premium -</h3>
          <span className="bar"></span>
          <p className="btc">$ 200</p>
          <p>- 2 Days -</p>
          <p>- 5 Pages -</p>
          <p>- Featured -</p>
          <p className="p-btns">- Responsive Design -</p>
          <Link to="/contact" className="btns">
            PURCHASE NOW
          </Link>
        </div>
        <div className="card btn_shadow">
          <h3>- Business -</h3>
          <span className="bar"></span>
          <p className="btc">$ 300</p>
          <p>- 5 Days -</p>
          <p>- 8 Pages -</p>
          <p>- Featured -</p>
          <p className="p-btns">- Responsive Design -</p>
          <Link to="/contact" className="btns">
            PURCHASE NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
