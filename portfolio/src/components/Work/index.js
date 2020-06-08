import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";

import Navbar from "../Navbar";
import Footer from "../Footer";

import { ricou, sixtines } from "../data/data.json";

const WorksProjects = () => {
  const [click, setClick] = useState({
    nextSixtines: 1,
    nextRicou: 1,
  });

  const onNextClick = (e, name) => {
    const value = parseInt(e.target.getAttribute("data-value"), 10);
    if (name === "sixtines") {
      setClick({ ...click, nextSixtines: value });
    } else {
      setClick({ ...click, nextRicou: value });
    }
  };
  return (
    <div className="">
      <Navbar />
      <div className="container-details">
        <div className="details">
          <h1 className="project-title">Sebastine Ricou</h1>
          <div>
            {ricou.map((elem) => {
              const imgPath = elem.id === click.nextRicou ? "show" : "shadow";
              return (
                <button key={elem.id}>
                  {elem.type === "picture" ? (
                    <img
                      srcSet={elem.mobileS}
                      src={elem.mobileSWebp}
                      alt="ricou"
                      className={imgPath}
                    />
                  ) : (
                    <div>
                      {elem.id === click.nextRicou && (
                        <video className="video" controls>
                          <source src={elem.link} type="video/mp4" />
                        </video>
                      )}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
          <div>
            {ricou.map((elem) => {
              return (
                <button
                  key={elem.id}
                  type="button"
                  className={click.nextRicou === elem.id ? "slide" : "none"}
                  data-value={elem.id}
                  onClick={(e) => onNextClick(e, "ricou")}
                />
              );
            })}
          </div>

          <p>
            Date: <small>May 2019-Feb 2020</small>
          </p>
          <p>
            Type: <small>Client project</small>
          </p>
          <p className="p-section">
            Tools:{" "}
            <small>
              HTML, CSS3 (responsive web design), JavaScript & Photoshop
            </small>
          </p>
          <p>
            Websites:
            <Link
              to={{ pathname: "http://www.ricougallery.com/2020/" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <small>Ricou Gallery</small>
            </Link>
            <Link
              to={{ pathname: "https://www.sebastienricou.com" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <small>Sebastine Ricou</small>
            </Link>
            <Link
              to={{ pathname: "http://www.a-t-t-i-c.com" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <small>ATTIC</small>
            </Link>
          </p>
        </div>
      </div>
      <div className="container-details">
        <div className="details">
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
                        <video className="video" controls>
                          <source src={elem.link} type="video/mp4" />
                        </video>
                      )}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
          <div>
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
          </div>
          <p>
            Date: <small>May-Jun 2019</small>
          </p>
          <p>
            Type: <small>Client project</small>
          </p>
          <p className="p-section">
            Tools:{" "}
            <small>
              ReactJS, Redux, CSS3 (responsive web design), NodeJS, ExpressJS,
              MySQL, GitHub, Scrum
            </small>
          </p>
          <p>
            GitHub: <small>Private repository</small>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default withRouter(WorksProjects);
