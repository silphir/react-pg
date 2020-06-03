import React from 'react';
import styled from 'styled-components';

const StDiv = styled.div`
  margin: 30px auto 0 auto;
  width: 1024px;
  font-size: 2rem;
`;
const StHeader = styled.header`
  margin-bottom: 20px;
  h1 {
    font-size: 1.5rem;
  }
`;
const StSection = styled.section`
  margin-bottom: 10px;
  font-size: 1.5rem;
`;
const StUl = styled.ul`
  list-style: none;
`;

function PlaygroundHome() {
  return (
    <StDiv>
      <StHeader>
        <h1>Playground :)</h1>
      </StHeader>
      <StSection>
        <StUl>
          <li>
            component lazy loading with router
          </li>
          <li>
            styled component
          </li>
        </StUl>
      </StSection>
    </StDiv>
  );
}

export default PlaygroundHome;
