import React from 'react';
import {
  PageHeader,
  SectionBody,
  Button,
  ButtonLg,
  ButtonXl,
  PageContainer,
  ButtonXs,
  ButtonSm
} from '../components/common-styled';

function Sample() {
  return (
    <PageContainer>
      <PageHeader>
        <h1>Buttons</h1>
      </PageHeader>
      <SectionBody>
        <ButtonXs type="button">test</ButtonXs>
      </SectionBody>
      <SectionBody>
        <ButtonSm type="button">test</ButtonSm>
      </SectionBody>
      <SectionBody>
        <Button type="button">test</Button>
      </SectionBody>
      <SectionBody>
        <ButtonLg type="button">test</ButtonLg>
      </SectionBody>
      <SectionBody>
        <ButtonXl type="button">test</ButtonXl>
      </SectionBody>
    </PageContainer>
  );
}

export default Sample;
