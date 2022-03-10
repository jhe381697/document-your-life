/* eslint-disable react/jsx-key */
import React from 'react'
import PropTypes from 'prop-types';

import { useState, useEffect } from 'react';
import { getTodayCard } from '../../RequestsAxios/CardsReq';
import { Link, Route, Routes } from "react-router-dom"

import './cardResume.scss'
import Spinner from '../../utils/Spinner/Spinner';
import Card from '../Card/Card';
import labelToColor from '../../utils/LabelToColor/LabelToColor';

const CardResume = ({id}) => {
  const [cardId, setCardId] = useState();

  const [isLoading, setIsLoading] = useState(true)
  const [date, setDate] = useState([null]);
  const [mood, setMood] = useState([null]);
  const [texts, setTexts] = useState([null]);
  const [sounds, setSounds] = useState([null]);
  const [pictures, setPictures] = useState([null]);
  const [videos, setVideos] = useState([null]);

  const todayCardData = async () => {
    const todayCard = await getTodayCard();
    console.log("on id:",id)
    if (todayCard.status === 200) {
      setCardId(todayCard.data.lastCards[id].id)
      setDate(todayCard.data.lastCards[id].dateString);
      setMood(todayCard.data.lastCards[id].moodlabel);
      setTexts( todayCard.data.lastCards[id].text);
      setSounds(todayCard.data.lastCards[id].audio);
      setPictures(todayCard.data.lastCards[id].image);
      setVideos(todayCard.data.lastCards[id].video);
      setIsLoading(false)
      return
    }
    else {
      console.log('erreur')
    }
  };

  useEffect(() => {
    setIsLoading(true)
    todayCardData();
    console.log(id, "from resum")
    setIsLoading(false)
  }, [id])


  return (
    <>
    <Link to={'/card/' + cardId }>
      <div className='cardresume-container'>
        {isLoading ? <Spinner /> :
            <div style={labelToColor(mood)} className='cardresume'>
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
                    <div key={text}>{text}</div>
                  )) : null}

                {sounds ?
                  sounds.map((sound) => (
                    <div key={sound}>{sound}</div>
                  )) : null}

                  {pictures && pictures === [] ?
                  pictures.map((picture) => (
                    <img key={picture} className='card-user-video' src={picture}></img>
                  )) : null}

                  {videos && videos === []?
                    videos.map((videos) => (
                      <div key={videos} className="video-responsive">
                        <iframe
                          src={videos}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title="Embedded youtube"
                        />
                      </div>
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
CardResume.propTypes = {
  id: PropTypes.number.isRequired,
};

export default React.memo(CardResume);