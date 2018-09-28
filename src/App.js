import React, { Component } from "react";
import MovieList from "./components/MovieList";
import GenreList from "./components/GenreList";
import Rating from "./components/Rating";
import { service } from "./services/api";

class App extends Component {
  state = {
    movies: [],
    genres: [],
    images: [],
    visibilityFilter: {
      rating: 3,
      genreIds: []
    }
  };

  componentDidMount() {
    service.getMoviesData().then(({ results, genres, images }) => {
      this.setState({
        movies: results,
        genres,
        images
      });
    });
  }

  genresList = genres => {
    return genres.reduce(function(result, item) {
      const keys = Object.keys(item);
      const key = keys[0],
        value = keys[1];
      return { ...result, [item[key]]: item[value] };
    }, {});
  };

  updateGenres = genre => {
    const { genreIds, rating } = this.state.visibilityFilter;
    const visibleGenreIds =
      genreIds.indexOf(genre) === -1
        ? [...genreIds, genre]
        : genreIds.filter(item => item !== genre);

    this.setState({
      visibilityFilter: {
        genreIds: visibleGenreIds,
        rating: rating
      }
    });
  };

  updateRating = rating => {
    this.setState({
      visibilityFilter: {
        rating,
        genreIds: [...this.state.visibilityFilter.genreIds]
      }
    });
  };

  render() {
    const { movies, genres, images, visibilityFilter } = this.state;
    const genresList = this.genresList(genres);

    return (
      <React.Fragment>
        <header className="header">
          <div className="header__wrapper">
            <h1>Movie Master</h1>
          </div>
        </header>
        <div className="container">
          <div className="columns">
            <aside className="column left">
              <Rating
                rating={visibilityFilter.rating}
                updateRating={this.updateRating}
              />
              <GenreList genres={genres} updateGenres={this.updateGenres} />
            </aside>
            <main className="column right">
              <MovieList
                movies={movies}
                images={images}
                genresList={genresList}
                visibilityFilter={visibilityFilter}
              />
            </main>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
