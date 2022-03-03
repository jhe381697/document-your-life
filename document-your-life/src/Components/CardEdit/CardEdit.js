/* eslint-disable react/jsx-key */
import * as React from 'react';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaughBeam,faSadTear, faSmileWink, faMehBlank } from '@fortawesome/free-solid-svg-icons';

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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // onClick déclenche une fonction handleOnClick qui déclenche une requête Post axios
  // Cette requête axios Post renvoie l'émoticone sélectionnée à la BD

  function handleClickHappy (event) {
    event.preventDefault();
    const mood = "Happy";
    console.log(mood);
    return mood; 
  }

  function handleClickSad (event) {
    event.preventDefault();
    const mood = "Sad";
    console.log(mood);
    return mood;
  }

  function handleClickCool (event) {
    event.preventDefault();
    const mood = "Cool";
    console.log(mood);
    return mood;
  }

  function handleClickNeutral (event) {
    event.preventDefault();
    const mood = "Neutral";
    console.log(mood);
    return mood;
  }

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
            {/* <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography> */}
  
            <div>
              <h3>Partage ton humeur du jour :</h3>
              <FontAwesomeIcon icon={faLaughBeam} className="fas fa-laugh-beam" name="faLaughBeam" onClick={handleClickHappy} />
              <FontAwesomeIcon icon={faSadTear} className="fas fa-sad-tear" name="faLaughBeam" onClick={handleClickSad} />
              <FontAwesomeIcon icon={faSmileWink} className="fas fa-smile-wink" name="faLaughBeam" onClick={handleClickCool} />
              <FontAwesomeIcon icon={faMehBlank} className="fas fa-meh-blank" name="faLaughBeam" onClick={handleClickNeutral} />
            </div>
            {/* <form>
              <label>Illustre ta journée</label>
              <p>Medium</p>
            </form> */}
          </Box>
        </Modal>
      </div>
    );
  }
