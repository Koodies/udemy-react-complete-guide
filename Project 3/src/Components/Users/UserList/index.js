const UsersList = (props) => {
  return (
    <div>
      {props.users.map((user) => {
        return <p key={user.id}>{user.username} {user.age}</p>;
      })}
    </div>
  );
};

export default UsersList;
