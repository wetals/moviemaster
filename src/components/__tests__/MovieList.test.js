import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import MovieList from "../MovieList";

const testData = {
  movies: [
    {
      title: "foo",
      genre_ids: [
        {
          id: 1,
          name: "one"
        }
      ],
      poster_path: "1.jpg",
      vote_average: 5
    },
    {
      title: "bar",
      genre_ids: [
        {
          id: 2,
          name: "two"
        }
      ],
      poster_path: "2.jpg",
      vote_average: 6
    }
  ],
  images: {
    base_url: "url",
    poster_sizes: ["size-1", "size-2", "size-3", "size-4", "size-5"]
  },
  genresList: {
    1: "foo"
  },
  visibilityFilter: {
    genreIds: [],
    rating: 3
  }
};

describe("MovieList component", () => {
  it("renders properly", () => {
    const wrapper = shallow(<MovieList {...testData} />);
    const element = wrapper.find(".items");
    expect(element.children()).toHaveLength(testData.movies.length);
  });

  it("renders no item when ratings is below filter selection", () => {
    const testProps = {
      ...testData,
      visibilityFilter: {
        genreIds: [],
        rating: 9
      }
    };
    const wrapper = shallow(<MovieList {...testProps} />);
    const element = wrapper.find(".items");
    expect(element.text()).toContain("No results");
  });

  it("renders the right number of items when filters are applied", () => {
    const testProps = {
      ...testData,
      visibilityFilter: {
        genreIds: ["2"],
        rating: 9
      }
    };
    const wrapper = shallow(<MovieList {...testProps} />);
    const element = wrapper.find(".items");
    expect(element.children()).toHaveLength(1);
  });

  it("renders snapshot properly", () => {
    const tree = renderer.create(<MovieList {...testData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
