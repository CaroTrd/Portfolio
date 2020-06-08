import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

import { shakeit, calendar, pfpclub } from "../data/data.json";

import "./index.css";

const TrainingProjects = () => {
  const [click, setClick] = useState({
    nextShake: 1,
    nextCalendar: 1,
    nextPfp: 1,
  });

  const onNextClick = (e, name) => {
    const value = parseInt(e.target.getAttribute("data-value"), 10);
    if (name === "shakeit") {
      setClick({ ...click, nextShake: value });
    } else if (name === "calendar") {
      setClick({ ...click, nextCalendar: value });
    } else {
      setClick({ ...click, nextPfp: value });
    }
  };

  return (
    <div className="">
      <Navbar />
      <div className="container-details">
        <div className="details">
          <h1 className="project-title">PFP Club</h1>
          <div>
            {pfpclub.map((elem) => {
              const imgPath = elem.id === click.nextPfp ? "show" : "shadow";
              return (
                <button key={elem.id}>
                  {elem.type === "picture" ? (
                    <img
                      srcSet={elem.mobileS}
                      src={elem.mobileSWebp}
                      alt="pfpclub"
                      className={imgPath}
                    />
                  ) : (
                    <div>
                      {elem.id === click.nextPfp && (
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
            {pfpclub.map((elem) => {
              return (
                <button
                  key={elem.id}
                  type="button"
                  className={click.nextPfp === elem.id ? "slide" : "none"}
                  data-value={elem.id}
                  onClick={(e) => onNextClick(e)}
                />
              );
            })}
          </div>
          <p>
            Date: <small>Jan-Mar 2019</small>
          </p>
          <p>
            Type: <small>Client project</small>
          </p>
          <p className="p-section">
            Tools:{" "}
            <small>
              ReactJS, Redux, Redux Form,Sass ,CSS3 (responsive web design),
              Regex, NodeJS, ExpressJS, MySQL, GitHub, Scrum
            </small>
          </p>
          <p>
            GitHub:
            <Link
              to={{ pathname: "https://github.com/CaroTrd/pfpclub" }}
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
          <h1 className="project-title">Calendar</h1>
          <div>
            {calendar.map((elem) => {
              const imgPath =
                elem.id === click.nextCalendar ? "show" : "shadow";
              return (
                <button key={elem.id}>
                  {elem.type === "picture" ? (
                    <img
                      srcSet={elem.mobileS}
                      src={elem.mobileSWebp}
                      alt="calendar"
                      className={imgPath}
                    />
                  ) : (
                    <div>
                      {elem.id === click.nextCalendar && (
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
            {calendar.map((elem) => {
              return (
                <button
                  key={elem.id}
                  type="button"
                  className={click.nextCalendar === elem.id ? "slide" : "none"}
                  data-value={elem.id}
                  onClick={(e) => onNextClick(e, "calendar")}
                />
              );
            })}
          </div>
          <p>
            Date: <small>Dec 2018 (48h)</small>
          </p>
          <p>
            Tools: <small>ReactJS, NodeJS, ExpressJS, MySQL, GitHub</small>
          </p>
          <p>
            GitHub:{" "}
            <Link
              to={{ pathname: "https://github.com/ayoubochan/hackathon" }}
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
          <h1 className="project-title">Shake it!</h1>
          <div>
            {shakeit.map((elem) => {
              const imgPath = elem.id === click.nextShake ? "show" : "shadow";
              return (
                <button key={elem.id}>
                  {elem.type === "picture" ? (
                    <img
                      srcSet={elem.mobileS}
                      src={elem.mobileSWebp}
                      alt="shakeit"
                      className={imgPath}
                    />
                  ) : (
                    <div>
                      {elem.id === click.nextShake && (
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
            {shakeit.map((elem) => {
              return (
                <button
                  key={elem.id}
                  type="button"
                  className={click.nextShake === elem.id ? "slide" : "none"}
                  data-value={elem.id}
                  onClick={(e) => onNextClick(e, "shakeit")}
                />
              );
            })}
          </div>
          <p>
            Date: <small>Nov-Dec 2018</small>
          </p>
          <p className="p-section">
            Tools:{" "}
            <small>
              ReactJS, CSS3 (responsive web design), External API(Spotify),
              GitHub
            </small>
          </p>
          <p>
            GitHub:
            <Link
              to={{ pathname: "https://github.com/CaroTrd/Shakeit" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <small>Click here</small>
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default withRouter(TrainingProjects);
