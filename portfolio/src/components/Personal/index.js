import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";

import Navbar from "../Navbar";
import Footer from "../Footer";

import { eboutique, caneva, phonebook, recipes } from "../data/data.json";

const PersonalProjects = () => {
  const [click, setClick] = useState({
    nextRecipes: 1,
    nextPhonebook: 1,
    nextCaneva: 1,
    nextEboutique: 1,
  });

  const onNextClick = (e, name) => {
    const value = parseInt(e.target.getAttribute("data-value"), 10);
    if (name === "recipes") {
      setClick({ ...click, nextRecipes: value });
    } else if (name === "eboutique") {
      setClick({ ...click, nextEboutique: value });
    } else if (name === "phonebook") {
      setClick({ ...click, nextPhonebook: value });
    } else if (name === "caneva") {
      setClick({ ...click, nextCaneva: value });
    }
  };
  return (
    <div className="">
      <Navbar />
      <div className="container-details">
        <div className="details">
          <h1 className="project-title">Recipes</h1>
          <div>
            {recipes.map((elem) => {
              const imgPath = elem.id === click.nextRecipes ? "show" : "shadow";
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
          </div>
          <p>
            Date: <small>Apr 2020</small>
          </p>
          <p>
            Type: <small>Interview test</small>
          </p>
          <p className="p-section">
            Tools:{" "}
            <small>
              VueJS, Vuex, Axios, External API(Edamam & Spotify), CSS3
              (responsive web design), Skeleton Website, GitHub, Git flow
            </small>
          </p>
          <p>
            GitHub: <small>Private repository</small>
          </p>
        </div>
      </div>
      <div className="container-details">
        <div className="details">
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
          </div>
          <p>
            Date: <small>Nov 2019</small>
          </p>
          <p>
            Type: <small>Interview test</small>
          </p>
          <p className="p-section">
            Tools:{" "}
            <small>
              ReactJS & React Hooks, Redux, Redux-Thunk, CSS3, Regex, NodeJS,
              ExpressJS, MySQL, GitHub
            </small>
          </p>
          <p>
            GitHub:{" "}
            <Link
              to={{
                pathname:
                  "https://github.com/CaroTrd/phonebook-react-hooks/tree/dev",
              }}
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
          <h1 className="project-title">Caneva</h1>
          <div>
            {caneva.map((elem) => {
              const imgPath = elem.id === click.nextCaneva ? "show" : "shadow";
              return (
                <button key={elem.id}>
                  {elem.type === "picture" ? (
                    <img
                      srcSet={elem.mobileS}
                      src={elem.mobileSWebp}
                      alt="caneva"
                      className={imgPath}
                    />
                  ) : (
                    <div>
                      {elem.id === click.nextCaneva && (
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
            {caneva.map((elem) => {
              return (
                <button
                  key={elem.id}
                  type="button"
                  className={click.nextCaneva === elem.id ? "slide" : "none"}
                  data-value={elem.id}
                  onClick={(e) => onNextClick(e, "caneva")}
                />
              );
            })}
          </div>
          <p>
            Date: <small>May-abandoned 2019</small>
          </p>
          <p>
            Type: <small>Personal project</small>
          </p>
          <p className="p-section">
            Tools:{" "}
            <small>
              ReactJS, Redux, Redux-Thunk, CSS3, NodeJS, MySQL, GitHub
            </small>
          </p>
          <p>
            GitHub:{" "}
            <Link
              to={{ pathname: "https://github.com/CaroTrd/Caneva" }}
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
          </div>
          <p>
            Date: <small>Apr 2019</small>
          </p>
          <p>
            Type: <small>Personal project</small>
          </p>
          <p className="p-section">
            Tools:{" "}
            <small>
              ReactJS & React Hooks, External API(Paypal), Redux, Redux-Thunk,
              CSS3, NodeJS, MySQL, GitHub
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

export default withRouter(PersonalProjects);
