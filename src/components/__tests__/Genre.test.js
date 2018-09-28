import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import Genre from "../Genre";

const testData = {
  genre_ids: [1, 2],
  genresList: {
    1: "foo",
    2: "bar"
  }
};

describe("Genre component", () => {
  it("renders properly", () => {
    const wrapper = shallow(<Genre {...testData} />);
    const element = wrapper.find("span");
    expect(element.length).toBe(testData.genre_ids.length);
    expect(element.first().text()).toBe("foo");
    expect(element.last().text()).toBe("bar");
  });

  it("renders snapshot properly", () => {
    const tree = renderer.create(<Genre {...testData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
