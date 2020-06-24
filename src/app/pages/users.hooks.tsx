import { useRef, useEffect } from "react";
import { Subscription, Subject, EMPTY } from "rxjs";
import { switchMap, tap, catchError } from "rxjs/operators";
import { restApi } from "../api/api";
import { useDispatch } from "react-redux";
import { userAction } from "../store/users.action";

export function useUsersApi() {
  const searchSubject = new Subject<void>();
  const deleteSubject = new Subject<string>();
  
  const dispatch = useDispatch();
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
  
  sub.current = deleteSubject.pipe(
    switchMap((id) => restApi.deleteUser$(id).pipe(
      catchError(({ response })=> {
        console.log(response.message);
        return EMPTY;
      })
    )),
    tap(() => searchSubject.next())
  ).subscribe();
  
  return { searchSubject, deleteSubject };
}
