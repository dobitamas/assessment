import React from "react";
import { shallow } from "enzyme";
import UserForm from "../components/UserForm/UserForm";
import { formTitles } from "../utils/constants";
import { addNewUser } from "../utils/apiCalls";

const testUser = {
  id: 110,
  first_name: "Jane",
  last_name: "Doe",
  status: "locked",
  created_at: "2020-10-13T12:03:44.301Z",
};
const userFormComponent = shallow(
  <UserForm.WrappedComponent
    originalFirstName={testUser.first_name}
    originalLastName={testUser.last_name}
    formTitle={formTitles.ADD}
    submitUserData={addNewUser}
  />
);

const inputRows = userFormComponent.find(".input-field");

it("UserForm renders 2 input fields", () => {
  expect(inputRows.length === 2).toBe(true);
});

it("Input field for first name should contain default data", () => {
  const defaultValue = userFormComponent.find(".first-name").props()[
    "defaultValue"
  ];
  expect(defaultValue).toBe(testUser.first_name);
});

it("Input field for last name should contain default data", () => {
  const defaultValue = userFormComponent.find(".last-name").props()[
    "defaultValue"
  ];
  expect(defaultValue).toBe(testUser.last_name);
});

it("Link at the bottom should contain link to main page", () => {
  const homePageLink = userFormComponent.find("Link").props()["to"];
  expect(homePageLink).toBe("/");
});
