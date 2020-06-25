import React from 'react';
import styled from 'styled-components';
import reactLogo from '../../assets/logo.svg';
import styledCompLogo from '../../assets/styled-comp.png';
import typescriptLogo from '../../assets/typescript.svg';
import reduxLogo from '../../assets/redux.svg';
import reactRouterLogo from '../../assets/react-router.png';
import rxjsLogo from '../../assets/rxjs.png';
import {
  PageHeader,
  SectionBody,
  PageContainer,
  SectionHeader
} from '../components/common-styled';

const P = styled.p`
  color: #555;
`;
const LocSectionBody = styled(SectionBody)`
  padding-top: 30px;
  display: flex;
  flex-wrap: wrap;
  width: 600px;
`;
const Content = styled.div`
  width: 100px;
  margin: 0 20px;
  > div {
    position: relative;
    width: 100px;
    height: 100px;
    > img {
      position: absolute;
      left: 0;
      top: 0;
      object-fit: cover;
      width: 100px;
      height: 100px;
    }
  }
  h4 {
    font-weight: 300;
    color: #555;
    margin-top: 1.125rem;
    text-align: center;
  }
`;

function Home() {
  return (
    <PageContainer>
      <PageHeader>
        <h1>React Playground :)</h1>
      </PageHeader>
      <SectionHeader>
        <h2>About</h2>
      </SectionHeader>
      <SectionBody>
        <P>
          React와 관련하여 이것저것 구현해보는 곳입니다.
        </P>
      </SectionBody>
      <SectionHeader>
        <h2>Used</h2>
      </SectionHeader>
      <LocSectionBody>
        <Content>
          <div>
            <img src={typescriptLogo} alt="typescript logo"/>
          </div>
          <h4>
            TypeScript
          </h4>
        </Content>
        <Content>
          <div>
            <img src={reactLogo} alt="react logo"/>
          </div>
          <h4>
            React<br/>
            Hooks
          </h4>
        </Content>
        <Content>
          <div>
            <img src={reactRouterLogo} alt="react router logo"/>
          </div>
          <h4>
            React Router
          </h4>
        </Content>
        <Content>
          <div>
            <img src={styledCompLogo}  alt="styled components logo"/>
          </div>
          <h4>
            Styled Components
          </h4>
        </Content>
        <Content>
          <div>
            <img src={rxjsLogo}  alt="rxjs logo"/>
          </div>
          <h4>
            RxJS
          </h4>
        </Content>
        <Content>
          <div>
            <img src={reduxLogo}  alt="redux logo"/>
          </div>
          <h4>
            Redux<br/>
            Redux Toolkit
          </h4>
        </Content>
      </LocSectionBody>
    </PageContainer>
  );
}

export default Home;
