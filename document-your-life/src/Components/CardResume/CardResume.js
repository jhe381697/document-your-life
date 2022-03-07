/* eslint-disable react/jsx-key */
import React from 'react'
import './cardResume.scss'

const CardResume = () => {

  return (
    <div className='cardresume-container'>
      <div className='cardresume'>
        <h2>Date de la journée</h2>
        <div className='cardresume-mood'>
          <h3>Humeur de la journée</h3>
          <p>emoji</p>
        </div>
        <div className='cardresume-medium'>
          <h3>Résumé de la journée</h3>
          <p>medium</p>
        </div>
      </div>
    </div>
  )
}

export default React.memo(CardResume);