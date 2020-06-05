import React from "react";
import ReduxHooksRxjs from "./redux-hooks-rxjs";
import { useSelector } from "react-redux";
import { User } from "../store/app.state";

function ReduxHooksRxjsContiner () {
  const users = useSelector(({ users }: { users: User[] }) => users);

  return (
    <ReduxHooksRxjs users={users} />
  )
}

export default ReduxHooksRxjsContiner;