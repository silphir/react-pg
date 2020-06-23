import React, { useEffect, useRef } from "react";
import { Subject, EMPTY, Subscription } from 'rxjs';
import { switchMap, tap, catchError } from 'rxjs/operators';
import { useDispatch } from "react-redux";
import { userAction } from "../store/users.action";
import { 
  Button,
  PageContainer,
  PageHeader,
  SectionBody
} from "../components/common-styled";
import { restApi } from "../api/api";
import { useSelector } from "react-redux";
import { selectUser } from "../store/users.state";
import UserList from "./userlist";

function Users () {
  const users = useSelector(selectUser);
  const dispatch = useDispatch();
  const searchSubject = new Subject<void>();
  const sub = useRef(new Subscription());
  useEffect(() => {
    return () => {
      sub.current.unsubscribe();
    };
  }, [sub]);
  
  sub.current = searchSubject.pipe(
    switchMap(() => restApi.getUsers$().pipe(
      tap(({ data }) => {
        dispatch(userAction.setUser(data));
      }),
      catchError(({ response })=> {
        console.log(response.message);
        return EMPTY;
      })
    ))
  ).subscribe();

  const searchUsers = () => {
    searchSubject.next();
  };

  return (
    <PageContainer>
      <PageHeader>
        <h1>User List</h1>
      </PageHeader>
      <SectionBody>
        <Button type="button" onClick={searchUsers}> 조회 </Button>
        <UserList users={users} searchUsers={searchUsers}></UserList>
      </SectionBody>
    </PageContainer>
  );
}

export default Users;
