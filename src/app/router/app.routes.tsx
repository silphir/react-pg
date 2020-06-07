import React, { Suspense } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import styled from 'styled-components';

const PlaygroundHome = React.lazy(() => import('../pages/playground-home'));
const StyledPage = React.lazy(() => import('../pages/styled-page'));
const RxjsReduxHooksContiner = React.lazy(() => import('../pages/rxjs-redux-hooks-c'));

const Div = styled.div`
  margin 20px 0;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
`;
const StContent = styled.div`
  padding-top: 64px;
`
function Routes() {
  return (
    <StContent>
      <Suspense fallback={<Div>Loading...</Div>}>
        <Switch>
            <Route exact path="/" component={PlaygroundHome} />
            <Route path="/styled" component={StyledPage} />
            <Route path="/rxjs-redux-hooks" component={RxjsReduxHooksContiner} />
            <Redirect path="*" to="/" />
        </Switch>
      </Suspense>
    </StContent>
  );
}

export default Routes;
