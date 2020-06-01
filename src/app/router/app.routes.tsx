import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Playground from '../pages/playground';
import Styled from '../pages/styled';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Playground}/>
      <Route path="/styled" component={Styled} />
      <Redirect path="*" to="/" />
    </Switch>
  );
}

export default Routes;
