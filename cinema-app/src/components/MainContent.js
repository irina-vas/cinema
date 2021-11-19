import React, { useEffect } from 'react';
import '../styles/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, fetchSchedule } from '../Redux/asynAction';
import Loader from './Loader';
import { Link } from "react-router-dom";

function MainContent() {

  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies);
  const schedule = useSelector(state => state.schedule);
  const loading = useSelector(state => state.loading);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchSchedule());
  }, [dispatch]);

  console.log(movies);
  console.log(schedule);


  if (loading) {
    return (
      <div className="loader"><Loader /></div>
    )
  }



  let scheduleId = [];
  let moviesOnScreen = [];

  for (let item of schedule) {
    if (scheduleId.includes(item.movie.id)) {
        continue;
    } else {
      scheduleId .push(item.movie.id)
    }
  }

  for (let item of movies) {
    if (scheduleId .includes(item.id)) {
      moviesOnScreen.push(item)
    }
  }

  return (
    <div className="container_main">
      <input type="text" className="search_movies_input" />
      <div className="wrapper_movies">

      {moviesOnScreen.map((item, index) => {
        return (
          <div className="moviesOnScreen_cards">
            <Link to={`/movies/${item.title}`}>
              <div className="movie_poster">
                <img src={item.poster} alt={item.title} />
              </div>
            </Link>
            <div className="movie_title">{item.title}</div>
          </div>
        )
      })}
    </div>
  </div>
  );
}

export default MainContent;