import React from "react";
import { addNewUser } from "../utils/apiCalls";
import UserForm from "./UserForm";

export default function AddUser() {
  const firstName = "";
  const lastName = "";

  const handleSubmit = (newUserFirstName, newUserLastName) => {
    addNewUser(newUserFirstName, newUserLastName);
  };

  return (
    <div>
      <UserForm
        firstName={firstName}
        lastName={lastName}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
