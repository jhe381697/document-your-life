/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect, useState } from 'react';
import CalendarItem from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { getTodayCard } from '../../RequestsAxios/CardsReq';
import Spinner from '../../utils/Spinner/Spinner';
import moment from 'moment';
import './calendar.scss';


const Calendar = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [cards, setCards] = useState()


  async function handleUserDataCard() {
    const res = await getTodayCard()
    console.log(res)
    if (res.status === 200) {
      console.log(res.data.calendarMoods)
      setCards(res.data.calendarMoods)
      setIsLoading(false)
    }
    else (
      console.log(res)
    )
  }


  function labelToColor(label) {
    if (label === "happy") {
      const style = {
        backgroundColor: 'rgb(1, 248, 1)',
      }
      return style
    }
    if (label === "sad") {
      const style = {
        backgroundColor: 'grey',
      }
      return style
    }
    if (label === "neutral") {
      const style = {
        backgroundColor: 'rgb(245, 231, 104)',
      }
      return style
    }
    if (label === "cool") {
      const style = {
        backgroundColor: 'rgb(255, 157, 0)',
      }
      return style
    }
  }

  useEffect(() => {
    handleUserDataCard()
  }, [])

  return (

    <div className="calendar-container">
      {/* // eslint-disable-next-line react/jsx-key */}
      {/* <CalendarItem onClickDay={handleDay} onChange={onChange} value={value} /> */}
      {isLoading ? <Spinner /> :

        cards.map(({id, label, created_at }) => {
          return (
            <div key={id} style={labelToColor(label) } className='calendarRow'>
              <p className='calendarRow-text'>{moment(created_at).format("DD-MMM-YYYY")}</p>
            </div>
          )
        })}
    </div>

  );
}

export default React.memo(Calendar);