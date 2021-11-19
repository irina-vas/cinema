import React, { useEffect, useState } from 'react';
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
  let scheduleId = [];
  let moviesOnScreen = [];
  let genres = ['биография', 'боевик', 'детектив', 'драма', 'комедия', 'криминал', 'приключения', 'семейный', 'триллер', 'фэнтези', 'фантастика']
  const [movieByGenre, setMovieByGenre] = useState([]);
  const [movieByName, setMovieByName] = useState([])


  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchSchedule());
  }, [dispatch]);

  console.log(movies);


  if (loading) {
    return (
      <div className="loader"><Loader /></div>
    )
  }

  for (let item of schedule) {
    if (scheduleId.includes(item.movie.id)) {
        continue;
    } else {
      scheduleId.push(item.movie.id)
    }
  }

  for (let item of movies) {
    if (scheduleId .includes(item.id)) {
      moviesOnScreen.push(item)
    }
  }

  const handleMovieByGenre = (e) => {
    setMovieByGenre(e.target.value)
  }

  let filteredMovieByGenre = movies.filter(item => {
    if (item.genre.includes(movieByGenre)) {
      return item
    }
  })

  console.log(filteredMovieByGenre)

  const handleMovieByName = (e) => {
    setMovieByName(e.target.value)
  }

  let filteredMovieByName = movies.filter(item => {
    if (item.title.includes(movieByName)) {
      return item;
    }
  })

  console.log(filteredMovieByName)
  return (
    <div className="container_main">
      <input type="text" className="search_movies_input" onChange={handleMovieByName} />
      <select onChange={handleMovieByGenre} >
        <option>жанр</option>
        <option value='биография'>биография</option>
        <option value='боевик'>боевик</option>
        <option value='детектив'>детектив</option>
        <option value='драма'>драма</option>
        <option value='комедия'>комедия</option>
        <option value='криминал'>криминал</option>
        <option value='приключения'>приключения</option>
        <option value='семейный'>семейный</option>
        <option value='триллер'>триллер</option>
        <option value='фэнтези'>фэнтези</option>
        <option value='фантастика'>фантастика</option>
      </select>
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