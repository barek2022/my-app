import React from "react";
import "./BlogHome.css";
import Blazek from "../../../assets/blazek.jpg";

const BlogHome = () => {
  return (
    <div className="blog-home blog-container ">
      <div className="container blog-container">
        <img src={Blazek} alt="" className="blazek box" />
      </div>
    </div>
  );
};

export default BlogHome;
