import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Portfolio from "./components/Portfolio";

import "./App.css";
import Home from "./components/Home";
import Personal from "./components/Personal";
import Volunteer from "./components/Volunteer";
import Training from "./components/Training";
import Work from "./components/Work";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/portfolio" render={() => <Portfolio />} />
        <Route path="/work-projects" render={() => <Work />} />
        <Route
          path="/volunteer-projects"
          render={() => <Volunteer />}
        />
        <Route
          path="/personal-projects"
          render={() => <Personal />}
        />
        <Route path="/school-project" render={() => <Training />} />
        {/* <Route render={() => <NotFound />} />*/}
      </Switch>
    </div>
  );
}

export default withRouter(App);
