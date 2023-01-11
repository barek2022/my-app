import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { FaTimes, FaBars } from "react-icons/fa";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const links = [
    {
      id: 1,
      title: "home",
      link: "/",
    },
    {
      id: 2,
      title: "about",
      link: "/about",
    },
    {
      id: 3,
      title: "work",
      link: "/work",
    },
    {
      id: 4,
      title: "blog",
      link: "/blogs",
    },
    {
      id: 5,
      title: "contact",
      link: "/contact",
    },
  ];
  return (
    <div className="navbar">
      <div className="container navbar-container">
        <h1 className="logo">
          <Link to="/">BAREK</Link>
        </h1>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {links.map(({ id, title, link }) => (
            <li key={id}>
              <Link to={link} className="nav-item">
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "#606470" }} />
          ) : (
            <FaBars size={20} style={{ color: "#606470" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
