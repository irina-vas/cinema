import React, { useRef, useEffect, useState } from 'react';
import '../styles/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSchedule } from '../Redux/asynAction';
import Loader from './Loader';
import Modal from './Modal';
import img_headline from '../images/Без имени-1.png'

function Schedule() {
  const dispatch = useDispatch();
  const schedule = useSelector(state => state.schedule);
  const loading = useSelector(state => state.loading);
  const input = useRef();
  const [scheduleMovie, setScheduleMovie] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSecond, setModalSecond] = useState(false);

  useEffect(() => {
    dispatch(fetchSchedule());
  }, [dispatch]);


  if (loading) {
    return (
      <div className="loader"><Loader /></div>
    )
  }

  const handleInput = (e) => {
    setScheduleMovie(input.current.value)
  }

  function getDate(date) {
    return date.slice(0,10);
  }

  function getTime(date) {
    return date.slice(11,16)
  }
  
  let filteredMovie = schedule.filter(item => scheduleMovie === getDate(item.date) ? item : null)

  function modalClose() {
    return setModalOpen(false)

  }

  function modalSecClose() {
    return setModalSecond(false)
  }

  return (
    <div className="schedule_wrapper">
      <Modal 
        modalSecClose={modalSecClose} 
        modalOpen={modalOpen} 
        modalClose={modalClose} 
        modalSecond={modalSecond}  
        setModalSecond={ setModalSecond} 
      />
      <div className="wrapper_image_input">
        <div className="schedule_image">
          <img src={img_headline} alt="headline" />
        </div>
        <form onChange={(e) => handleInput('2021-10-01')}>
          <input type="date" ref={input} id="chose_date" />
        </form>
      </div>

      <div className="schedule_movie_wrapper">
        {filteredMovie.map((item, index)=> {
          
          return (
            <div key={index} className="schedule_container">
            <div className="schedule_poster">
              <img src={item.movie.poster} alt={item.title} />
            </div>
              <div className="schedule_desc">
                <div className="schedule_title">{item.movie.title}</div>
                <div className="schedule_time">{getTime(item.date)}</div>
              </div>
              <button className="buyBtn" onClick={() => setModalOpen(true)}>КУПИТЬ</button>
            </div>
          )
        })} 
      </div>
    </div>
  );
}

export default Schedule;
