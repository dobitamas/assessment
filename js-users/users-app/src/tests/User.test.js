import React from "react";
import { shallow } from "enzyme";
import User from "../components/User/User";

const testUser = {
  id: 110,
  first_name: "Jane",
  last_name: "Doe",
  status: "locked",
  created_at: "2020-10-13T12:03:44.301Z",
};

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
