import React, { useState, useEffect, Fragment } from "react";
import { NavLink, withRouter } from "react-router-dom";
import "./index.css";

const Navbar = (props) => {
  const [nav, setNav] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", scrollBar);
    scrollBar();
    pathLocation();
  });
  const pathLocation = () => {
    let x = document.querySelector(".container-navbar");
    if (props.location.pathname === "/") {
      setNav(1);
    } else if (props.location.pathname === "/portfolio") {
      setNav(2);
      x.style.opacity = 1;
    } else {
      setNav(3);
      x.style.opacity = 1;
    }
  };
  const scrollBar = () => {
    let x = document.querySelector(".container-navbar");
    if (window.location.pathname === "/") {
      if (window.scrollY > window.innerHeight / 1.5) {
        x.classList.add("visible");
      } else {
        x.classList.remove("visible");
      }
    }
  };
  return (
    <div className="container-navbar">
      {nav === 1 && (
        <div className="navbar-lang">
          <a href="" className="active" language="en">
            EN
          </a>
          <a href="" language="fr">
            FR
          </a>
          <a href="" language="es">
            ES
          </a>
        </div>
      )}
      {nav === 2 && (
        <Fragment>
          <div className="navbar-lang">
            <a href="" className="active" language="en">
              EN
            </a>
            <a href="" language="fr">
              FR
            </a>
            <a href="" language="es">
              ES
            </a>
          </div>
          <ul className="nav">
            <li className="nav-item">
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
          </ul>
        </Fragment>
      )}
      {nav === 3 && (
        <Fragment>
          <div className="navbar-lang">
            <a href="" className="active" language="en">
              EN
            </a>
            <a href="" language="fr">
              FR
            </a>
            <a href="" language="es">
              ES
            </a>
          </div>
          <ul className="nav">
            <li className="nav-item">
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/works">Works</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/volunteer-personal-projects">Volunteer and personal projects</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/school-project">School project</NavLink>
            </li>
          </ul>
        </Fragment>
      )}
    </div>
  );
};

export default withRouter(Navbar);
