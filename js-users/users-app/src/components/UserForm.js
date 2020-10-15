import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import "../style/UserForm.css";
import { Link, withRouter } from "react-router-dom";

function UserForm(properties) {
  const [firstName, setFirstName] = useState(properties.firstName);
  const [lastName, setLastName] = useState(properties.lastName);
  const [errorForFirstName, setErrorForFirstName] = useState(" ");
  const [errorForLastName, setErrorForLastName] = useState(" ");

  const firstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const lastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleInputError = (errorMessage) => {
    if (errorMessage.first_name) {
      setErrorForFirstName(errorMessage.first_name);
    }
    if (errorMessage.last_name) {
      setErrorForLastName(errorMessage.last_name);
    }
  };

  const emptyErrorMessages = () => {
    setErrorForFirstName(" ");
    setErrorForLastName(" ");
  };

  const submitValues = (event) => {
    event.preventDefault();
    emptyErrorMessages();
    properties
      .submitUserData(firstName, lastName)
      .then(() => {
        properties.history.push("/");
      })
      .catch((error) => {
        handleInputError(error.response.data);
      });
  };

  return (
    <div className="user-form-container">
      <div className="user-form-card">
        <div className="card-title">
          <h1>{properties.formTitle}</h1>
        </div>
        <Divider variant="middle" />
        <form onSubmit={submitValues}>
          <div className="content">
            <TextField
              error={!!errorForFirstName}
              className="input-field"
              label="First Name"
              defaultValue={firstName}
              placeholder={firstName}
              helperText={errorForFirstName}
              onChange={firstNameChange}
              variant="outlined"
              margin="normal"
              color="secondary"
            />
            <TextField
              className="input-field"
              label="Last Name"
              defaultValue={lastName}
              placeholder={lastName}
              helperText={errorForLastName}
              onChange={lastNameChange}
              variant="outlined"
              margin="normal"
              color="secondary"
            />
            <button type="submit">Submit</button>
            <Link to="/">
              <div className="link">Back to Main Page</div>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default withRouter(UserForm);