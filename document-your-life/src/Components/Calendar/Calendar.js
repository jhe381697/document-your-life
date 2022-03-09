/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect, useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import { getTodayCard } from '../../RequestsAxios/CardsReq';
import Spinner from '../../utils/Spinner/Spinner';
import moment from 'moment';
import './calendar.scss';
import labelToColor from '../../utils/LabelToColor/LabelToColor';
import Card from '../Card/Card';
import { Link, Route, Routes } from 'react-router-dom';


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



  useEffect(() => {
    handleUserDataCard()
  }, [])
  return (

    <div className="calendar-container">

      {/* // eslint-disable-next-line react/jsx-key */}
      {/* <CalendarItem onClickDay={handleDay} onChange={onChange} value={value} /> */}
      {isLoading ? <Spinner /> :

        cards.map(({ id, label, created_at }) => {
          return (
            <div key={id}>

              <Link to={'/card/' + id}>
                <div style={labelToColor(label)} className='calendarRow'>
                  <p className='calendarRow-text'>{moment(created_at).format("DD-MMM-YYYY")}</p>
                </div>
              </Link>
              <Routes>
                <Route path={'/card/' + id} element={<Card />} />
              </Routes>
            </div >
          )
        })}
    </div>

  );
}

export default React.memo(Calendar);