import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const FeatureCard = (props) => {
  return (
    <>
      <div className="box btn_shadow ">
        <img src={props.image} alt="" className="image" />
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <Link>
          <FaLongArrowAltRight color="#000" className="icon-fe" />
        </Link>
      </div>
    </>
  );
};

export default FeatureCard;
