import axios from "axios";

const baseUrl = "https://api.themoviedb.org";
const API_KEY = process.env.REACT_APP_API_KEY;

export const service = {
  getConfig: () =>
    axios
      .get(`${baseUrl}/3/configuration`, {
        params: { api_key: API_KEY }
      })
      .then(res => res.data)
      .catch(error => console.log(error)),

  getLatestMovies: () =>
    axios
      .get(`${baseUrl}/3/movie/now_playing`, {
        params: {
          api_key: API_KEY,
          language: "en-US",
          page: 1
        }
      })
      .then(res => res.data)
      .catch(error => console.log(error)),

  getGenres: () =>
    axios
      .get(`${baseUrl}/3/genre/movie/list`, {
        params: { api_key: API_KEY }
      })
      .then(res => res.data)
      .catch(error => console.log(error)),

  getMoviesData: () =>
    axios
      .all([
        service.getConfig(),
        service.getLatestMovies(),
        service.getGenres()
      ])
      .then(
        axios.spread(function(config, movies, genres) {
          return { ...config, ...movies, ...genres };
        })
      )
};
