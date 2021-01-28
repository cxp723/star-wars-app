import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Characters from "../pages/Characters/Characters";
import Films from "../pages/Films/Films";
import Planets from "./../pages/Planets/Planets";

const Routes = () => (
  <div className="main">
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/films" />} />
      <Route path="/films" component={Films}></Route>
      <Route path="/characters" component={Characters}></Route>
      <Route path="/planets" component={Planets}></Route>
      <Redirect to="/" />
    </Switch>
  </div>
);

export default Routes;
