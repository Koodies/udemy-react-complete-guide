import { useState } from "react";
import Button from "../../../UI/Button/Button";
import styles from "./index.module.css";

const UserForm = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (age < 0) {
      alert("Please enter a valid age. Must be more than 0");
      clearInput();
      return;
    }
    addUser();
  };

  const addUser = () => {
    const user = {
      username,
      age,
    };
    clearInput();
    props.onAddUser(user);
  };

  const clearInput = () => {
    setUsername("");
    setAge("");
  };

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <label>Username</label>
      <input type="text" value={username} onChange={usernameHandler}></input>
      <label>Age(Years)</label>
      <input type="number" value={age} onChange={ageHandler}></input>
      <Button type="submit" name="Add User" />
    </form>
  );
};

export default UserForm;
