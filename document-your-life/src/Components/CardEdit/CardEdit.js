/* eslint-disable react/jsx-key */
import * as React from 'react';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaughBeam, faSadTear, faSmileWink, faMehBlank, faKeyboard, faCamera, faMicrophone, faVideo, faTimes } from '@fortawesome/free-solid-svg-icons';
// import axios pour la requête
import axios from "axios";

import './cardEdit.scss';

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

  // Importation du userId via le localStorage
  let userId= localStorage.getItem('userId')

	// useState pour ouv/ferm Modal
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

  // Fonction pour fermeture modal via [X]
  function handleCloseModal (event) {
    event.preventDefault();
    open ? setOpen(false) : '';
  }

  // Essai d'un useState général
  const[icons, setIcons] = React.useState(null);
  const[medias, setMedias] = React.useState(null);

  // Fonction au Submit qui récupère le State
// async function setSubmit () {
//   await axiosRequest(icons);
// }

  // Fonction au click qui récupère le name de la cible
  // function handleClick (event) {
  //   event.preventDefault();
  //   setIcons(event.target.name);
  //   console.log(icons)
  // }

	// useState qui correspond à chaque emoticon cliqué
	// const [happy, setHappy] = React.useState('');
	// const [sad, setSad] = React.useState('');
	// const [cool, setCool] = React.useState('');
	// const [neutral, setNeutral] = React.useState('');

  // useState qui correspond à chaque média cliqué
	// const [text, setText] = React.useState('');
	// const [photo, setPhoto] = React.useState('');
	// const [micro, setMicro] = React.useState('');
	// const [video, setVideo] = React.useState('');

	// fonctions "onClick" changent les setStates Emojis
	// function handleClickHappy (event) {
  //   event.preventDefault();
  //   setIcons("Happy");
  //   console.log(event.target)
  // }

	// function handleClickSad (event) {
  //   event.preventDefault();
  //   setIcons("Sad");
  //   console.log(event.target)
  // }

  // function handleClickCool (event) {
  //   event.preventDefault();
  //   setIcons("Cool");
  //   console.log(event.target)
  // }

  // function handleClickNeutral (event) {
  //   event.preventDefault();
  //   setIcons("Neutral");
  //   console.log(event.target)
  // }

  // fonctions "onClick" changent les setStates Médias
	// function handleClickKeyboard (event) {
  //   event.preventDefault();
  //   setIcons("text");
  //   console.log(event.target)
  // }

	// function handleClickPhoto (event) {
  //   event.preventDefault();
  //   setIcons("Photo");
  //   console.log(event.target)
  // }

  // function handleClickMicrophone (event) {
  //   event.preventDefault();
  //   setIcons("Micro");
  //   console.log(event.target)
  // }

  // function handleClickVideo (event) {
  //   event.preventDefault();
  //   setIcons("Video");
  //   console.log(event.target)
  // }

  // async function axiosRequest (params) {
  //   await axios.post(`https://dyl-api.herokuapp.com/user/${userId}/cards/today`, {moodLabel: params})
  //   .then(response => console.log(response)
  //   .catch(error => console.log(error)))
  // }
  // axiosRequest();

  // let iconsToDatabase = new FormData();

  // iconsToDatabase.set(icons, '');

  let iconsToDatabase = icons;
  let mediasToDatabase = medias;
  console.log(iconsToDatabase);
  console.log(mediasToDatabase);

  async function axiosRequest (iconsToDatabase, mediasToDatabase) {
    await axios.post(`https://dyl-api.herokuapp.com/user/${userId}/cards/today`, {
      iconsToDatabase, mediasToDatabase})
    .then(response => console.log(response)
    .catch(error => console.log(error)))
  }
  axiosRequest();

return (
      <div>
        <button className="button-card-edit" onClick={handleOpen}>
          <span className='button-card-edit-text'>
            New Day !
          </span>
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
              <FontAwesomeIcon icon={faLaughBeam} className="setIconsfas fa-laugh-beam" name="Happy" onClick={() => setIcons("Happy")} />
              <FontAwesomeIcon icon={faSadTear} className="fas fa-sad-tear" name="Sad" onClick={() => setIcons("Sad")} />
              <FontAwesomeIcon icon={faSmileWink} className="fas fa-smile-wink" name="Cool" onClick={() => setIcons("Cool")} />
              <FontAwesomeIcon icon={faMehBlank} className="fas fa-meh-blank" name="Neutral" onClick={() => setIcons("Neutral")} />
            </div>
            <div className="medias">
              <h3 className="medias-text">... et illustre ta journée:</h3>
              <FontAwesomeIcon icon={faKeyboard} className="fas fa-keyboard" name="Text" onClick={() => setMedias("Text")}/>
              <FontAwesomeIcon icon={faCamera} className="fas fa-camera" name="Photo" onClick={() => setMedias("Photo")}/>
              <FontAwesomeIcon icon={faMicrophone} className="fas fa-microphone" name="Micro" onClick={() => setMedias("Micro")}/>
              <FontAwesomeIcon icon={faVideo} className="fas fa-video" name="Video" onClick={() => setMedias("Video")} />
            </div>
            <button type="submit">Envoyer</button>
          </Box> 
        </Modal>
      </div>
    );
}