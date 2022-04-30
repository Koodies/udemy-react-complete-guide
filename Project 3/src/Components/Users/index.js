import { useState } from "react";
import NewUser from "./NewUser";
import UserList from "./UserList";

const DUMMY_USERS = [
  {
    username:'test',
    age:123,
    id:1
  }
]

const Users = (props) => {
  const [users, setUsers] = useState(DUMMY_USERS);
  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
      return [user, ...prevUsers];
    });
  };
  return (
    <div>
      <NewUser addUser={addUserHandler} />
      <UserList users={users} />
    </div>
  );
};

export default Users;
