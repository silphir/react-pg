import React, { useState } from 'react';
import { InputForm } from '../components/form';
import { StPageContainer, StPageHeader, StSection, StButton } from '../components/common-styled';
import styled from 'styled-components';

const FormBody = styled.div`
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

  const validate = (controlName: string, controlValue: string) => {
    let message = '';
    switch(controlName) {
      case 'name':
        message = nameValidator(controlValue);
        break;
      case 'email':
        message = emailValidator(controlValue);
        break;
    }
    return message;    
  };

  const nameValidator = (v: string) => {
    if (v.length < 1) return 'invalid user name.';
    else return '';
  };

  const emailValidator = (v: string) => {
    // eslint-disable-next-line no-useless-escape, no-case-declarations
    const regexr = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z]?)*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    if (!regexr.test(v)) return 'invalid email.';
    else return '';
  };

  const validateChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserForm({ ...userForm, [e.currentTarget.name]: e.currentTarget.value });
    setUserFormErrMsg({ ...userFormErrMsg, [e.currentTarget.name]: validate(e.currentTarget.name, e.currentTarget.value) });
  };

  const validateSubmitForm = () => {
    const resultForm = Object.entries(userForm).reduce((main, [k, v]) => ({...main, [k]: validate(k, v) }), userFormErrMsg);
    setUserFormErrMsg(resultForm);

    if (Object.values(resultForm).every(v => !v)) return true;
    else return false;
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(validateSubmitForm()) console.log('success');
    else console.log('failure');
  };

  return (
    <StPageContainer>
      <StPageHeader>
        <h1>Sign Up</h1>
      </StPageHeader>
      <StSection>
        <form onSubmit={submitForm}>
        <FormBody>
          <InputForm labelText='name' type='text' name='name' value={userForm.name} validationMsg={userFormErrMsg.name} onChange={validateChangeForm} />
          <InputForm labelText='e-mail' type='email' name='email' value={userForm.email} validationMsg={userFormErrMsg.email} onChange={validateChangeForm} />
        </FormBody>
        <StButton>전송</StButton>
        </form>
      </StSection>
    </StPageContainer>
  );
}

export default SignUp;
