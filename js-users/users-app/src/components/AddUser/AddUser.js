import React from "react";
import { addNewUser } from "../../utils/apiCalls";
import { formTitles } from "../../utils/constants";
import UserForm from "../UserForm/UserForm";

export default function AddUser() {
  return <UserForm formTitle={formTitles.ADD} submitUserData={addNewUser} />;
}
