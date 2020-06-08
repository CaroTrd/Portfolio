import React, { useState, useEffect } from "react";
import { NavLink, withRouter } from "react-router-dom";

/*import { languages } from "../../modules/index";*/

import "./index.css";

const Navbar = (props) => {
  const [nav, setNav] = useState(0);

  useEffect(() => {
    pathLocation();
    /*languages();*/
    onScroll();
  });

  const onScroll = () => {
    window.onscroll = function () {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      console.log(document.getElementById("progress").style !== null, document.getElementById("progress").style)
      if (scrolled !== null || document.getElementById("progress").style !== null) {
        document.getElementById("progress").style.width = scrolled + "%";
      }
    };
  };

  const pathLocation = () => {
    if (props.location.pathname === "/") {
      setNav(1);
    } else if (props.location.pathname === "/portfolio") {
      setNav(2);
    } else {
      setNav(3);
    }
  };

  return (
    <div>
      {nav === 1 && <div className="progress-bar" id="progress"></div>}
      {nav === 2 && (
        <div>
          <div className="container-navbar">
            {/*<div className="navbar-lang">
              <NavLink to="#" className="active" language="en">
                EN
              </NavLink>
              <NavLink to="#" language="fr">
                FR
              </NavLink>
              <NavLink to="#" language="es">
                ES
              </NavLink>
      </div>*/}
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
          </div>
          <div className="progress-bar" id="progress"></div>
        </div>
      )}
      {nav === 3 && (
        <div>
          <div className="container-navbar">
            {/*<div className="navbar-lang">
              <NavLink to="#" className="active" language="en">
                EN
              </NavLink>
              <NavLink to="#" language="fr">
                FR
              </NavLink>
              <NavLink to="#" language="es">
                ES
              </NavLink>
      </div>*/}
            <ul className="nav">
              <li className="nav-item">
                <NavLink exact to="/" className="active">
                  Home
                </NavLink>
              </li>
              <li className="dropdown">
                <NavLink to="/portfolio" className="dropbtn">
                  Portfolio
                </NavLink>
                <ul className="dropdown-content">
                  <li className="nav-item">
                    <NavLink to="/work-projects">Work projects</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/volunteer-projects">
                      Volunteer projects
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/personal-projects">Personal projects</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/school-project">Training project</NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="progress-bar" id="progress"></div>
        </div>
      )}
    </div>
  );
};

export default withRouter(Navbar);
