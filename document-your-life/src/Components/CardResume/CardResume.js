/* eslint-disable react/jsx-key */
import React from 'react'
import { useState, useEffect } from 'react';
import './cardResume.scss'

const CardResume = () => {

  const [value, setValue] = useState();

  useEffect(() => {
    setValue(1);  // 1 remplacé par la réponse axios
  }, [])
  
  return (
    <div className='cardresume-container'>
      <div className='cardresume'>
        <h2>Date de la journée</h2>
        <div className='cardresume-mood'>
          <h3>Humeur de la journée</h3>
          <div className='cardresume-mood-emoji'>{value}</div>
        </div>
        <div className='cardresume-medium'>
          <h3>Résumé de la journée</h3>
          <div className='cardresume-medium-infos'>medium</div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(CardResume);