import React, { useRef, useEffect, useState } from 'react';
import '../styles/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSchedule } from '../Redux/asynAction';
import Loader from './Loader';

function Schedule() {
  const dispatch = useDispatch();
  const schedule = useSelector(state => state.schedule);
  const loading = useSelector(state => state.loading);
  const input = useRef();
  const [scheduleMovie, setScheduleMovie] = useState('');

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

  console.log(filteredMovie)


  return (
    <div className="wrapper_schedule">
      <form onChange={(e) => handleInput('2021-10-01')}>
        <input type="date" ref={input} />
      </form>

      {filteredMovie.map((item, index)=> {
        // if (input.current.value === "2021-10-01T10:45:00") 
          
        
        return (

          <div key={index}>
            <div className="schedule_poster"><img src={item.movie.poster} alt={item.title} /></div>
            <div className="schedule_title">{item.movie.title}</div>
            <div className="schedule_date">{getDate(item.date)}</div>
            <div className="schedule_time">{getTime(item.date)}</div>
          </div>
        )
      })
      }
    </div>
  );
}

export default Schedule;