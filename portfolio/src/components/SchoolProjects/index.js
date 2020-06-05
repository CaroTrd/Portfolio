import React, { useState } from "react";

import Navbar from "../Navbar";
import Footer from "../Footer";

import { shakeit, calendar, pfpclub } from "../data/data.json";

import "./index.css";

const SchoolProjects = () => {
  const [click, setClick] = useState({
    nextShake: 1,
    nextCalendar: 1,
    nextPfp: 1,
  });

  const accesLink = (name) => {
    if (name === "shakeit") {
      window.open("https://github.com/CaroTrd/Shakeit", "_blank");
    } else if (name === "calendar") {
      window.open("https://github.com/ayoubochan/hackathon", "_blank");
    } else {
      window.open("https://github.com/CaroTrd/pfpclub", "_blank");
    }
  };

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
        <div className="">
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
          <p>
            Date: <small>Jan-Mar 2019</small>
          </p>
          <p>Type: Client project</p>
          <p>
            Tools: ReactJS, Redux, Redux Form,Sass ,CSS3, Responsive web design,
            Regex, NodeJS, ExpressJS, MySQL, GitHub, Scrum
          </p>
          <p>
            GitHub: <button onClick={accesLink}>Public repository</button>
          </p>
        </div>
      </div>
      <div className="container-details">
        <div className="">
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
          <p>
            Date: <small>Dec 2018 (48h)</small>
          </p>
          <p>Type: Hackathon</p>
          <p>Tools: ReactJS, NodeJS, ExpressJS, MySQL, GitHub</p>
          <p>
            GitHub:{" "}
            <button onClick={() => accesLink("calendar")}>
              Public repository
            </button>
          </p>
        </div>
      </div>
      <div className="container-details">
        <div className="">
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
          <p>
            Date: <small>Nov-Dec 2018</small>
          </p>
          <p>Type: Project</p>
          <p>
            Tools: ReactJS, CSS3, Responsive web design, External API(Spotify), GitHub
          </p>
          <p>
            GitHub:{" "}
            <button onClick={() => accesLink("shakeit")}>
              Public repository
            </button>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SchoolProjects;
