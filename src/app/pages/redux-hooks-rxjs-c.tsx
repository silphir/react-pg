import React from "react";
import ReduxHooksRxjs from "./redux-hooks-rxjs";
import { useSelector } from "react-redux";

function ReduxHooksRxjsContiner () {
  const users = useSelector(({users}: any) => users);

  return (
    <ReduxHooksRxjs users={users} />
  )
}

export default ReduxHooksRxjsContiner;