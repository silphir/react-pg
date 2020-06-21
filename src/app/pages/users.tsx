import React, { useEffect } from "react";
import { Subject, EMPTY } from 'rxjs';
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
  const clickEvent = new Subject<void>();

  useEffect(() => {
    const sub = clickEvent.pipe(
      switchMap(() => restApi.getUsers().pipe(
        tap(({ data }) => {
          dispatch(userAction.setUser(data));
        }),
        catchError(({ response })=> {
          console.log(response.message);
          return EMPTY;
        })
      ))
    ).subscribe();

    return () => {
      sub.unsubscribe();
    };
  // eslint-disable-next-line
  }, []);
  
  return (
    <PageContainer>
      <PageHeader>
        <h1>User List</h1>
      </PageHeader>
      <SectionBody>
        <Button type="button" onClick={() => clickEvent.next()}> 조회 </Button>
        <UserList users={users}></UserList>
      </SectionBody>
    </PageContainer>
  );
}

export default Users;
