import React, { useEffect } from "react";
import { Subject, EMPTY } from 'rxjs';
import { switchMap, tap, catchError } from 'rxjs/operators';
import { useDispatch } from "react-redux";
import { userAction } from "../store/users.action";
import { User } from "../store/users.state";
import { 
  Button,
  PageContainer,
  PageHeader,
  SectionBody
} from "../components/common-styled";
import styled from "styled-components";
import { restApi } from "../api/api";

const Ul = styled.ul`
  list-style: none;
  font-size: 1.05rem;
  font-weight: 500;
  color: #777;
  padding: 20px 0;
  > li {
    margin-bottom: 10px;
  }
`;

function UserList (
  { users }: { users: User[] }
) {
  const dispatch = useDispatch();
  const clickEvent = new Subject<void>();

  useEffect(() => {
    const sub = clickEvent.pipe(
      switchMap(() => 
        restApi.getUsers().pipe(
          tap(({ data }) => {
            dispatch(userAction.setUser(data));
          }),
          catchError(({ response })=> {
            console.log(response.message);
            return EMPTY;
          })
        )
      )
    ).subscribe();

    return () => {
      sub.unsubscribe();
    };
  }, []);
  
  const UserList = users.map((user: User, index) => (
    <li key={index}>
      <span>User Name : </span>{user.name}
    </li>
  ));

  return (
    <PageContainer>
      <PageHeader>
        <h1>User List</h1>
      </PageHeader>
      <SectionBody>
        <Button type="button" onClick={() => clickEvent.next()}> 조회 </Button>
        <Ul>
          { UserList }
        </Ul>
      </SectionBody>
    </PageContainer>
  );
}

export default UserList;
