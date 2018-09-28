import React from "react";
import Genre from "./Genre";

const Movie = props => {
  const { title, genre_ids, poster_path } = props.movie;

  const { base_url, poster_sizes } = props.images;
  const image_path = `${base_url}${poster_sizes[3]}${poster_path}`;

  return (
    <article className="item">
      <div className="item__image">
        <img src={image_path} alt={title} />
      </div>
      <div className="item__metadata">
        <div className="item__title">{title}</div>
        <Genre genre_ids={genre_ids} genresList={props.genresList} />
      </div>
    </article>
  );
};

export default Movie;
