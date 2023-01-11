import React from "react";
import Blog from "../components/Blogs/Blog";
import BlogHome from "../components/Blogs/BlogHome/BlogHome";
import NavBar from "../components/NabBar/NavBar";

const Blogs = () => {
  return (
    <div>
      <NavBar />
      <BlogHome />
      <Blog />
    </div>
  );
};

export default Blogs;
