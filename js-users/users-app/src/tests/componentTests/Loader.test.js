import React from "react";
import { shallow } from "enzyme";
import Loader from "../../components/Loader/Loader";

const loader = shallow(<Loader />);
const icon = loader.find(".Loader");

it("Loader should return a CircularProgress icon", () => {
  expect(icon.length > 0).toBe(true);
});
