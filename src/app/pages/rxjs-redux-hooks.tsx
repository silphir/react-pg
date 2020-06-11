import React from "react";
import { Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { switchMap, tap } from 'rxjs/operators';
import { useDispatch } from "react-redux";
import { userAction } from "../store/users.action";
import { User } from "../store/users.state";
import { 
  StButton,
  StPageContainer,
  StPageHeader,
  StSection
} from "../components/common-styled";
import styled from "styled-components";

const StUl = styled.ul`
  list-style: none;
  font-size: 1.05rem;
  font-weight: 500;
  color: #777;
  padding: 20px 0;
  > li {
    margin-bottom: 10px;
  }
`;

function RxjsReduxHooks ({ users }: { users: User[] }) {
  const dispatch = useDispatch();
  
  const clickEvent = new Subject<void>();
  clickEvent.pipe(
    switchMap(() => 
      ajax.getJSON<{ data: User[] }>('http://localhost:20000/people').pipe(
        tap(({ data }) => {
          dispatch(userAction.setUser(data));
        }),
      )
    )
  ).subscribe();
  
  const UserList = users.map((user: User, index) => (
    <li key={index}>
      <span>User Name : </span>{user.name}
    </li>
  ));

  return (
    <StPageContainer>
      <StPageHeader>
        <h1>use Redux, RxJS, Hooks - get users api</h1>
      </StPageHeader>
      <StSection>
        <StButton type="button" onClick={() => clickEvent.next()}> api Get </StButton>
        <StUl>
          { UserList }
        </StUl>
      </StSection>
    </StPageContainer>
  );
}

export default RxjsReduxHooks;
