/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from 'react';
import { postTodayCard } from '../../RequestsAxios/CardsReq';
import CalendarItem from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar.scss';

const Calendar = () => {
  const [value, onChange] = useState(new Date());
  const [day, setDay] = useState()
  const [user, setUser] = useState({})

    function handleDay(e) {
      setDay(e)
      let aday = JSON.stringify(day).substring(0, 11)
      console.log(aday)
    }

  const handlechange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setUser({ ...user, [name]: value })
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await postTodayCard(user)
      console.log(response)

    } catch ({ response }) {
      console.log('asdfasdfasdfasdfasdf')

    }

  }
  return (
    <div className="calendar">
      {/* // eslint-disable-next-line react/jsx-key */}
      <form onSubmit={handleSubmit}>
        <input
          className='formLogin-form-input'
          name='text'
          onChange={handlechange}
          type="text"
          placeholder='Entrez votre Email' />
      </form>
      <CalendarItem onClickDay={handleDay} onChange={onChange} value={value} />
    </div>
  );
}

export default React.memo(Calendar);