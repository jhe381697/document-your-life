/* eslint-disable react/jsx-key */
import React from 'react'

import { Link } from 'react-router-dom'
import './tabDashboard.scss';

// React Router Dom
import { Routes, Route } from "react-router-dom";

// Components
import Calendar from '../Calendar/Calendar';
import Card from '../Card/Card';



const TabDashboard = () => {
  return (
  
    <div className='dashboard-container'>
      <div className='container'>
        <div className='tab-dashboard'>
          <Link to="last/card" className='tab-dashboard-link'>Hier</Link>
          <Link to="calendar" className='tab-dashboard-link'>Calendrier</Link>
          <Link to="today/card" className='tab-dashboard-link'>Aujourdhui</Link>
        </div>
      </div>
      <Routes>
        <Route path="/calendar" element={
          <Calendar />} />
        <Route path="today/card" element={
          // oday Card to modify
          <Card />} />
        <Route path="last/card" element={
          // last Card to modify
          <Card />} />
      </Routes>
    </div>
  )
}

TabDashboard.propTypes = {

}

export default React.memo(TabDashboard);