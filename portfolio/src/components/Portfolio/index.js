import React from "react";
import { NavLink, withRouter } from "react-router-dom";

import Navbar from "../Navbar";
import Footer from "../Footer";

import "./index.css";

function Portfolio() {
  return (
    <div className="portfolio-section">
      <Navbar />
      <div className="container-portfolio">
        <div className="container-paper work">
          <div className="paper">
            <h1 className="title" id="#portfolioTitle">Work projects</h1>
            <NavLink to="/work-projects" className="button section">
              Let's go
            </NavLink>
          </div>
        </div>
      </div>
      <div className="container-portfolio">
        <div className="container-paper volunteer">
          <div className="paper">
            <h1 className="title">Volunteer projects</h1>
            <NavLink to="/volunteer-projects" className="button section">
              Let's go
            </NavLink>
          </div>
        </div>
      </div>
      <div className="container-portfolio">
        <div className="container-paper personal">
          <div className="paper">
            <h1 className="title">Personal projects</h1>
            <NavLink to="/personal-projects" className="button section">
              Let's go
            </NavLink>
          </div>
        </div>
      </div>
      <div className="container-portfolio">
        <div className="container-paper training">
          <div className="paper">
            <h1 className="title">Training projects</h1>
            <NavLink to="/school-project" className="button section">
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
