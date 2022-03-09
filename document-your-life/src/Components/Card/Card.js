 /* eslint-disable react/jsx-key */
import React from 'react'
import { useState, useEffect } from 'react';
import getAllCards, { getTodayCard } from '../../RequestsAxios/CardsReq';
import CardEdit from '../CardEdit/CardEdit';

import './card.scss';
import { useLocation } from 'react-router-dom';

const Card = () => {
  let idFromLocation = useLocation().pathname.split('/card/').at(-1)
  console.log(idFromLocation)
  const [date, setDate] = useState();
  const [mood, setMood] = useState([null]);
  const [texts, setTexts] = useState([null]);
  const [sounds, setSounds] = useState([null]);
  const [pictures, setPictures] = useState([null]);
  const [videos, setVideos] = useState([null]);
  const [isCardEditDisable, setIsCardEditDisable] = useState(true);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [lastDate, setLastDate] = useState();


  async function dayCardData() {
    const dayCard = await getAllCards(idFromLocation);
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
    if(todayDate.statue === 200){
    const nowDate = todayDate.data.lastCards[0].created_at;
    const nowCurrentDate = new Date();
    setCurrentDate(nowCurrentDate.toISOString().split('T')[0]);
    setLastDate(nowDate.split('T')[0]);
    console.table({lastDate, currentDate})
    if (lastDate !== currentDate) {
      setIsCardEditDisable(false);
      }
    } else (
      console.table({ lastDate, currentDate }))
  }

  useEffect(() => {
    dayCardData();
    todayDateData();
  }, []);

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
      {isCardEditDisable ? <CardEdit/> : null}
    </div>
  )
}

export default React.memo(Card);