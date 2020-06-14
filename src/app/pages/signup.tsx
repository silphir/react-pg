import React, { useState } from 'react';
import { InputForm } from '../components/form';
import { PageContainer, PageHeader, SectionBody, Button } from '../components/common-styled';
import styled from 'styled-components';

const FormBodyDiv = styled.div`
  width: 25%;
`;

function SignUp() {
  const [ userForm, setUserForm ] = useState({
    name: '',
    email: ''
  });

  const [ userFormErrMsg, setUserFormErrMsg ] = useState({
    name: '',
    email: ''
  });

  const nameValidate = (v: string) => {
    if (v.length < 1) return 'invalid user name.';
    else return '';
  };

  const emailValidate = (v: string) => {
    // eslint-disable-next-line no-useless-escape, no-case-declarations
    const regexr = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z]?)*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    if (!regexr.test(v)) return 'invalid email.';
    else return '';
  };

  const validate = (controlName: string, controlValue: string) => {
    switch(controlName) {
      case 'name':
        return nameValidate(controlValue);
      case 'email':
        return emailValidate(controlValue);
    }
  };

  const validateControl = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserForm({ 
      ...userForm,
      [e.currentTarget.name]: e.currentTarget.value
    });
    setUserFormErrMsg({
      ...userFormErrMsg,
      [e.currentTarget.name]: validate(e.currentTarget.name, e.currentTarget.value)
    });
  };

  const validateForm = () => {
    const resultForm = Object.entries(userForm)
                             .reduce((errors, [k, v]) => ({...errors, [k]: validate(k, v) }), userFormErrMsg);

    setUserFormErrMsg(resultForm);
    if (Object.values(resultForm).every(v => !v)) return true;
    else return false;
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(validateForm()) {
      console.log('valid');
    } else {
      console.log('invalid');
    }
  };

  return (
    <PageContainer>
      <PageHeader>
        <h1>Sign Up</h1>
      </PageHeader>
      <SectionBody>
        <form onSubmit={submitForm}>
          <FormBodyDiv>
            <InputForm
              labelText='name' type='text' name='name'
              value={userForm.name} validationMsg={userFormErrMsg.name} 
              onChange={validateControl} onBlur={validateControl}
            />
            <InputForm
              labelText='e-mail' type='email' name='email' 
              value={userForm.email} validationMsg={userFormErrMsg.email}
              onChange={validateControl} onBlur={validateControl}
            />
          </FormBodyDiv>
          <Button>전송</Button>
        </form>
      </SectionBody>
    </PageContainer>
  );
}

export default SignUp;
