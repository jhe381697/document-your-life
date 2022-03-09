/* eslint-disable react/jsx-key */
import React from 'react'
import { useState, useEffect } from 'react';
import getAllCards, { getTodayCard } from '../../RequestsAxios/CardsReq';
// import CardEdit from '../CardEdit/CardEdit';

import './card.scss';

const Card = () => {
  const [date, setDate] = useState();
  const [mood, setMood] = useState([]);
  const [texts, setTexts] = useState([]);
  const [sounds, setSounds] = useState([]);
  const [pictures, setPictures] = useState([]);
  const [videos, setVideos] = useState([]);
  const [isCardEditDisable, setIsCardEditDisable] = useState(false);

  async function dayCardData() {
    const dayCard = await getAllCards(22);
    console.log(dayCard);
    if (dayCard.status === 200)
      {
        setDate(dayCard.data.card.dateString);
        setMood(dayCard.data.card.moodlabel);
        setTexts(dayCard.data.card.text);
        setSounds(dayCard.data.card.audio);
        setPictures(dayCard.data.card.image);
        setVideos(dayCard.data.card.video);

        return
      }
    else {
      dayCardData();
      console.log('erreur')
    }
  }

  const todayDateData = async () => {
    const todayDate = await getTodayCard();
    console.log(todayDate);
    // const lastDate = todayDate.data.lastCards[0].created_at;
    // const currentDate = Date.now();

  }

  console.log(mood);
  useEffect(() => {
    dayCardData();
    todayDateData();
  }, [])

  return (
    <div className='card-container'>
      <div className='card'>
        <h2>{date}</h2>
        <div className='card-mood'>
          <h3>Humeur de la journée</h3>
          <div className='card-mood-emoji'>{mood}</div>
        </div>
        <div className='card-medium'>
          <h3>Résumé de la journée</h3>
          <div className='card-medium-infos'>
            {texts ?
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
            )) : null}
          </div>
        </div>
      </div>
      <div>
        {/* {
          lastDate === currentDate ? <CardEdit/> : 
        } */}
      </div>
    </div>
  )
}

export default React.memo(Card);