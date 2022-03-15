/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import {getTodayCard} from '../../RequestsAxios/CardsReq';

import './tabDashboard.scss';

// React Router Dom
import { Routes, Route } from "react-router-dom";

// Components
import Calendar from '../Calendar/Calendar';
import CardResume from '../CardResume/CardResume';
import AvatarIcon from '../AvatarIcon/AvatarIcon';
import { useEffect } from 'react';


const TabDashboard = () => {
  const [isdefinedCard,setIsdefinedCard] = useState()
  async function dayCardData() {
  const dayCard = await getTodayCard();
  if (dayCard.status === 200) {
    if(dayCard.data.lastCards[1] === undefined){
      setIsdefinedCard(false)
    }else(
      setIsdefinedCard(true)
    )
  }
  else {
    console.log('erreur')
  }
}
useEffect(() => {
  dayCardData()

}, [])

  return (
    <>
      <div className='dashboard-container'>
      <AvatarIcon />
        <div className='tab-container'>
          <div className='tab-dashboard'>
            {isdefinedCard && 
            <Link to="last" className='tab-dashboard-link'>Hier</Link>
            }
            <Link to="calendar" className='tab-dashboard-link'>Calendrier</Link>
            <Link to="today" className='tab-dashboard-link'>Aujourdhui</Link>
          </div>
        </div>
        <Routes>
          <Route path="/calendar" element={
            <Calendar />} />
          <Route path="today" element={
            // today card resume
            <CardResume id={0} />} />

          <Route path="last" element={
            // last card resume
            <CardResume id={1} />} />
          <Route path="/*" element={
            // last card resume
           <Navigate to='/page404'/> }/>
        </Routes> 
      </div>
    </>
  )
}

TabDashboard.propTypes = {

}

export default React.memo(TabDashboard);