import React from "react";
import RxjsReduxHooks from "./rxjs-redux-hooks";
import { useSelector } from "react-redux";
import { selectUser } from "../store/users.state";

function RxjsReduxHooksContiner () {
  const users = useSelector(selectUser);

  return (
    <RxjsReduxHooks users={users} />
  );
}

export default RxjsReduxHooksContiner;