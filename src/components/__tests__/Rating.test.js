import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import Rating from "../Rating";

test("Rating renders a snapshot properly", () => {
  const tree = renderer.create(<Rating />).toJSON();
  expect(tree).toMatchSnapshot();
});
