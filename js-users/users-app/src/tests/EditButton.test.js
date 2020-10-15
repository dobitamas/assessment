import React from "react";
import { shallow } from "enzyme";
import EditButton from "../components/ButtonComponents/EditButton";

const userId = 116;
const addUser = shallow(<EditButton userId={userId} />);
const linkToEdit = addUser.find(".link-to-edit");

it("EditButton renders a Link", () => {
  expect(linkToEdit.length > 0).toBe(true);
});

it("EditButton renders Link with correct path", () => {
  expect(linkToEdit.props()["to"]).toBe(`/edit/${userId}`);
});
