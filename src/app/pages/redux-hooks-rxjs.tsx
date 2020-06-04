import React from "react";
import { Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { switchMap, tap } from 'rxjs/operators'
import { useDispatch } from "react-redux";
import { userAction } from "../store/app.action";
import { User } from "../store/app.state";

function ReduxHooksRxjs ({ users }: { users: User[] }) {
  const dispatch = useDispatch();
  
  const clickEvent = new Subject<void>();
  clickEvent.pipe(
    switchMap(() => 
      ajax.getJSON('http://localhost:20000/people').pipe(
        tap((result: any) => {
          dispatch(userAction.setUser(result.data));
        }),
      )
    )
  ).subscribe();
  
  const UserList = users.map((user:User, index) => (
    <div key={index}>
      {user.name}
    </div>
  ));

  return (
    <div>
      { UserList }
      <button type="button" onClick={() => clickEvent.next()}> api Get </button>
    </div>
  )
}

export default ReduxHooksRxjs;