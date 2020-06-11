import React, { useState } from 'react';
import { InputForm } from '../components/form';
import { StPageContainer, StPageHeader, StSection } from '../components/common-styled';

function RegistFormPage() {
  const [ name, setName ] = useState('');

  return (
    <StPageContainer>
      <StPageHeader>
        <h1>User Regist</h1>
      </StPageHeader>
      <StSection>
        <InputForm labelText='testlabel' type='input' value={ name } onChange={(e) => setName(e.currentTarget.value)} />
      </StSection>
    </StPageContainer>
  );
}

export default RegistFormPage;
