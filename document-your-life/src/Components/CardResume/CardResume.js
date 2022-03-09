/* eslint-disable react/jsx-key */
import React from 'react'
import { useState, useEffect } from 'react';
import { getTodayCard } from '../../RequestsAxios/CardsReq';
import './cardResume.scss'

const CardResume = () => {

  // const [value, setValue] = useState();
  const [date, setDate] = useState();
  const [mood, setMood] = useState([]);
  const [texts, setTexts] = useState([]);
  const [sounds, setSounds] = useState([]);
  const [pictures, setPictures] = useState([]);
  const [videos, setVideos] = useState([]);



  const todayCardData = async () => {
    const todayCard = await getTodayCard();
    console.log(todayCard);
    if (todayCard.status === 200)
      {
        setDate(todayCard.data.lastCards[0].created_at);
        setMood(todayCard.data.lastCards[0].moodlabel);
        setTexts(todayCard.data.lastCards[0].text);
        setSounds(todayCard.data.lastCards[0].audio);
        setPictures(todayCard.data.lastCards[0].image);
        setVideos(todayCard.data.lastCards[0].video);
        return
      }
    else {
      todayCardData();
      console.log('erreur')
    }
  };

  useEffect(() => {
    todayCardData();
  }, [])
  console.log(mood);
  console.log(sounds);
  console.log(date);

  return (
    <div className='cardresume-container'>
      <div className='cardresume'>
        <h2>{date}</h2>
        <div className='cardresume-mood'>
          <h3>Humeur de la journée</h3>
          <div className='cardresume-mood-emoji'>{mood}</div>
        </div>
        <div className='cardresume-medium'>
          <h3>Résumé de la journée</h3>
          <div className='cardresume-medium-infos'>
            {texts.map((text) => (
              {text}
            ))}
            {sounds.map((sound) => (
              {sound}
            ))}
            {pictures.map((picture) => (
              {picture}
            ))}
            {videos.map((video) => (
              {video}
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(CardResume);