import { useRef, useEffect } from "react";
import { Subscription, Subject, EMPTY } from "rxjs";
import { switchMap, tap, catchError } from "rxjs/operators";
import { restApi } from "../api/api";
import { useDispatch } from "react-redux";
import { userAction } from "../store/users.action";

export function useGetUsers(): Subject<void> {
  const searchSubject = new Subject<void>();
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
  
  return searchSubject;
}
