import { MOVIE_LIST_START, MOVIE_LIST_SUCCESS, MOVIE_LIST_FAILURE } from '../actions/MovieActions';

const initialState = {
    isLoading: false,
    list: []
};

function movieReducer(state = initialState, action) {
  const { movies } = action;
  switch (action.type) {
    case MOVIE_LIST_START:
      return {
        ...state,
        list: [],
        isLoading: true,
      };
    case MOVIE_LIST_SUCCESS:
      return {
        ...state,
        list: movies,
        isLoading: false,
      };
    case MOVIE_LIST_FAILURE:
      return {
        ...state,
        list: [],
        isLoading: false,
      };
    default:
      return state;
  }
}

export default movieReducer;
