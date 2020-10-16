import React from "react";
import { shallow } from "enzyme";
import AddButton from "../../components/ButtonComponents/AddButton";

const addUser = shallow(<AddButton />);
const linkToAdd = addUser.find(".link-to-add");

it("AddButton renders a Link", () => {
  expect(linkToAdd.length > 0).toBe(true);
});

it("AddButton renders Link with correct path", () => {
  expect(linkToAdd.props()["to"]).toBe("/new");
});

it("AddButton renders add icon", () => {
  const buttonIcon = addUser.find("AddIcon");
  expect(buttonIcon.length > 0).toBe(true);
});
