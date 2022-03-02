/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from 'react';
import CalendarItem from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar.scss';

const Calendar = () => {
    const [value, onChange] = useState(new Date());

  return (
    <div className="calendar">
      {/* // eslint-disable-next-line react/jsx-key */}
      <CalendarItem onChange={onChange} value={value} />
    </div>
  );
}

export default React.memo(Calendar);