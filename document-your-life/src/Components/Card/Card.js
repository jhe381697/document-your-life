 /* eslint-disable react/jsx-key */
import React from 'react'
import { useState, useEffect } from 'react';
import getAllCards, { getTodayCard } from '../../RequestsAxios/CardsReq';
import CardEdit from '../CardEdit/CardEdit';

import './card.scss';
import { useLocation } from 'react-router-dom';
import Spinner from '../../utils/Spinner/Spinner';
import labelToColor from '../../utils/LabelToColor/LabelToColor';

const Card = () => {
  let idFromLocation = useLocation().pathname.split('/card/').at(-1)
  const [isLoading, setIsLoading] = useState(true)

  const [date, setDate] = useState();

  const [mood, setMood] = useState([]);
  const [texts, setTexts] = useState([]);
  const [sounds, setSounds] = useState([]);
  const [pictures, setPictures] = useState([]);
  const [videos, setVideos] = useState([]);



  async function dayCardData() {
    const dayCard = await getAllCards(idFromLocation);
    if (dayCard.status === 200){
        setDate(dayCard.data.card.dateString);
      setMood(oldArray => [...oldArray, dayCard.data.card.moodlabel]);
      setTexts(oldArray => [...oldArray, dayCard.data.card.text]);
      setSounds(oldArray => [...oldArray, dayCard.data.card.audio]);
      setPictures(oldArray => [...oldArray, dayCard.data.card.image]);
      setVideos(oldArray => [...oldArray, dayCard.data.card.video]);
      setIsLoading(false)
        return
      }
    else {
      console.log('erreur')
    }
  }

  const todayDateData = async () => {
    const todayDate = await getTodayCard();
    if(todayDate.statue === 200){
console.log(todayDate)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    dayCardData();
    todayDateData();
  }, []);
console.log(mood)
  return (
    <div className='card-container'>
      {isLoading ? <Spinner /> :

        <div style={labelToColor(mood[0])} className='card'>
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
                          <img className='card-user-video' src={picture}></img>
            )) : null}
            {videos ?
            videos.map((video) => (
              <div>{video}</div>
            )) : null}
          </div>
        </div>
      </div>
            }
            <CardEdit/> 
    </div>
  )
}

export default React.memo(Card);