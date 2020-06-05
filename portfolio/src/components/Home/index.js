import React, { useState, useEffect, useRef } from "react";
import { NavLink, withRouter } from "react-router-dom";
import executeScroll from "../../modules";

import Header from "../Header";
import Navbar from "../Navbar";
import Footer from "../Footer";

import "./index.css";


const Home = () => {
  const [click, setClick] = useState({
    press: false,
    resume: false,
  });
  
  const targetRef = useRef(null);

  useEffect(() => {
    if (window.location.hash === "#resume") {
      executeScroll(targetRef);
    }
    window.addEventListener("scroll", scrollBar);
    scrollBar();
    if (click.press) {
      if (click.resume) {
        window.open("https://www.linkedin.com/in/carolina-tirado/", "_blank");
      }
    }
  });

  const scrollBar = () => {
    let home = document.querySelector(".container");
    let resume = document.querySelector("#resume");
    let portfolio = document.querySelector("#portfolio");
    if (window.location.pathname === "/") {
      if (window.scrollY > window.innerHeight / 1.5) {
        home.classList.add("is-visible");
        resume.classList.add("visible");
        portfolio.classList.add("visible");
      } else {
        home.classList.remove("is-visible");
        resume.classList.remove("visible");
        portfolio.classList.remove("visible");
      }
    }
  };

  return (
    <div className="container">
      <Header />
      <Navbar />
      <div className="container-home" id="resume" ref={targetRef}>
        <div className="container-paper">
          <div className="paper">
            <h1 className="title">Resume</h1>
            <button
              onClick={() => setClick({ ...click, press: true, resume: true })}
              target="_blank"
              className="buttonSections"
            >
              Let's go
            </button>
          </div>
        </div>
      </div>
      <div className="container-home" id="portfolio">
        <div className="container-paper">
          <div className="paper">
            <h1 className="title">Portfolio</h1>
            <NavLink to="/portfolio" className="buttonSections">
              Let's go
            </NavLink>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default withRouter(Home);
