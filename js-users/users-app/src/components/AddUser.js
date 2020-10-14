import React from "react";
import { addNewUser } from "../utils/apiCalls";
import { formTitles } from "../utils/constants";
import UserForm from "./UserForm";

export default function AddUser() {
  const firstName = "";
  const lastName = "";

  const handleSubmit = (newUserFirstName, newUserLastName) => {
    return addNewUser(newUserFirstName, newUserLastName);
  };

  return (
    <div>
      <UserForm
        firstName={firstName}
        lastName={lastName}
        formTitle={formTitles.ADD}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
