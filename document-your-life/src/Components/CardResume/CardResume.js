/* eslint-disable react/jsx-key */
import React from 'react'
import { useState, useEffect } from 'react';
import { getTodayCard } from '../../RequestsAxios/CardsReq';
import { Link, Route, Routes } from "react-router-dom"

import './cardResume.scss'
import Spinner from '../../utils/Spinner/Spinner';
import Card from '../Card/Card';

const CardResume = () => {
  const [cardId, setCardId] = useState();

  const [isLoading, setIsLoading] = useState(true)
  const [date, setDate] = useState("");
  const [mood, setMood] = useState([]);
  const [texts, setTexts] = useState([]);
  const [sounds, setSounds] = useState([]);
  const [pictures, setPictures] = useState([]);
  const [videos, setVideos] = useState([]);

  const todayCardData = async () => {
    const todayCard = await getTodayCard();
    if (todayCard.status === 200) {
      setCardId(todayCard.data.lastCards[0].id)
      setDate(todayCard.data.lastCards[0].dateString);
      setMood(oldArray => [...oldArray, todayCard.data.lastCards[0].moodlabel]);
      setTexts(oldArray => [...oldArray, todayCard.data.lastCards[0].text]);
      setSounds(oldArray => [...oldArray, todayCard.data.lastCards[0].audio]);
      setPictures(oldArray => [...oldArray, todayCard.data.lastCards[0].image]);
      setVideos(oldArray => [...oldArray, todayCard.data.lastCards[0].video]);
      setIsLoading(false)
      return
    }
    else {
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
    <>
    <Link to={'/card/' + cardId }>
      <div className='cardresume-container'>
        {isLoading ? <Spinner /> :
          <div className='cardresume'>
            <h2>{date}</h2>
            <div className='cardresume-mood'>
              <h3>Humeur de la journée</h3>
              <div className='cardresume-mood-emoji'>{mood}</div>
            </div>
            <div className='cardresume-medium'>
              <h3>Résumé de la journée</h3>
              <div className='cardresume-medium-infos'>
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
      </div>
    </Link >
      <Routes>
        <Route path={'/card/' + cardId} element={<Card />} />
      </Routes>
      </>
  )
}

export default React.memo(CardResume);