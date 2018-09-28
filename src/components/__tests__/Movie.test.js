import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import Movie from "../Movie";

const testData = {
  movie: {
    title: "foo",
    genre_ids: [],
    poster_path: "1.jpg"
  },
  images: {
    base_url: "url",
    poster_sizes: ["size-1", "size-2", "size-3", "size-4", "size-5"]
  },
  genresList: {}
};

describe("Movie component", () => {
  it("renders properly", () => {
    const { movie, images } = testData;
    const image_path = `${images.base_url}${images.poster_sizes[3]}${
      movie.poster_path
    }`;
    const wrapper = shallow(<Movie {...testData} />);
    const element = wrapper.find("article");
    expect(element.find("img").prop("src")).toEqual(image_path);
    expect(element.find(".item__title").text()).toBe("foo");
  });

  it("renders snapshot properly", () => {
    const tree = renderer.create(<Movie {...testData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
