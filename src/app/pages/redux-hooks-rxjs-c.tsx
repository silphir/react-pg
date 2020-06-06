import React from "react";
import ReduxHooksRxjs from "./redux-hooks-rxjs";
import { useSelector } from "react-redux";
import { selectUser } from "../store/users.state";

function ReduxHooksRxjsContiner () {
  const users = useSelector(selectUser);

  return (
    <ReduxHooksRxjs users={users} />
  )
}

export default ReduxHooksRxjsContiner;