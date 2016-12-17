import { API_KEY } from '../config.js';

function fetchMovie(id) {
  const REQUEST_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US&append_to_response=videos,images,genres&include_image_language=en,null`;
  return fetch(REQUEST_URL)
      .then(response => response.json());
}

function fetchMovieRatings(imdbId) {
  const OMDB_URL = `https://omdbapi.com/?i=${imdbId}&plot=full&r=json`;
  return fetch(OMDB_URL)
      .then(response => response.json());
}

function fetchCastAndCrew(id) {
  const REQUEST_URL = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`;
  return fetch(REQUEST_URL)
      .then(response => response.json());
}

export {
  fetchMovie,
  fetchMovieRatings,
  fetchCastAndCrew
};
