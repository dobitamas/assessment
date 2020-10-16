import React from "react";
import { shallow } from "enzyme";
import UserTableHead from "../../components/TableComponents/UserTableHead";

const userTableHead = shallow(<UserTableHead />);

it("Should render a table head component", () => {
  const tableHead = userTableHead.find(".table-head");
  expect(tableHead.length === 1).toBe(true);
});

it("Should render a table row component", () => {
  const tableRow = userTableHead.find(".table-row");
  expect(tableRow.length === 1).toBe(true);
});

it("Should render an add button", () => {
  const addButton = userTableHead.find(".add-button");
  expect(addButton.length === 1).toBe(true);
});

it("Should render 5 title cells", () => {
  const tableCells = userTableHead.find(".table-cell");
  expect(tableCells.length === 5).toBe(true);
});
