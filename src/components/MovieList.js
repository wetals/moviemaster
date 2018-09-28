import React from "react";
import Movie from "./Movie";

const MovieList = props => {
  const { genreIds, rating } = props.visibilityFilter;

  const isGenreVisible = movieIds => {
    if (genreIds.length === 0) return true;
    return genreIds.every(
      currentValue => movieIds.indexOf(Number(currentValue)) > -1
    );
  };

  const filteredMovies = props.movies.filter(
    movie => isGenreVisible(movie.genre_ids) && movie.vote_average >= rating
  );

  return (
    <div className="items">
      {filteredMovies.length > 0 &&
        filteredMovies.map((movie, key) => {
          return (
            <Movie
              movie={movie}
              images={props.images}
              genresList={props.genresList}
              key={key}
            />
          );
        })}
      {filteredMovies.length === 0 && <div>No results found</div>}
    </div>
  );
};

export default MovieList;
