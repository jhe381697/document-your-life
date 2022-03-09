/* eslint-disable react/jsx-key */
import React from 'react'
import { useState, useEffect } from 'react';
import getAllCards from '../../RequestsAxios/CardsReq';
import CardEdit from '../CardEdit/CardEdit';

import './card.scss';

const Card = () => {
  // const [date, setDate] = useState();
  const [mood, setMood] = useState([]);
  // const [texts, setTexts] = useState([]);
  // const [sounds, setSounds] = useState([]);
  // const [pictures, setPictures] = useState([]);
  // const [videos, setVideos] = useState([]);

  const dayCardData = async () => {
    const dayCard = await getAllCards(0);
    console.log(dayCard);
    if (dayCard.status === 200)
      {
        setMood(dayCard);
        return
      }
    else {
      dayCardData();
      console.log('erreur')
    }
  }

  console.log(mood);
  useEffect(() => {
    dayCardData();
  }, [])

  return (
    <div className='card-container'>
      <div className='card'>
        <h2>date</h2>
        <div className='card-mood'>
          <h3>Humeur de la journée</h3>
          <div className='card-mood-emoji'>{mood}</div>
        </div>
        <div className='card-medium'>
          <h3>Résumé de la journée</h3>
          <div className='card-medium-infos'>
            medium
            {/* {texts ?
            texts.map((text) => (
              <div>{text}</div>
            )) : null}
            {sounds ?
            sounds.map((sound) => (
              <div>{sound}</div>
            )) : null}
            {pictures ?
            pictures.map((picture) => (
              <div>{picture}</div>
            )) : null}
            {videos ?
            videos.map((video) => (
              <div>{video}</div>
            )) : null} */}
          </div>
        </div>
      </div>
      <CardEdit />
    </div>
  )
}

export default React.memo(Card);