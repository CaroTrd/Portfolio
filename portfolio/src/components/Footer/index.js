import React from "react";
import { Link, withRouter } from "react-router-dom";

import gitwebp from "./img/github.webp";
import gitpng from "./img/github.png";
import pxwebp from "./img/500px.webp";
import pxpng from "./img/500px.png" ; 
import instawebp from "./img/instagram.webp";
import instapng from "./img/instagram.png" ; 
/*import gmailwebp from "./img/gmail.webp";
import gmailpng from "./img/gmail.png" ;*/ 

import "./index.css";

const Footer = () => {
  return (
    <div className="container-footer">
      <div>© 2020 Carolina Tirado</div>
      <ul className="footer">
        <li className="footer-item">
          <Link to={{ pathname: "https://github.com/CaroTrd" }} target="_blank" rel="noopener noreferrer">
            <img
              srcSet={gitpng}
              src={gitwebp}
              className="logo"
              alt="github"
            />
          </Link>
        </li>
        <li className="footer-item">
          <Link to={{ pathname: "https://500px.com/micarolyy" }} target="_blank" rel="noopener noreferrer">
            <img
              srcSet={pxpng}
              src={pxwebp}
              className="logo"
              alt="500px"
            />
          </Link>
        </li>
        <li className="footer-item">
          <Link to={{ pathname: "https://www.instagram.com/carotrd_/" }} target="_blank" rel="noopener noreferrer">
            <img
              className="logo"
              srcSet={instapng}
              src={instawebp}
              alt="instagram"
            />
          </Link>
        </li>
        {/*<li className="footer-item">
          <a href="" target="_blank" rel="noopener">
            <img
              className="logo"
              srcSet={gmailpng}
              src={gmailwebp}
              alt="gmail"
            />
          </a>
        </li>*/}
      </ul>
    </div>
  );
}

export default withRouter(Footer);
