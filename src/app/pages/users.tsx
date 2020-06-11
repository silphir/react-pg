import React from "react";
import UserList from "./userlist";
import { useSelector } from "react-redux";
import { selectUser } from "../store/users.state";

function Users () {
  const users = useSelector(selectUser);

  return (
    <UserList users={users} />
  );
}

export default Users;
