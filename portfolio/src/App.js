import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Portfolio from "./components/Portfolio";

import "./App.css";
import Home from "./components/Home";
import VolunteersProjects from "./components/VolunteersProjects";
import SchoolProjects from "./components/SchoolProjects";
import Works from "./components/Works";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/portfolio" render={() => <Portfolio />} />
        <Route path="/works" render={() => <Works />} />
        <Route
          className="container-register"
          path="/volunteer-personal-projects"
          render={() => <VolunteersProjects />}
        />
        <Route path="/school-project" render={() => <SchoolProjects />} />
        {/* <Route render={() => <NotFound />} />*/}
      </Switch>
    </div>
  );
}

export default withRouter(App);
