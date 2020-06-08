import React from "react";
import { Link, withRouter } from "react-router-dom";

import "./index.css";

function Header() {
  return (
    <div className="container-header">
      <div className="header-paper">
        <h1 id="headerTitle">Hello,</h1>
        <p id="headerFirst">I am Carolina Tirado.</p>
        <p id="headerSecond">I am a front-end web developer.</p>
        <Link
          to={{
            pathname: "/",
            hash: "#resume",
            state: {
              fromHome: true,
            },
          }}
          id="headerThird"
          className="button introduction"
        >
          Welcome!
        </Link>
      </div>
    </div>
  );
}

export default withRouter(Header);
