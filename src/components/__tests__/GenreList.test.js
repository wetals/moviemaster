import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import GenreList from "../GenreList";

const testData = {
  genres: [
    {
      id: 1,
      name: "one"
    },
    {
      id: 2,
      name: "two"
    }
  ],
  updateGenres: {
    1: "foo",
    2: "bar"
  }
};

describe("GenreList component", () => {
  it("renders properly", () => {
    const totalGenres = testData.genres.length;
    const wrapper = shallow(<GenreList {...testData} />);
    expect(wrapper.find("label").length).toBe(totalGenres);
    expect(wrapper.find("input").length).toBe(totalGenres);
    expect(wrapper.find("input").get(0).props.name).toBe("one");
  });

  it("renders snapshot properly", () => {
    const tree = renderer.create(<GenreList />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
