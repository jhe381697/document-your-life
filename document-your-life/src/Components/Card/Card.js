/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React from 'react'
import { useState, useEffect } from 'react';
import getAllCards, { getTodayCard, putTodayCard } from '../../RequestsAxios/CardsReq';
import TextField from '@mui/material/TextField';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaughBeam, faSadTear, faSmileWink, faMehBlank, faKeyboard, faCamera, faMicrophone, faVideo, faTimes } from '@fortawesome/free-solid-svg-icons';

import './card.scss';
import { useLocation } from 'react-router-dom';
import Spinner from '../../utils/Spinner/Spinner';
import labelToColor from '../../utils/LabelToColor/LabelToColor';

const Card = () => {

  let idFromLocation = useLocation().pathname.split('/card/').at(-1)
  const [isLoading, setIsLoading] = useState(true)
  const [edit, setEdit] = useState(true)
  const [toggleText, setToggleText] = useState(true)
  const [togglePicture, setTogglePicture] = useState(true)
  const [render, setRender] = useState(true)

  const [date, setDate] = useState();
  const [mood, setMood] = useState([]);
  const [texts, setTexts] = useState(['']);
  const [sounds, setSounds] = useState([]);
  const [pictures, setPictures] = useState([]);
  const [videos, setVideos] = useState([]);

  const [happyPut, setHappyPut] = useState(null);
  const [sadPut, setSadPut] = useState(null);
  const [coolPut, setCoolPut] = useState(null);
  const [neutralPut, setNeutralPut] = useState(null);
  const [textPut, setTextPut] = useState('');
  const [photoPut, setPhotoPut] = useState(null);
  const [microPut, setMicroPut] = useState(null);
  const [videoPut, setVideoPut] = useState(null);

  async function handleSubCard(type, eventTarget) {
    const value = eventTarget
    await putTodayCard(type, value)
    setRender(!render)
  }

  async function handleOnSubmit(e) {
    e.preventDefault();
    if (happyPut !== null) {
      await putTodayCard("moodLabel", happyPut)
      setEdit(!edit)
      console.log("happy submitted")
      return setRender(!render)
    }
    if (sadPut !== null) {
      await putTodayCard("moodLabel", sadPut)
      setEdit(!edit)
      console.log("sad submitted")
      return setRender(!render)
    }
    if (coolPut !== null) {
      await putTodayCard("moodLabel", coolPut)
      setEdit(!edit)
      console.log("cool submitted")
      return setRender(!render)
    }
    if (neutralPut !== null) {
      await putTodayCard("moodLabel", neutralPut)
      setEdit(!edit)
      console.log("neutral submitted")
      return setRender(!render)
    }
    if (textPut !== null) {
      await putTodayCard("text", textPut)
      setToggleText(!toggleText)
      console.log("text submitted")
      return setRender(!render)
    }
    if (photoPut !== null) {
      await putTodayCard("image", photoPut.target.files[0])
      setEdit(!edit)
      console.log("image submitted")
      return setRender(!render)
    }
    if (microPut !== null) {
      await putTodayCard("audio", microPut.target.files[0])
      setEdit(!edit)
      console.log("audio submitted")
      return setRender(!render)
    }
    if (videoPut !== null) {
      await putTodayCard("video", videoPut.target.files[0])
      setEdit(!edit)
      console.log("video submitted")
      return setRender(!render)
    }

  }

  function handleText(e) {
    e.preventDefault();
    setTextPut(e.target.value)
  }


  async function dayCardData(e) {
    const dayCard = await getAllCards(idFromLocation);

    if (dayCard.status === 200) {
      setDate(dayCard.data.card.dateString);
      setMood(dayCard.data.card.moodlabel);
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
    if (todayDate.statue === 200) {
      console.log(todayDate)

    }

  }


  useEffect((e) => {
    dayCardData()
  }, [
    render,
  ]);

  useEffect((e) => {
    handleOnSubmit()
  }, [
    render,
    photoPut,
    microPut,
    videoPut
  ]);

  useEffect((e) => {
    todayDateData()
  }, []);

  console.log(render)
  return (
    <>

      {!edit && <p>Edit mode</p>}
      <button className='editMode-btn' onClick={() => { setEdit(!edit) }}  >Edit Mode</button>
      <div className='card-container'>
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
                {!toggleText &&
                  <form onSubmit={handleOnSubmit} >
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Exprime toi"
                      multiline
                      value={textPut}
                      onChange={handleText}
                    />
                    <button onClick={() => handleOnSubmit} >Envoyer</button>

                  </form>
                }

                <div onClick={() => { setToggleText(!toggleText) }} >  {texts}</div>
                <div>{sounds}</div>

                <label >
                  <input type="file" max-size="5000" name="upload_file" onChange={setPhotoPut}>
                  </input>
                  <img onClick={() => { setTogglePicture(!togglePicture) }} className='card-user-video' src={pictures}/>
                </label>

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
        {!edit &&
          <form className='editMode' onSubmit={handleOnSubmit} >
            <div className='editMode-moods'>
              <FontAwesomeIcon icon={faLaughBeam} className="editMode-moods-mood" name="Happy" onClick={() => handleSubCard("moodLabel", "happy")} />
              <FontAwesomeIcon icon={faSadTear} className="editMode-moods-mood" name="Sad" onClick={() => handleSubCard("moodLabel", "sad")} />
              <FontAwesomeIcon icon={faSmileWink} className="editMode-moods-mood" name="Cool" onClick={() => handleSubCard("moodLabel", "cool")} />
              <FontAwesomeIcon icon={faMehBlank} className="editMode-moods-mood" name="Neutral" onClick={() => handleSubCard("moodLabel", "neutral")} />
            </div>
            <div className='editMode-container'>
              <div >
                <FontAwesomeIcon onClick={() => setToggleText(!toggleText)} icon={faKeyboard} className="editMode-file" name="Text" />
              </div>

              <div>
                <label >
                  <FontAwesomeIcon icon={faVideo} className="editMode-file" name="Video" />
                  <input type="file" max-size="5000" name="upload_file" onChange={setVideoPut} />
                </label>
              </div>

              <div>
                <label >
                  <FontAwesomeIcon icon={faMicrophone} className="editMode-file" name="Micro" />
                  <input type="file" max-size="5000" name="upload_file" onChange={setMicroPut} />
                </label>
              </div>

            </div>
          </form>
        }
      </div>

    </>
  )
}

export default React.memo(Card);