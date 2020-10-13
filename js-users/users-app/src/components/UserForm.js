import React, { useState } from "react";

export default function UserForm(properties) {
  const [firstName, setFirstName] = useState(properties.firstName);
  const [lastName, setLastName] = useState(properties.lastName);

  const firstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const lastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const submitValues = (event) => {
    event.preventDefault();
    properties.handleSubmit(firstName, lastName);
  };

  return (
    <div>
      <form onSubmit={submitValues}>
        <label>
          <h1>First Name</h1>
          <input
            type="text"
            placeholder={firstName}
            value={firstName}
            onChange={firstNameChange}
          />
        </label>
        <label>
          <h1>Last Name</h1>
          <input
            type="text"
            placeholder={lastName}
            value={lastName}
            onChange={lastNameChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
