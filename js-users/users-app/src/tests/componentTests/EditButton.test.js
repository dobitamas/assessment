import React from "react";
import { shallow } from "enzyme";
import EditButton from "../../components/ButtonComponents/EditButton";

const userId = 116;
const editUser = shallow(<EditButton userId={userId} />);
const linkToEdit = editUser.find(".link-to-edit");

it("EditButton renders a Link", () => {
  expect(linkToEdit.length > 0).toBe(true);
});

it("EditButton renders Link with correct path", () => {
  expect(linkToEdit.props()["to"]).toBe(`/edit/${userId}`);
});

it("EditButton renders add icon", () => {
  const buttonIcon = editUser.find("EditIcon");
  expect(buttonIcon.length > 0).toBe(true);
});
