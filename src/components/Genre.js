import React from "react";

const Genre = props => {
  return (
    <div className="genre__tags">
      {props.genre_ids.map(genre => (
        <span key={genre} className="genre">
          {props.genresList[genre]}
        </span>
      ))}
    </div>
  );
};

export default Genre;
