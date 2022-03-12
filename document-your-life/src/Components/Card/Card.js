/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React from 'react'
import { useState, useEffect } from 'react';
import getAllCards, { getTodayCard, patchTodayCardFiles, putTodayCardText, putTodayCarMood } from '../../RequestsAxios/CardsReq';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaughBeam, faSadTear, faSmileWink, faMehBlank, faKeyboard, faCamera, faMicrophone, faVideo, faTimes } from '@fortawesome/free-solid-svg-icons';

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
  const [edit, setEdit] = useState(true)

  const [happyPut, setHappyPut] = useState(null);
  const [sadPut, setSadPut] = useState(null);
  const [coolPut, setCoolPut] = useState(null);
  const [neutralPut, setNeutralPut] = useState(null);
  const [textPut, setTextPut] = useState(null);
  const [photoPut, setPhotoPut] = useState(null);
  const [microPut, setMicroPut] = useState(null);
  const [videoPut, setVideoPut] = useState(null);


  async function handleOnSubmit() {
    if (happyPut !== null) {
      await putTodayCarMood(happyPut)
      console.log("happy submitted")
    }
    if (sadPut !== null) {
      await putTodayCarMood(sadPut)
      console.log("sad submitted")
    }
    if (coolPut !== null) {
      await putTodayCarMood(coolPut)
      console.log("cool submitted")
    }
    if (neutralPut !== null) {
      await putTodayCarMood(neutralPut)
      console.log("neutral submitted")
    }
    if (textPut !== null) {
      await putTodayCardText(textPut)
      console.log("text submitted")
    }
    if (photoPut !== null) {
      const res = await patchTodayCardFiles("image", photoPut.target.files[0])
      console.log("image submitted", res)
    }
    if (microPut !== null) {
      await patchTodayCardFiles("audio", microPut.target.files[0])
      console.log("audio submitted")
    }
    if (videoPut !== null) {
      await patchTodayCardFiles("video", videoPut.target.files[0])
      console.log("video submitted")
    }
  }

  const handleInputChangePictures = (event) => {
    setPictures(event.target.files[0]).then(handleOnSubmit())
  }

  
  async function dayCardData(e) {
    const dayCard = await getAllCards(idFromLocation);
    if (dayCard.status === 200) {
      setDate(dayCard.data.card.dateString);
      setMood(dayCard.data.card.moodabel);
      setTexts(dayCard.data.card.text);
      setSounds(dayCard.data.card.audio);
      setPictures(dayCard.data.card.image);
      setVideos(dayCard.data.card.video);
      return setIsLoading(false)
    }
    else {
      console.log('erreur')
    }
  }
  const todayDateData = async () => {
    const todayDate = await getTodayCard();
  }

  useEffect(() => {
    dayCardData()
    handleOnSubmit()
    console.log(happyPut)
    setEdit(false)
  }, [edit,happyPut]);

  return (
    <>
      {edit ?
        (<div onClick={() => { setEdit(!edit) }} className='card-container'>
          {isLoading ? <Spinner /> :

            <div style={labelToColor(mood)} className='card'>
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
        </div>)
        :
        // Mode edit
        //============
        (<div onClick={() => { setEdit(!edit) }} className='card-container'>
          {isLoading ? <Spinner /> :

            <div style={labelToColor(mood)} className='card'>
              <p> Mode Edit</p>
              <h2>{date}</h2>
              <div className='card-mood'>

                <h3>Humeur de la journée</h3>
                <div className='card-mood-emoji'>{mood}</div>
                <div className="emojis">
                  <h3 className="emojis-text">Partage ton humeur du jour:</h3>
                  <FontAwesomeIcon icon={faLaughBeam} className="fas fa-laugh-beam" name="Happy" onClick={() => setHappyPut("happy")} />
                  <FontAwesomeIcon icon={faSadTear} className="fas fa-sad-tear" name="Sad" onClick={() => setSadPut("sad")} />
                  <FontAwesomeIcon icon={faSmileWink} className="fas fa-smile-wink" name="Cool" onClick={() => setCoolPut("cool")} />
                  <FontAwesomeIcon icon={faMehBlank} className="fas fa-meh-blank" name="Neutral" onClick={() => setNeutralPut("neutral")} />


                </div>
              </div>
              <div className='card-medium'>
                <h3>Résumé de la journée</h3>
                <div className='card-medium-infos'>
                  <div>{texts}</div>
                  <div>{sounds}</div>

                  <img className='card-user-video' src={pictures}></img>

                  <div>
                    <label >
                      <FontAwesomeIcon icon={faCamera} className="fas fa-camera" name="Photo" />
                      <input type="file" max-size="5000" name="upload_file" onChange={handleInputChangePictures} />
                    </label>
                  </div>
                  
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
        </div>)
        //============
      }
    </>
  )
}

export default React.memo(Card);