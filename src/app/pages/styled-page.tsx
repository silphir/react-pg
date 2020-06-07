import React from 'react';
import { StPageHeader, StSection, StButton, StButtonMd, StButtonLg, StPageContainer } from '../components/common-styled';

function StyledPage() {
  return (
    <StPageContainer>
      <StPageHeader>
        <h1>Styled Button</h1>
      </StPageHeader>
      <StSection>
        <StButton type="button">test</StButton>
      </StSection>
      <StSection>
        <StButtonMd type="button">test</StButtonMd>
      </StSection>
      <StSection>
        <StButtonLg type="button">test</StButtonLg>
      </StSection>
    </StPageContainer>
  );
}

export default StyledPage;
