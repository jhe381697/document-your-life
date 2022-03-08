/* eslint-disable react/jsx-key */
import React from 'react'
import { useState, useEffect } from 'react';
import './cardResume.scss'
import { Link } from "react-router-dom"
const CardResume = () => {

  // const [value, setValue] = useState();
  const [mood, setMood] = useState();
  const [medium, setMedium] = useState();

  useEffect(() => {
    setMood("emoticone");  // "emoticone" remplacé par la réponse axios
  }, [])

  useEffect(() => {
    setMedium("medium");
  }, [])
  
  return (
    <Link to='/card'>
    <div className='cardresume-container'>
      <div className='cardresume'>
        <h2>Date de la journée</h2>
        <div className='cardresume-mood'>
          <h3>Humeur de la journée</h3>
          <div className='cardresume-mood-emoji'>{mood}</div>
        </div>
        <div className='cardresume-medium'>
          <h3>Résumé de la journée</h3>
          <div className='cardresume-medium-infos'>{medium}</div>
        </div>
      </div>
    </div>
    </Link>
  )
}

export default React.memo(CardResume);