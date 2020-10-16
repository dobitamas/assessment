import React from "react";
import { shallow } from "enzyme";
import UserList from "../../components/UserList/UserList";

const userList = shallow(<UserList />);
const loader = userList.find("Loader");

it("Should render a loader at first", () => {
  expect(loader.length > 0).toBe(true);
});
