import React from 'react';
import styled from 'styled-components';
import reactLogo from '../../assets/logo.svg';
import styledCompLogo from '../../assets/styled-comp.png';
import typescriptLogo from '../../assets/typescript.svg';
import reduxLogo from '../../assets/redux.svg';
import reactRouterLogo from '../../assets/react-router.png';
import rxjsLogo from '../../assets/rxjs.png';
import { StPageHeader, StSection, StPageContainer, StHeader } from '../components/common-styled';

const LocStSection = styled(StSection)`
  padding-top: 30px;
  display: flex;
  flex-wrap: wrap;
  width: 600px;
`;
const Content = styled.div`
  width: 100px;
  margin: 0 20px;
`;
const StP = styled.p`
  color: #555;
`;
const Img = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  object-fit: cover;
  width: 100px;
  height: 100px;
`;
const ImgWrapper = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
`;
const H4 = styled.h4`
  font-weight: 300;
  color: #555;
  margin-top: 1.125rem;
  text-align: center;
`;

function Home() {
  return (
    <StPageContainer>
      <StPageHeader>
        <h1>React Playground :)</h1>
      </StPageHeader>
      <StHeader>
        <h2>About</h2>
      </StHeader>
      <StSection>
        <StP>
          React와 관련하여 이것저것 구현해보는 곳입니다.
        </StP>
      </StSection>
      <StHeader>
        <h2>Used</h2>
      </StHeader>
      <LocStSection>
        <Content>
          <ImgWrapper>
            <Img src={typescriptLogo} />
          </ImgWrapper>
          <H4>
            TypeScript
          </H4>
        </Content>
        <Content>
          <ImgWrapper>
            <Img src={reactLogo} alt="react logo" />
          </ImgWrapper>
          <H4>
            React<br/>
            Hooks
          </H4>
        </Content>
        <Content>
          <ImgWrapper>
            <Img src={reactRouterLogo} />
          </ImgWrapper>
          <H4>
            React Router
          </H4>
        </Content>
        <Content>
          <ImgWrapper>
            <Img src={styledCompLogo} />
          </ImgWrapper>
          <H4>
            Styled Components
          </H4>
        </Content>
        <Content>
          <ImgWrapper>
            <Img src={rxjsLogo} />
          </ImgWrapper>
          <H4>
            RxJS
          </H4>
        </Content>
        <Content>
          <ImgWrapper>
            <Img src={reduxLogo} />
          </ImgWrapper>
          <H4>
            Redux<br/>
            Redux Toolkit
          </H4>
        </Content>
      </LocStSection>
    </StPageContainer>
  );
}

export default Home;
