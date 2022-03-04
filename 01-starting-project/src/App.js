import React, { useState } from "react";
import Form from "./components/Form";
import UserList from "./components/UserList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const onAddUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: uName, age: uAge, id: Math.random().toString()}];
    });
  };

  return (
    <div>
      <Form onAddUser={onAddUserHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
