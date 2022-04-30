import UserForm from "./UserForm";

const NewUser = (props) => {
  const onAddUserHandler = (user) => {
    const newUsers = {
      ...user,
      id: Math.random().toString(),
    };
    props.addUser(newUsers);
  };

  return <UserForm onAddUser={onAddUserHandler} />;
};

export default NewUser;
