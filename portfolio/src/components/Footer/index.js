import React, { useState, useEffect } from "react";
import gitwebp from "./img/github.webp";
import gitpng from "./img/github.png";
import pxwebp from "./img/500px.png";
import pxpng from "./img/500px.webp" ; 
import instawebp from "./img/instagram.png";
import instapng from "./img/instagram.webp" ; 
import gmailwebp from "./img/gmail.png";
import gmailpng from "./img/gmail.webp" ; 
import "./index.css";

const Footer = () => {
  const [click, setClick] = useState({
    press: false,
    git: false,
    px: false,
    insta: false,
  })
  useEffect(() => {
    if(click.press) {
      if(click.git) {
        window.open("https://github.com/CaroTrd", "_blank")
      } else if(click.px) {
        window.open("https://500px.com/micarolyy", "_blank")
      } else if(click.insta) {
        window.open("https://www.instagram.com/carotrd_/", "_blank")
      }
    }
  })
  return (
    <div className="container-footer">
      <div>© 2020 Carolina Tirado</div>
      <ul className="footer">
        <li className="footer-item">
          <button onClick={() => setClick({...click, press: true, git: true})}>
            <img
              srcSet={gitpng}
              src={gitwebp}
              className="logo"
              alt="github"
            />
          </button>
        </li>
        <li className="footer-item">
          <button onClick={() => setClick({...click, press: true, px: true})}>
            <img
              className="logo"
              srcSet={pxpng}
              src={pxwebp}
              alt="500px"
            />
          </button>
        </li>
        <li className="footer-item">
          <button onClick={() => setClick({...click, press: true, insta: true})}>
            <img
              className="logo"
              srcSet={instapng}
              src={instawebp}
              alt="instagram"
            />
          </button>
        </li>
        <li className="footer-item">
          <a href="" target="_blank" rel="noopener">
            <img
              className="logo"
              srcSet={gmailpng}
              src={gmailwebp}
              alt="gmail"
            />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
