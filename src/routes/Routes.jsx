import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Films from '../pages/Films/Films';
import withSuspense from '../hocs/withSuspense';

const Characters = React.lazy(() => import('../pages/Characters/Characters'));
const Planets = React.lazy(() => import('./../pages/Planets/Planets'));

const Routes = () => (
  <div className="main">
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/films" />} />
      <Route path="/films" component={Films} />
      <Route path="/characters" component={withSuspense(Characters)} />
      <Route path="/planets" component={withSuspense(Planets)} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default Routes;
