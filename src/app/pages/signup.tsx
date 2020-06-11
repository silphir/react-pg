import React, { useState } from 'react';
import { InputForm } from '../components/form';
import { StPageContainer, StPageHeader, StSection } from '../components/common-styled';

function SignUp() {
  const [ name, setName ] = useState('');

  return (
    <StPageContainer>
      <StPageHeader>
        <h1>Sign Up</h1>
      </StPageHeader>
      <StSection>
        <InputForm labelText='name' type='text' value={ name } onChange={(e) => setName(e.currentTarget.value)} />
      </StSection>
    </StPageContainer>
  );
}

export default SignUp;
