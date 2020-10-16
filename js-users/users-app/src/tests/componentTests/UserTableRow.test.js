import React from "react";
import { shallow } from "enzyme";
import UserTableRow from "../../components/TableComponents/UserTableRow";

const userTableRow = shallow(<UserTableRow />);

it("Should render a table row component", () => {
  const tableRow = userTableRow.find(".table-row");
  expect(tableRow.length === 1).toBe(true);
});

it("Should render an edit button", () => {
  const editButton = userTableRow.find(".edit-button");
  expect(editButton.length === 1).toBe(true);
});

it("Should render 5 title cells", () => {
  const tableCells = userTableRow.find(".table-cell");
  expect(tableCells.length === 5).toBe(true);
});

it("Should render a switch button", () => {
  const switchButton = userTableRow.find(".switch");
  expect(switchButton.length === 1).toBe(true);
});
