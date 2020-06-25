import React from "react";
import { 
  Button,
  PageContainer,
  PageHeader,
  SectionBody
} from "../../components/common-styled";
import UserList from "./userlist";
import { useUsersApi } from "./users.hooks";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/users.state";

export function Users () {
  const users = useSelector(selectUser);
  const { searchSubject } = useUsersApi();

  const searchUsers = () => {
    searchSubject.next();
  };

  return (
    <PageContainer>
      <PageHeader>
        <h1>User List</h1>
      </PageHeader>
      <SectionBody>
        <Button type="button" onClick={searchUsers}> 조회 </Button>
        <UserList users={users}></UserList>
      </SectionBody>
    </PageContainer>
  );
}

export default Users;
