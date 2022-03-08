/* eslint-disable react/jsx-key */
import React from 'react'
import { useState, useEffect } from 'react';
import { getTodayCard } from '../../RequestsAxios/CardsReq';
import './cardResume.scss'

const CardResume = () => {

  // const [value, setValue] = useState();
  const [mood, setMood] = useState([]);
  const [mediums, setMediums] = useState([]);
  const [date, setDate] = useState();

  const todayCardData = async () => {
    const todayCard = await getTodayCard();
    console.log(todayCard);
    if (todayCard.status === 200)
      {
        setMood(todayCard.data.lastCards[0].moodlabel);
        setMediums(todayCard.data.lastCards[0].audio);
        setMediums(todayCard.data.lastCards[0].image);
        setMediums(todayCard.data.lastCards[0].text);
        setMediums(todayCard.data.lastCards[0].video);
        setDate(todayCard.data.lastCards[0].created_at);
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
  console.log(mediums);
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
            {/* {mediums.map((medium) => (
              
            ))} */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(CardResume);