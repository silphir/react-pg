import React from "react";
import { User } from "../store/users.state";
import styled from "styled-components";
import { ButtonSm } from "../components/common-styled";
import { useUsersApi } from "./users.hooks";

const Ul = styled.ul`
  list-style: none;
  font-size: 1.05rem;
  font-weight: 500;
  color: #777;
  padding: 20px 0;
  width: 600px;
  > li {
    display: flex;
    flex-wrap: wrap;
    padding: 20px 10px;
    border: 1px solid #999;
    border-bottom: 0px solid #999;
    > span {
      width: 100%;
    }
    &:first-child {
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }
    &:last-child {
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      border-bottom: 1px solid #999;
    }
    div {
      span {
        display: block;
      }
    }
    ${ButtonSm} {
      margin: 0 0 0 auto;
      border-radius: 10px;
      background-color: #bc0000;
      &:hover {
        background-color: #ef0000;
      }
      &:active {
        box-shadow: inset 1px 5px 5px #770000;
        padding-top: 11px;
      }
    }
  }
`;

function UserList (
  { users }: 
  { users: User[] }
) {
  const { deleteSubject } = useUsersApi();
  
  const deleteUsers = (id: string) => {
    deleteSubject.next(id);
  };
  
  return (
    <Ul>
      { users.map((user: User, index) => (
        <li key={index}>
          <div>
            <span>NickName: {user.nickName}</span>
            <span>Name: {user.name}</span>
          </div>
          <ButtonSm type="button" onClick={() => deleteUsers(user.id)}>삭제</ButtonSm>
        </li>
      )) }
    </Ul>
  );
}

export default UserList;
