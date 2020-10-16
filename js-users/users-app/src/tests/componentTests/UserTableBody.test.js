import React from "react";
import { shallow } from "enzyme";
import UserTableBody from "../../components/TableComponents/UserTableBody";
import { testUsers } from "../testUtils/testConstants";

const userTableBody = shallow(<UserTableBody usersToDisplay={testUsers} />);

it("Should render a table body component", () => {
  const tableBody = userTableBody.find(".table-body");
  expect(tableBody.length > 0).toBe(true);
});

it("Should a user component for each user passed as props", () => {
  const users = userTableBody.find(".user");
  expect(users.length === testUsers.length).toBe(true);
});
