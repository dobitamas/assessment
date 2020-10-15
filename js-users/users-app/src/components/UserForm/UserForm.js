import React, { useState } from "react";
import { serverErrorMessage } from "../../utils/constants";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import "../../style/UserForm.css";
import { Link, withRouter } from "react-router-dom";

function UserForm({
  originalFirstName,
  originalLastName,
  formTitle,
  submitUserData,
  history,
}) {
  const [firstName, setFirstName] = useState(originalFirstName || "");
  const [lastName, setLastName] = useState(originalLastName || "");
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

  const isFirstNameErrorPresent = errorForFirstName !== " ";

  const isLastNameErrorPresent = errorForLastName !== " ";

  const submitValues = (event) => {
    event.preventDefault();
    emptyErrorMessages();
    submitUserData(firstName, lastName)
      .then(() => history.push("/"))
      .catch((error) => {
        if (error.response) {
          handleInputError(error.response.data);
        } else {
          alert(serverErrorMessage);
        }
      });
  };

  return (
    <div className="user-form-container">
      <div className="user-form-card">
        <div className="card-title">
          <h1>{formTitle}</h1>
        </div>
        <Divider variant="middle" />
        <form onSubmit={submitValues}>
          <div className="content">
            <TextField
              error={isFirstNameErrorPresent}
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
              error={isLastNameErrorPresent}
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
