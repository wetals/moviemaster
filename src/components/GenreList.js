import React from "react";

const GenreList = props => {
  const updateGenres = event => {
    props.updateGenres(event.target.value);
  };

  return (
    <div className="genre__list">
      <h3 className="title">All Genres</h3>
      {props.genres &&
        props.genres.map(genre => (
          <div key={genre.id}>
            <label className="checkbox">
              {genre.name}
              <input
                type="checkbox"
                name={genre.name}
                value={genre.id}
                onChange={updateGenres}
              />
              <span className="checkmark" />
            </label>
          </div>
        ))}
    </div>
  );
};

export default GenreList;
