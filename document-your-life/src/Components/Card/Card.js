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
  const [texts, setTexts] = useState(['']);
  const [sounds, setSounds] = useState([]);
  const [pictures, setPictures] = useState([]);
  const [videos, setVideos] = useState([]);



  async function dayCardData() {
    const dayCard = await getAllCards(idFromLocation);

    if (dayCard.status === 200) {
      setDate(dayCard.data.card.dateString);
      setMood(dayCard.data.card.moodlabel);
      setTexts(dayCard.data.card.text);
      setSounds(dayCard.data.card.audio);
      setPictures(dayCard.data.card.image);
      setVideos(dayCard.data.card.video);
      setIsLoading(false)
      return
    }
    else {
      console.log('erreur')
    }
  }

  const todayDateData = async () => {
    const todayDate = await getTodayCard();
    if (todayDate.statue === 200) {
      console.log(todayDate)
    }
  }

  useEffect((e) => {
    dayCardData()
    todayDateData()
    console.log(e)
  }, []);

  useEffect(() => {
    console.log(isLoading)
  }, []);

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
              <div>{texts}</div>
              <div>{sounds}</div>
              <img className='card-user-video' src={pictures}></img>
              <div className="video-responsive">
                <iframe
                  src={videos}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded youtube"
                />
              </div>
            </div>
          </div>
        </div>
      }
      <CardEdit />
    </div>
  )
}

export default React.memo(Card);