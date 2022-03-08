/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from 'react';
import CalendarItem from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar.scss';

const Calendar = () => {
  const [value, onChange] = useState(new Date());
  const [day, setDay] = useState()

    function handleDay(e) {
      setDay(e)
      let aday = JSON.stringify(day).substring(0, 11)
      console.log(aday)
    }
    

  
  return (
    <div className="calendar">
      {/* // eslint-disable-next-line react/jsx-key */}
      <CalendarItem onClickDay={handleDay} onChange={onChange} value={value} />
    </div>
  );
}

export default React.memo(Calendar);