import React, { useState, useEffect } from 'react';
import { InputForm } from '../components/form';
import { PageContainer, PageHeader, SectionBody, Button } from '../components/common-styled';
import styled from 'styled-components';
import { restApi } from '../api/api';
import { catchError } from 'rxjs/operators';
import { EMPTY, Subscription } from 'rxjs';

const FormBodyDiv = styled.div`
  width: 25%;
`;

function SignUp() {
  const [ userForm, setUserForm ] = useState({
    nickName: '',
    name: '',
    email: ''
  });

  const [ userFormErrMsg, setUserFormErrMsg ] = useState({
    nickName: '',
    name: '',
    email: ''
  });

  let sub = new Subscription();

  useEffect(() => {
    return () => {
      sub.unsubscribe();
    };
  // eslint-disable-next-line
  }, []);

  const nickNameValidate = (v: string) => {
    if (v.length < 1) return 'invalid nick name.';
    else return '';
  };

  const nameValidate = (v: string) => {
    if (v.length < 1) return 'invalid name.';
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
      case 'nickName':
        return nickNameValidate(controlValue);
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
    const resultForm = Object
                        .entries(userForm)
                        .reduce((errors, [k, v]) => ({...errors, [k]: validate(k, v) }), userFormErrMsg);
    setUserFormErrMsg(resultForm);

    if (Object.values(resultForm).every(v => !v)) return true;
    else return false;
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!validateForm()) {
      console.log('invalid');
    } else {
      sub = restApi.insertUser(userForm).pipe(
        catchError(({ response }) => {
          console.log(response.message);
          return EMPTY;
        })
      ).subscribe(({ response }) => {
        alert(response.message);
      });
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
              labelText='nickName' type='text' name='nickName' 
              value={userForm.nickName} validationMsg={userFormErrMsg.nickName}
              onChange={validateControl} onBlur={validateControl}
            />
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
