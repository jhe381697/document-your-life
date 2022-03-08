/* eslint-disable react/jsx-key */
import * as React from 'react';
import { putTodayCard } from '../../RequestsAxios/CardsReq';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaughBeam, faSadTear, faSmileWink, faMehBlank, faKeyboard, faCamera, faMicrophone, faVideo, faTimes } from '@fortawesome/free-solid-svg-icons';

// import du css
import './cardEdit.scss';

// Style de la box material-ui
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function CardEdit() {
  // useState ouv/ferm Modal
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

  // Fonction pour fermeture modal via [X]
  function handleCloseModal (event) {
    event.preventDefault();
    open ? setOpen(false) : '';
    // Remise à (null) des icones cliqués à la ferm de la modale
    setHappy(null)
    setSad(null)
    setCool(null)
    setNeutral(null)
    setText(null)
    setPhoto(null)
    setMicro(null)
    setVideo(null)
  }
  
  // Usestates des icones
  
  const [happy, setHappy]= React.useState(null)
  const [sad, setSad]= React.useState(null)
  const [cool, setCool]= React.useState(null)
  const [neutral, setNeutral]= React.useState(null)
  
  const [text, setText] = React.useState(null);
	const [photo, setPhoto] = React.useState(null);
	const [micro, setMicro] = React.useState(null);
	const [video, setVideo] = React.useState(null);

  // // useStates emojis et médias
  // const[icons, setIcons] = React.useState(null);
  // const[medias, setMedias] = React.useState(null);

  // // Variables qui reçoivent les useStates
  // let iconsToDatabase = icons;
  // let mediasToDatabase = medias;
  // console.log(iconsToDatabase);
  // console.log(mediasToDatabase);

  // Requête POST axios vers la BDD
  const handleOnSubmit = async(e) => {
    e.preventDefault();
if(happy !== null){
  putTodayCard("moodLabel",happy)
  console.log("happy submitted")
}
if(sad !== null){
  putTodayCard("moodLabel",sad)
  console.log("sad submitted")
}
if(cool !== null){
  putTodayCard("moodLabel",cool)
  console.log("cool submitted")
}
if(neutral !== null){
  putTodayCard("moodLabel",neutral)
  console.log("neutral submitted")
}

if(text !== null){
  putTodayCard("text",text)
  console.log("text submitted")
}
if(photo !== null){
  putTodayCard("image",photo)
  console.log("image submitted")
}
if(micro !== null){
  putTodayCard("audio",micro)
  console.log("audio submitted")
}
if(video !== null){
  putTodayCard("video",video)
  console.log("video submitted")
}


    // Utilisation de la requête PUT de CardsReq
    
    // putTodayCard("moodLabel", iconsToDatabase)
    // putTodayCard("text", mediasToDatabase)
    // putTodayCard("image", mediasToDatabase)
    // putTodayCard("audio", mediasToDatabase)
    // putTodayCard("video", mediasToDatabase)

}

return (
      <div>
        <button className="button-card-edit" onClick={handleOpen}>
          <span className='button-card-edit-text'>
            New Day !          </span>
        </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}> 
            <div className="emojis">
            <FontAwesomeIcon icon={faTimes} className="fas fa-times" name="faTimes" onClick={handleCloseModal}/>
              <h3 className="emojis-text">Partage ton humeur du jour:</h3>
              <FontAwesomeIcon icon={faLaughBeam} className="fas fa-laugh-beam" name="Happy" onClick={() => setHappy("happy")} />
              <FontAwesomeIcon icon={faSadTear} className="fas fa-sad-tear" name="Sad" onClick={() => setSad("sad")} />
              <FontAwesomeIcon icon={faSmileWink} className="fas fa-smile-wink" name="Cool" onClick={() => setCool("cool")} />
              <FontAwesomeIcon icon={faMehBlank} className="fas fa-meh-blank" name="Neutral" onClick={() => setNeutral("neutral")} />
              </div>
            <div className="medias">
              <h3 className="medias-text">... et illustre ta journée:</h3>
              <FontAwesomeIcon icon={faKeyboard} className="fas fa-keyboard" name="Text" onClick={() => setText("text")}/>
              <FontAwesomeIcon icon={faCamera} className="fas fa-camera" name="Photo" onClick={() => setPhoto("image")}/>
              <FontAwesomeIcon icon={faMicrophone} className="fas fa-microphone" name="Micro" onClick={() => setMicro("audio")}/>
              <FontAwesomeIcon icon={faVideo} className="fas fa-video" name="Video" onClick={() => setVideo("video")} />
            </div>
            <Button sx={{ mt: 3 }} type="submit" variant="outlined" className="submit" onClick={handleOnSubmit}>Envoyer</Button>
          </Box> 
        </Modal>
      </div>
    );
}