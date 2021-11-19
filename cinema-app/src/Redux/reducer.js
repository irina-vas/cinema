import { SHOW_MOVIES, SHOW_SCHEDULE } from "./constants";

let data = {
  movies: [],
  schedule: [],
  loading: true,
}

export const reducer = (state = data, action) => {
  switch (action.type) {

    case SHOW_MOVIES:
      return {
        ...state, movies: action.payload.movies, loading: false
      }

    case SHOW_SCHEDULE:
      return {
        ...state, schedule: action.payload.sessions, loading: false
      }

    default:
      return state;
  };
}
