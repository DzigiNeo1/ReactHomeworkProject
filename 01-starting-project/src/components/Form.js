import React, { useState } from "react";
import Button from "./UI/Button";
import ErrorModal from "./UI/ErrorModal";
import styles from "./Form.module.css";
import Card from "./UI/Card";
const Form = (props) => {
  const [nameInput, SetNameInput] = useState("");
  const [ageInput, SetAgeInput] = useState("");
  const [error, setError] = useState();

  const usernameHandler = (event) => {
    SetNameInput(event.target.value);
  };

  const ageHandler = (event) => {
    SetAgeInput(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (ageInput < 1) {
      setError({ title: "Invalid input", message: "please enter a valid age" });
    }
    if (ageInput.trim().length === 0 || nameInput.trim().length === 0) {
      setError({ title: "Invalid age", message: "please enter a valid name" });
    }
    props.onAddUser(nameInput, ageInput);
    SetNameInput("");
    SetAgeInput("");
  };

  const errorHandler = () => {
      setError(null)
  }
  return (
    <React.Fragment>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username"> Username</label>
          <input
            id="username"
            value={nameInput}
            type="text"
            onChange={usernameHandler}
          />
          <label htmlFor="age"></label>
          <input
            id="age"
            value={ageInput}
            type="number"
            onChange={ageHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default Form;
