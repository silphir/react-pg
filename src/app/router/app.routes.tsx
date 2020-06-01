import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Playground from '../pages/playground';
import TestBed from '../pages/testbed';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Playground}/>
      <Route path="/testbed" component={TestBed} />
      <Route path="/temp" />
      <Redirect path="*" to="/" />
    </Switch>
  );
}

export default Routes;
