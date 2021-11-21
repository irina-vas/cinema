import { showMovies, showSchedule } from "./actions";


export const fetchMovies = () => {
  return dispatch => {
    fetch('https://trevadim.github.io/data/movies.json')
      .then(response => response.json())
      .then(json => dispatch(showMovies(json)))
  }
}

export const fetchSchedule = () => {
  return dispatch => {
    fetch('https://trevadim.github.io/data/schedule.json')
      .then(response => response.json())
      .then(json => dispatch(showSchedule(json)))
  }
}
