/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
import React from 'react'
import { Link } from 'react-router-dom'

import './tabDashboard.scss';

// React Router Dom
import { Routes, Route } from "react-router-dom";

// Components
import Calendar from '../Calendar/Calendar';
import CardResume from '../CardResume/CardResume';
import AvatarIcon from '../AvatarIcon/AvatarIcon';



const TabDashboard = () => {
  return (
    <>
      <div className='dashboard-container'>
      <AvatarIcon />
        <div className='container'>
          <div className='tab-dashboard'>
            <Link to="last" className='tab-dashboard-link'>Hier</Link>
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
        </Routes> 
      </div>
    </>
  )
}

TabDashboard.propTypes = {

}

export default React.memo(TabDashboard);