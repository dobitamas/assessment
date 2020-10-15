import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UserForm from "./UserForm";
import { formTitles } from "../utils/constants";
import { editUser, getUserById } from "../utils/apiCalls";

export default function EditUser() {
  const { userId } = useParams();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getUserById(userId).then((userData) => {
      setUserData(userData);
      setLoading(false);
    });
  }, [userId]);

  const setUserData = (userData) => {
    setFirstName(userData.first_name);
    setLastName(userData.last_name);
  };

  const handleSubmit = (editedFirstName, editedLastName) => {
    return editUser(editedFirstName, editedLastName, userId);
  };

  return isLoading ? (
    <div>Loading..</div>
  ) : (
    <div>
      <UserForm
        firstName={firstName}
        lastName={lastName}
        formTitle={formTitles.EDIT}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
