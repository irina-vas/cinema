import React, { useEffect, useState } from 'react';
import '../styles/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, fetchSchedule } from '../Redux/asynAction';
import Loader from './Loader';
import { Link } from "react-router-dom";

function MainContent() {

  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies);
  const loading = useSelector(state => state.loading);
  const [movieByGenre, setMovieByGenre] = useState('жанр');
  const [movieByName, setMovieByName] = useState('')


  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchSchedule());
  }, [dispatch]);


  if (loading) {
    return (
      <div className="loader"><Loader /></div>
    )
  }

  const handleMovieByGenre = (e) => {
    setMovieByGenre(e.target.value)
  }

  const handleMovieByName = (e) => {
    setMovieByName(e.target.value)
  }

  let moviesFiltered=[];
   if (movieByGenre === 'жанр' && !movieByName) {
    moviesFiltered = movies.filter(item => item)
  }  else if (movieByName !== '') {
    moviesFiltered = movies.filter(item => item.title.toLowerCase().includes(movieByName.toLowerCase()))
  } else if (movieByGenre !== 'жанры') {
    moviesFiltered = movies.filter(item => item.genre.includes(movieByGenre))
  } else if (movieByName && movieByGenre !== 'жанры'){
    moviesFiltered = movies.filter(item => item.title.toLowerCase().includes(movieByName.toLowerCase()) && item.genre.includes(movieByGenre))
  }

  return (
    <div className="container_main">
      <div className="main_input" id="main_input">
        <input type="text" className="search_movies_input" onChange={handleMovieByName} />
        <select onChange={handleMovieByGenre} className="select_genres">
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
      </div>
      <div className="wrapper_movies">

      {moviesFiltered.map((item, index) => {
        return (
          <div className="moviesOnScreen_cards" key={index}>
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
