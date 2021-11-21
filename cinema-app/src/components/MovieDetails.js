import React from 'react';
import '../styles/styles.css';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function MovieDetails() {
  const movies = useSelector(state => state.movies);
  const schedule = useSelector(state => state.schedule);
  const{ title } = useParams();
  let scheduleId = [];
  let moviesOnScreen = [];

  for (let item of schedule) {
    if (scheduleId.includes(item.movie.id)) {
        continue;
    } else {
      scheduleId.push(item.movie.id)
    }
  }

  for (let item of movies) {
    if (scheduleId.includes(item.id)) {
      moviesOnScreen.push(item)
    }
  }


  return (
      <div className="wrapper_movie_details">
      {moviesOnScreen.filter(item => item.title === title).map(item => {
        return (
          <div key={item.id} className="wrapper_movie_card">
            <h2 className="name">{item.title}</h2>
            <div className="movie_poster_details">
              <img src={item.poster} alt={item.title} />
            </div>
            <div className="movie_description">
              <p className="movie_actors">в ролях: {item.actors.slice(0,4).join(', ') + '...' }</p>
              <p className="movie_cpuntry">{item.country.join(', ')}</p>
              <p className="movie_genre">{item.genre.join(', ')}</p>
              <div className="movie_iframe">
                <iframe src={item.trailer}
                  frameBorder='0'
                  allow='autoplay; encrypted-media'
                  allowFullScreen
                  title='video'
                />
              </div>
            </div>
            <div>ghgh</div>
        </div>
        
        )
      })}
      <div>ghgh</div>
    </div>

  );
}

export default MovieDetails;
