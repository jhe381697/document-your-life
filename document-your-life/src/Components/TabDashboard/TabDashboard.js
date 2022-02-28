/* eslint-disable react/jsx-key */
import React from 'react'
import { Link } from 'react-router-dom'
import './tabDashboard.scss';

const TabDashboard = () => {
  return (
    <div className='container'>
      <div className='tab-dashboard'>
        <Link to="dashboard/yesterday" className='tab-dashboard-link'>Hier</Link>
        <Link to="dahsboard/calendar" className='tab-dashboard-link'>Calendrier</Link>
        <Link to="dashboard/today" className='tab-dashboard-link'>Aujourdhui</Link>
      </div>
    </div>
  )
}

TabDashboard.propTypes = {}

export default React.memo(TabDashboard);