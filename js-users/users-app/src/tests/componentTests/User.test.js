import React from "react";
import { shallow } from "enzyme";
import User from "../../components/User/User";
import { testUser } from "../testUtils/testConstants";

const userComponent = shallow(<User user={testUser} key={testUser.id} />);
const userRow = userComponent.find(".user-table-row");

it("User render UserTableRow component", () => {
  expect(userRow.length > 0).toBe(true);
});

it("Text decoration matches the status of the user", () => {
  expect(userRow.props()["attributeStyle"]["color"]).toBe("grey");
  expect(userRow.props()["attributeStyle"]["textDecoration"]).toBe(
    "line-through"
  );
});

it("isLocked should return true if user's status is locked", () => {
  expect(userRow.props()["isLocked"]).toBe(true);
});
