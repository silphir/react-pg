import React from 'react';
import styled from 'styled-components';

const StDiv = styled.div`
  margin: 30px auto 0 auto;
  width: 1024px;
  font-size: 1.5rem;
`;
const StHeader = styled.header`
  margin-bottom: 20px;
  h1 {
    font-size: 1.5rem;
  }
`;
const StSection = styled.section`
  margin-bottom: 10px;
`;
const StButton = styled.button`
  padding: 5px 15px;
  font-size: 1rem;
  color: #fff;
  border: solid 0px;
  border-radius: 5px;
  cursor: pointer;
  background-color: #006188;
  &:hover {
    background-color: #0097d3;
  }
`;
const StButtonMd = styled(StButton)`
  font-size: 1.5rem;
  padding: 5px 20px;
`;
const StButtonLg = styled(StButton)`
  font-size: 2rem;
  padding: 5px 30px;
`;

function StyledPage() {
  return (
    <StDiv>
      <StHeader>
        <h1>styled button</h1>
      </StHeader>
      <StSection>
        <StButton type="button">test</StButton>
      </StSection>
      <StSection>
        <StButtonMd type="button">test</StButtonMd>
      </StSection>
      <StSection>
        <StButtonLg type="button">test</StButtonLg>
      </StSection>
    </StDiv>
  );
}

export default StyledPage;
