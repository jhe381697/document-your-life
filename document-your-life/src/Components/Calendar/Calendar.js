/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from 'react';
import { getTodayCard, putTodayCard } from '../../RequestsAxios/CardsReq';
import CalendarItem from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar.scss';

const Calendar = () => {
  const [value, onChange] = useState(new Date());
  const [day, setDay] = useState()
  const [test, settest] = useState()
  const [test1, settest1] = useState()

    function handleDay(e) {
      setDay(e)
      let aday = JSON.stringify(day).substring(0, 11)
      console.log(aday)
    }
    

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await putTodayCard("moodLabel","neutral")
    const res1 = await getTodayCard()
    if (res.status === 200 || res1.status === 200){
    settest1(res1)
    settest(res)}
     console.log('test PUT', test,
      'test GET', test1)
  }
  
  return (
    <div className="calendar">
      <button onClick={handleSubmit}>sd</button>
      {/* // eslint-disable-next-line react/jsx-key */}
      <CalendarItem onClickDay={handleDay} onChange={onChange} value={value} />
    </div>
  );
}

export default React.memo(Calendar);