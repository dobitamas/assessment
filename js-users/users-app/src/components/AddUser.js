import React, { useState } from "react";
import { addNewUser } from "../utils/apiCalls";

export default function AddUser() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const firstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const lastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addNewUser(firstName, lastName);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <h1>First Name</h1>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={firstNameChange}
          />
        </label>
        <label>
          <h1>Last Name</h1>
          <input
            type="text"
            placeholder="First Name"
            value={lastName}
            onChange={lastNameChange}
          />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
