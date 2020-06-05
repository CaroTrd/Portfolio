import React, { useEffect, useRef }  from "react";
import { NavLink, withRouter } from "react-router-dom";
import executeScroll from "../../modules";

import Navbar from "../Navbar";
import Footer from "../Footer";

import "./index.css";

function Portfolio() {
  const targetRef = useRef(null);
  useEffect(() => {
    if (window.location.pathname === "/portfolio") {
      executeScroll(targetRef);
    }
  });
  return (
    <div className="portfolio" ref={targetRef}>
      <Navbar />
      <div className="container-portfolio">
        <div className="container-paper">
          <div className="paper">
            <h1 className="title">Works</h1>
            <NavLink to="/works" className="buttonSections">
              Let's go
            </NavLink>
          </div>
        </div>
      </div>
      <div className="container-portfolio">
        <div className="container-paper">
          <div className="paper">
            <h1 className="title">Volunteer and personal projects</h1>
            <NavLink
              to="/volunteer-personal-projects"
              className="buttonSections"
            >
              Let's go
            </NavLink>
          </div>
        </div>
      </div>
      <div className="container-portfolio">
        <div className="container-paper">
          <div className="paper">
            <h1 className="title">School projects</h1>
            <NavLink
              to="/school-project"
              className="buttonSections"
            >
              Let's go
            </NavLink>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default withRouter(Portfolio);
