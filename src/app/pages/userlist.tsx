import React from "react";
import { User } from "../store/users.state";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  font-size: 1.05rem;
  font-weight: 500;
  color: #777;
  padding: 20px 0;
  > li {
    margin-bottom: 10px;
  }
`;

function UserList (
  { users }: { users: User[] }
) {
  return (
    <Ul>
      {users.map((user: User, index) => (
        <li key={index}>
          <span>User Name: </span>{user.name}
        </li>
      ))}
    </Ul>
  );
}

export default UserList;
