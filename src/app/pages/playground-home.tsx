import React from 'react';
import styled from 'styled-components';
import { StPageHeader, StSection, StPageContainer } from '../components/common-styled';

const StOl = styled.ol`
  font-size: 1.5rem;
  padding-left: 40px;
`;

function PlaygroundHome() {
  return (
    <StPageContainer>
      <StPageHeader>
        <h1>Playground :)</h1>
      </StPageHeader>
      <StSection>
        <StOl>
          <li>
            component lazy loading with router
          </li>
          <li>
            styled component
          </li>
          <li>
            redux, hooks, rxjs
          </li>
        </StOl>
      </StSection>
    </StPageContainer>
  );
}

export default PlaygroundHome;
