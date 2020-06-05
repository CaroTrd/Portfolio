import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import Navbar from "../Navbar";
import Footer from "../Footer";

import {
  eboutique,
  phonebook,
  pointbook,
  recipes,
  covid,
} from "../data/data.json";

import "./index.css";

const VolunteerProjects = () => {
  const [click, setClick] = useState({
    nextCovid: 1,
    nextPointbook: 1,
    nextRecipes: 1,
    nextPhonebook: 1,
    nextEboutique: 1
  });

  const accesLink = (name) => {
    if (name === "covid") {
      window.open("https://www.covid-solidarity.org", "_blank");
    } else if (name === "pointbook") {
      window.open("", "_blank");
    } else if (name === "recipes") {
      window.open("", "_blank");
    } else if (name === "phonebook") {
      window.open("https://github.com/CaroTrd/phonebook-react-hooks/tree/dev", "_blank");
    } 
  };

  const onNextClick = (e, name) => {
    const value = parseInt(e.target.getAttribute("data-value"), 10);
    if (name === "covid") {
      setClick({ ...click, nextCovid: value });
    } else if (name === "pointbook") {
      setClick({ ...click, nextPointbook: value });
    } else if (name === "recipes") {
      setClick({ ...click, nextRecipes: value });
    } else if (name === "eboutique") {
      setClick({ ...click, nextEboutique: value });
    }  else if (name === "phonebook") {
      setClick({ ...click, nextPhonebook: value });
    }
  };
  return (
    <div className="">
      <Navbar />
      <div>
        <h1 className="title">Volunteer</h1>
      </div>
      <div className="container-details">
        <div className="">
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
          <p>
            Date: <small>Mar-now 2020</small>
          </p>
          <p>Type: Client project</p>
          <p>Tools: HTML5, SASS, CSS3, PHP, Bootstrap, Responsive web design, Github, Git flow</p>
          <p>
            GitHub:{" "}
            <button onClick={() => accesLink("covid")}>
              Private repository
            </button>
          </p>
        </div>
      </div>
      <div className="container-details">
        <div className="">
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
          <p>
            Date: <small>Aug-now 2020</small>
          </p>
          <p>Type: Client project</p>
          <p>
            Tools: ReactJS & React Hooks, Redux, Redux Form, Redux-thunk, CSS3 & MATERIAL-UI, Responsive web design,
            NodeJS, ExpressJS, Mailgun, MySQL, VPS, Ubuntu, PM2, Ngnix, FileZilla
          </p>
          <p>
            GitHub:{" "}
            <button onClick={() => accesLink("pointbook")}>
              Private repository
            </button>
          </p>
        </div>
      </div>
      <div>
        <h1 className="title">Personal</h1>
      </div>
      <div className="container-details">
        <div className="">
          <h1 className="project-title">Recipes</h1>
          <div>
            {recipes.map((elem) => {
              const imgPath =
                elem.id === click.nextRecipes ? "show" : "shadow";
              return (
                <button key={elem.id}>
                  {elem.type === "picture" ? (
                    <img
                      srcSet={elem.mobileS}
                      src={elem.mobileSWebp}
                      alt="recipes"
                      className={imgPath}
                    />
                  ) : (
                    <div>
                      {elem.id === click.nextRecipes && (
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
          {recipes.map((elem) => {
            return (
              <button
                key={elem.id}
                type="button"
                className={click.nextRecipes === elem.id ? "slide" : "none"}
                data-value={elem.id}
                onClick={(e) => onNextClick(e, "recipes")}
              />
            );
          })}
          <p>
            Date: <small>Apr 2020</small>
          </p>
          <p>Type: Interview test</p>
          <p>
            Tools: VueJS, Vuex, Axios, External API(Edamam & Spotify), CSS3 (responsive web design), GitHub, Git flow
          </p>
          <p>
            GitHub:{" "}
            <button onClick={() => accesLink("sixtines")}>
              Private repository
            </button>
          </p>
        </div>
      </div>
      <div className="container-details">
        <div className="">
          <h1 className="project-title">eBoutique</h1>
          <div>
            {eboutique.map((elem) => {
              const imgPath =
                elem.id === click.nextEboutique ? "show" : "shadow";
              return (
                <button key={elem.id}>
                  {elem.type === "picture" ? (
                    <img
                      srcSet={elem.mobileS}
                      src={elem.mobileSWebp}
                      alt="eboutique"
                      className={imgPath}
                    />
                  ) : (
                    <div>
                      {elem.id === click.nextEboutique && (
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
          {eboutique.map((elem) => {
            return (
              <button
                key={elem.id}
                type="button"
                className={click.nextEboutique === elem.id ? "slide" : "none"}
                data-value={elem.id}
                onClick={(e) => onNextClick(e, "eboutique")}
              />
            );
          })}
          <p>
            Date: <small>Apr 2020</small>
          </p>
          <p>Type: Interview test</p>
          <p>
            Tools: ReactJS & React Hooks, External API(Paypal), Redux, Redux-Thunk, CSS3, NodeJS, MySQL, GitHub
          </p>
          <p>
            GitHub:
            <button onClick={() => accesLink("sixtines")}>
              Private repository
            </button>
          </p>
        </div>
      </div>
      <div className="container-details">
        <div className="">
          <h1 className="project-title">Phonebook</h1>
          <div>
            {phonebook.map((elem) => {
              const imgPath =
                elem.id === click.nextPhonebook ? "show" : "shadow";
              return (
                <button key={elem.id}>
                  {elem.type === "picture" ? (
                    <img
                      srcSet={elem.mobileS}
                      src={elem.mobileSWebp}
                      alt="phonebook"
                      className={imgPath}
                    />
                  ) : (
                    <div>
                      {elem.id === click.nextPhonebook && (
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
          {phonebook.map((elem) => {
            return (
              <button
                key={elem.id}
                type="button"
                className={click.nextPhonebook === elem.id ? "slide" : "none"}
                data-value={elem.id}
                onClick={(e) => onNextClick(e, "phonebook")}
              />
            );
          })}
          <p>
            Date: <small>Apr 2020</small>
          </p>
          <p>Type: Interview test</p>
          <p>
            Tools: ReactJS & React Hooks, Redux, Redux-Thunk, CSS3, Regex, NodeJS, ExpressJS, MySQL, GitHub
          </p>
          <p>
            GitHub:
            <button onClick={() => accesLink("phonebook")}>
              Public repository
            </button>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default withRouter(VolunteerProjects);
