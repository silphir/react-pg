import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  margin: 20px auto 0 auto;
  width: 1024px;
  font-size: 1.5rem;
`;
const ContentHeader = styled.div`
  h1 {
    font-size: 1.5rem;
  }
`;
const ContentSection = styled.div`
  margin: 0 10px 10px 0;
`;
const Button = styled.button`
  padding: 5px 15px;
  font-size: 1rem;
  color: #fff;
  border: solid 1px #006188;
  border-radius: 5px;
  cursor: pointer;
  background-color: #006188;
  &:hover {
    background-color: #0097d3;
  }
`;
const ButtonMd = styled(Button)`
  font-size: 1.5rem;
  padding: 5px 20px;
`;
const ButtonLg = styled(Button)`
  font-size: 2rem;
  padding: 5px 30px;
`;

function TestBed() {
  return (
    <Div>
      <ContentHeader>
        <h1>styled button</h1>
      </ContentHeader>
      <ContentSection>
        <Button type="button">test</Button>
      </ContentSection>
      <ContentSection>
        <ButtonMd type="button">test</ButtonMd>
      </ContentSection>
      <ContentSection>
        <ButtonLg type="button">test</ButtonLg>
      </ContentSection>
    </Div>
  );
}

export default TestBed;
