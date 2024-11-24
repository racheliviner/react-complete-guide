import React, { useState } from "react";
import AddUser from "./components/AddUser/AddUser";
import UsersList from "./components/UsersList/UsersList";
import ErrorModel from "./components/UI/ErrorModel";

const App = () => {
  const [usersList, setUsersList] = useState([]);
  const [error, setError] = useState();

  const addingUserHandler = (userName, userAge) => {
    setUsersList((prevUserList) => {
      return [...prevUserList, {name: userName, age: userAge, id: Math.random().toString}];
    });
  };

  const errorHandler = (title, massage) => {
    setError({
      title,
      massage
    })
  };

  const clearErrorHandler = () => {
    setError(undefined);
  }

  return (
    <>
      {error && (
        <ErrorModel
          title={error.title}
          massage={error.massage}
          onClick={clearErrorHandler}
        ></ErrorModel>
      )}
      <AddUser onAddingUser={addingUserHandler} onError={errorHandler} />
      <UsersList users={usersList} />
    </>
  );
};

export default App;
