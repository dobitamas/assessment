import React from "react";
import { addNewUser } from "../utils/apiCalls";
import { formTitles } from "../utils/constants";
import UserForm from "./UserForm";

export default function AddUser() {
  const firstName = "";
  const lastName = "";

  const submitUserData = (newUserFirstName, newUserLastName) => {
    return addNewUser(newUserFirstName, newUserLastName);
  };

  return (
    <UserForm
      firstName={firstName}
      lastName={lastName}
      formTitle={formTitles.ADD}
      submitUserData={submitUserData}
    />
  );
}
