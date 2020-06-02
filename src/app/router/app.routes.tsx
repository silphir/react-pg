import React, { Suspense } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import styled from 'styled-components';

const Playground = React.lazy(() => import('../pages/playground'));
const TestBed = React.lazy(() => import('../pages/testbed'));

const Div = styled.span`
  margin 20px 0;
  text-align: center;
  display: block;
  font-size: 1.2rem;
  font-weight: bold;
`;
function Routes() {
  return (
    <Suspense fallback={<Div>Loading...</Div>}>
      <Switch>
        <Route exact path="/" component={Playground} />
        <Route path="/testbed" component={TestBed} />
        <Route path="/temp" />
        <Redirect path="*" to="/" />
      </Switch>
    </Suspense>
  );
}

export default Routes;
