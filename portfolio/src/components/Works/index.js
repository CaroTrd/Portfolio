import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import Navbar from "../Navbar";
import Footer from "../Footer";

import {
  sixtines,
} from "../data/data.json";

const WorksProjects = () => {
  const [click, setClick] = useState({
    nextSixtines: 1,
  });

  const accesLink = (name) => {
    if (name === "sixtines") {
      window.open("", "_blank");
    } else {
      window.open("https://github.com/CaroTrd/pfpclub", "_blank");
    }
  };

  const onNextClick = (e, name) => {
    const value = parseInt(e.target.getAttribute("data-value"), 10);
    if(name === "sixtines") {
      setClick({ ...click, nextSixtines: value });
    } else {
      setClick({ ...click, nextPfp: value });
    }
  };
  return (
    <div className="">
      <Navbar />
      <div className="container-details">
        <div className="">
          <h1 className="project-title">Sixtine's</h1>
          <div>
            {sixtines.map((elem) => {
              const imgPath =
                elem.id === click.nextSixtines ? "show" : "shadow";
              return (
                <button key={elem.id}>
                  {elem.type === "picture" ? (
                    <img
                      srcSet={elem.mobileS}
                      src={elem.mobileSWebp}
                      alt="sixtines"
                      className={imgPath}
                    />
                  ) : (
                    <div>
                      {elem.id === click.nextSixtines && (
                        <video width="700" controls>
                          <source src={elem.link} type="video/mp4" />
                        </video>
                      )}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
          {sixtines.map((elem) => {
            return (
              <button
                key={elem.id}
                type="button"
                className={click.nextSixtines === elem.id ? "slide" : "none"}
                data-value={elem.id}
                onClick={(e) => onNextClick(e, "sixtines")}
              />
            );
          })}
          <p>
            Date: <small>May-Jun 2019</small>
          </p>
          <p>Type: Client project</p>
          <p>
            Tools: ReactJS, Redux, CSS3 (responsive web design), NodeJS, ExpressJS, MySQL, GitHub, Scrum
          </p>
          <p>
            GitHub:{" "}
            <button onClick={() => accesLink("sixtines")}>
              Private repository
            </button>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default withRouter(WorksProjects);
