import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  margin: 20px auto 0 auto;
  width: 1024px;
  font-size: 2rem;
`;
const ContentHeader = styled.div`
  h1 {
    font-size: 1.5rem;
  }
`;

function Playground() {
  return (
    <Div>
      <ContentHeader>
        <h1>Playground :)</h1>
      </ContentHeader>
    </Div>
  );
}

export default Playground;
