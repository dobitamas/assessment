import React from "react";
import { shallow } from "enzyme";
import UserTable from "../../components/TableComponents/UserTable";
import { testUsers } from "../testUtils/testConstants";

const userTable = shallow(<UserTable usersToDisplay={testUsers} />);

it("Card title should be: Users", () => {
  const titleText = userTable.find(".table-title").text();
  expect(titleText).toBe("Users");
});

it("Should render a paper component", () => {
  const paper = userTable.find(".paper");
  expect(paper.length > 0).toBe(true);
});

it("Should render a table container component", () => {
  const tableContainer = userTable.find(".table-container");
  expect(tableContainer.length > 0).toBe(true);
});

it("Should render a table component", () => {
  const table = userTable.find(".table");
  expect(table.length > 0).toBe(true);
});

it("Should render a table head component", () => {
  const tableHead = userTable.find(".table-head");
  expect(tableHead.length > 0).toBe(true);
});

it("Should render a table body component with correct props", () => {
  const tableBody = userTable.find(".table-body");
  expect(tableBody.length > 0).toBe(true);
  expect(tableBody.props()["usersToDisplay"]).toBe(testUsers);
});
