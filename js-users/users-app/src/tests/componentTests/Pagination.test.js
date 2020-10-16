import React from "react";
import { shallow } from "enzyme";
import PaginationComponent from "../../components/Pagination/PaginationComponent";

const paginationCount = 10;
const pagination = shallow(
  <PaginationComponent paginationCount={paginationCount} />
);
const icon = pagination.find(".pagination-item");

it("PaginationComponent should return a Pagination", () => {
  expect(icon.length > 0).toBe(true);
});
