import React, { useRef, useEffect, useState } from 'react';
import '../styles/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSchedule } from '../Redux/asynAction';
import Loader from './Loader';
import Modal from './Modal';

function Schedule() {
  const dispatch = useDispatch();
  const schedule = useSelector(state => state.schedule);
  const loading = useSelector(state => state.loading);
  const input = useRef();
  const [scheduleMovie, setScheduleMovie] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchSchedule());
  }, [dispatch]);

  console.log(schedule);


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
  
  let filteredMovie = schedule.filter(item => {
    if (scheduleMovie === getDate(item.date)) {
      return item
    }
  })

  function modalClose() {
    return setModalOpen(false)
  }


  console.log(filteredMovie)


  return (
    <div className="schedule_wrapper">
       <Modal modalOpen={modalOpen} modalClose={modalClose} />
      <form onChange={(e) => handleInput('2021-10-01')}>
        <input type="date" ref={input} />
      </form>
     

 
      {filteredMovie.map((item, index)=> {
        
        return (

          <div key={index} className="schedule_container">
            <div className="schedule_poster"><img src={item.movie.poster} alt={item.title} /></div>
            <div className="schedule_desc">
              <div className="schedule_title">{item.movie.title}</div>
              <div className="schedule_date">{getDate(item.date)}</div>
              <div className="schedule_time">{getTime(item.date)}</div>
            </div>
            <button className="buyTicket" onClick={() => setModalOpen(true)}>КУПИТЬ</button>
          </div>
        )
      })
      } 

    </div>
  );
}

export default Schedule;