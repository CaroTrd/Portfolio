import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";

import Navbar from "../Navbar";
import Footer from "../Footer";

import { pointbook, covid } from "../data/data.json";

import "./index.css";

const VolunteerProjects = () => {
  const [click, setClick] = useState({
    nextCovid: 1,
    nextPointbook: 1,
  });

  const onNextClick = (e, name) => {
    const value = parseInt(e.target.getAttribute("data-value"), 10);
    if (name === "covid") {
      setClick({ ...click, nextCovid: value });
    } else if (name === "pointbook") {
      setClick({ ...click, nextPointbook: value });
    }
  };
  return (
    <div className="">
      <Navbar />
      <div className="container-details">
        <div className="details">
          <h1 className="project-title">Covid-Solidarity</h1>
          <div>
            {covid.map((elem) => {
              const imgPath = elem.id === click.nextCovid ? "show" : "shadow";
              return (
                <button key={elem.id}>
                  {elem.type === "picture" ? (
                    <img
                      srcSet={elem.mobileS}
                      src={elem.mobileSWebp}
                      alt="covid"
                      className={imgPath}
                    />
                  ) : (
                    <div>
                      {elem.id === click.nextCovid && (
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
            {covid.map((elem) => {
              return (
                <button
                  key={elem.id}
                  type="button"
                  className={click.nextCovid === elem.id ? "slide" : "none"}
                  data-value={elem.id}
                  onClick={(e) => onNextClick(e, "covid")}
                />
              );
            })}
          </div>

          <p>
            Date: <small>Mar-now 2020</small>
          </p>
          <p>
            Type: <small>Client project</small>
          </p>
          <p className="p-section">
            Tools:{" "}
            <small>
              HTML5, SASS, CSS3(responsive web design), PHP, Bootstrap, Github,
              Git flow
            </small>
          </p>
          <p>
            GitHub: <small>Private repository</small>
          </p>
          <p>
            Website:{" "}
            <Link
              to={{ pathname: "https://www.covid-solidarity.org" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <small>Click here</small>
            </Link>
          </p>
        </div>
      </div>
      <div className="container-details">
        <div className="details">
          <h1 className="project-title">Pointbook</h1>
          <div>
            {pointbook.map((elem) => {
              const imgPath =
                elem.id === click.nextPointbook ? "show" : "shadow";
              return (
                <button key={elem.id}>
                  {elem.type === "picture" ? (
                    <img
                      srcSet={elem.mobileS}
                      src={elem.mobileSWebp}
                      alt="pointbook"
                      className={imgPath}
                    />
                  ) : (
                    <div>
                      {elem.id === click.nextPointbook && (
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
            {pointbook.map((elem) => {
              return (
                <button
                  key={elem.id}
                  type="button"
                  className={click.nextPointbook === elem.id ? "slide" : "none"}
                  data-value={elem.id}
                  onClick={(e) => onNextClick(e, "pointbook")}
                />
              );
            })}
          </div>

          <p>
            Date: <small>Aug-now 2020</small>
          </p>
          <p>
            Type: <small>Client project</small>
          </p>
          <p className="p-section">
            Tools:{" "}
            <small>
              ReactJS & React Hooks, Redux, Redux Form, Redux-thunk, CSS3 &
              MATERIAL-UI(responsive web design), NodeJS, ExpressJS, Mailgun,
              MySQL, VPS, Ubuntu, PM2, Ngnix, FileZilla
            </small>
          </p>
          <p>
            GitHub: <small>Private repository</small>
          </p>
          {/*<p>
            Website:
            <Link to="" target="_blank" rel="noopener noreferrer">
              <small>Click here</small>
            </Link>
          </p>*/}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default withRouter(VolunteerProjects);
