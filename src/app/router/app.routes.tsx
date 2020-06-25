import React, { Suspense } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import styled from 'styled-components';

const Home = React.lazy(() => import('../pages/home.page'));
const Sample = React.lazy(() => import('../pages/sample.page'));
const Users = React.lazy(() => import('../pages/users/users.page'));
const Signup = React.lazy(() => import('../pages/signup.page'));

const Div = styled.div`
  margin 20px 0;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
`;
const StContent = styled.div`
  padding-top: 64px;
`;
function Routes() {
  return (
    <StContent>
      <Suspense fallback={<Div>Loading...</Div>}>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/sample" component={Sample} />
            <Route path="/users" component={Users} />
            <Route path="/signup" component={Signup} />
            <Redirect path="*" to="/" />
        </Switch>
      </Suspense>
    </StContent>
  );
}

export default Routes;
