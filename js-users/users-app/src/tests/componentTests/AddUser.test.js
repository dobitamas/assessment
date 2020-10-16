import React from "react";
import { shallow } from "enzyme";
import AddUser from "../../components/AddUser/AddUser";
import { formTitles } from "../../utils/constants";
import { addNewUser } from "../../utils/apiCalls";

const addUser = shallow(<AddUser />);
const userForm = addUser.find(".user-form");

it("AddUser renders UserForm", () => {
  expect(userForm.length > 0).toBe(true);
});

it("AddUser renders UserForm with correct props", () => {
  expect(userForm.props()["formTitle"]).toBe(formTitles.ADD);
  expect(userForm.props()["submitUserData"]).toBe(addNewUser);
});
