import { API_KEY } from '../config.js';
import { fetchMovieWithRatings } from '../services/requests';

export const MOVIE_LIST_START = 'MOVIE_LIST_START';
export const MOVIE_LIST_SUCCESS = 'MOVIE_LIST_SUCCESS';
export const MOVIE_LIST_FAILURE = 'MOVIE_LIST_FAILURE';

function movieListStart() {
    return { type: MOVIE_LIST_START };
}

export function movieListSuccess(movies) {
    return { type: MOVIE_LIST_SUCCESS, movies };
}

export function movieListFailure(errors) {
    return { type: MOVIE_LIST_FAILURE, errors };
}

export function movieList() {
    return (dispatch) => {
        dispatch(movieListStart());
        const REQUEST_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US`;
        return fetch(REQUEST_URL)
            .then(response => response.json())
            .then((responseData) => {
                const movies = responseData.results;
                return movies;
            })
            .then((moviesNoRatings) => {
                const fetchMovieJob = moviesNoRatings.map(movie => fetchMovieWithRatings(movie.id));
                return Promise.all(fetchMovieJob);
            })
            .then(movies => dispatch(movieListSuccess(movies)))
            .catch(errors => dispatch(movieListFailure(errors)));
  };
}
