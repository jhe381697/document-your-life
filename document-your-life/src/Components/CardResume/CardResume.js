/* eslint-disable react/jsx-key */
import React from 'react'
import PropTypes from 'prop-types';

import { useState, useEffect } from 'react';
import { getTodayCard } from '../../RequestsAxios/CardsReq';
import { Link, Navigate, Route, Routes } from "react-router-dom"

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

  const [toggleVideos, setToggleVideos] = useState(false);
  const [toggleSound, setToggleSound] = useState(false);

  const todayCardData = async () => {
    const todayCard = await getTodayCard();
    console.log("on id:",id)
    setIsLoading(true)
    if (todayCard.status === 200) {
    
      setCardId(todayCard.data.lastCards[id].id)
      setDate(todayCard.data.lastCards[id].dateString);
      setMood(todayCard.data.lastCards[id].moodlabel);
      setTexts(todayCard.data.lastCards[id].text);
      setSounds(todayCard.data.lastCards[id].audio);
      setPictures(todayCard.data.lastCards[id].image);
      setVideos(todayCard.data.lastCards[id].video);
      setIsLoading(false)
      return
    }
    else {
      setIsLoading(true)
      console.log('erreur')
    }
  };

  useEffect(() => {
    todayCardData();
    console.log(id, date ,"from resum")
  }, [id,date])


  useEffect(() => {

    if(videos){
      return setToggleVideos(true)
    }else{
      setToggleVideos(false)
    }
    if(sounds){
      return  setToggleSound(true)
    }else{
      setToggleSound(false)
    }
  }, [videos,sounds])

  return (
    <>
    <Link to={'/card/' + cardId }>
      <div className='cardresume-container'>
        {isLoading ? <Spinner /> :
            <div style={labelToColor(mood)} className='cardresume'>
              <h2>{date}</h2>
            <div className='cardresume-medium'>
              <h3>Résumé de la journée</h3>
              <div className='cardresume-medium-infos'>
                    <div className='cardresume-text'>{texts}</div>
                {toggleSound && 
                  <div>
                    <iframe
                      src={sounds}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Embedded youtube"
                    />
                    </div>
                  }
                    <img className='card-user-video' src={pictures}></img>
                    {toggleVideos && 
                        <iframe
                          src={videos}
                          height='600'
                          width='100%'
                          frameBorder="0"
                          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title="Embedded youtube"
                        />
                      }   
              </div>
            </div>
          </div>
        }
      </div>
    </Link >
      <Routes>
        <Route path={'/card/' + cardId} element={<Card />} />
        <Route path="/card/*" element={
          // last card resume
          <Navigate to='/page404' />} />
      </Routes>
      </>
  )
}
CardResume.propTypes = {
  id: PropTypes.number.isRequired,
};

export default React.memo(CardResume);