import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { languages } from "../../modules/index";

import "./index.css";

const Popup = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    languages();
  })

  const showPopup = () => {
    setShow(false);
  };
  return (
    <div className="container-popup">
      <div className="popup-text">
        <div>
          <h1 className="popup-title">
            In which language do you wish to continue?
          </h1>
          <ul className="ul-popup">
            <li>
              <Link
                to={{
                  pathname: "/",
                  hash: "#",
                }}
                onClick={showPopup}
                className="active"
                language="en"
              >
                English
              </Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: "/",
                  hash: "#",
                }}
                onClick={showPopup}
                language="fr"
              >
                Français
              </Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: "/",
                  hash: "#",
                }}
                onClick={showPopup}
                language="es"
              >
                Castellano
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Popup);
