/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-undef */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// Scss
import './homePage.scss';

// react-router-dom
//==================
import { Link } from "react-router-dom";

// Components
import YoutubeEmbed from "../../utils/YoutubeEmbed/YoutubeEmbed";
import Button from '../../utils/Button/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

// Npm package


const HomePage = () => {
    // enter the end of a youtube link
    const WelcomVid = 'o1eHKf-dMwo'
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        handleOpen()
    }, [])
    return (
        <>
            <div className='homepage'>

                <h2 className='homepage-title'> Document Your Life </h2>
                <div>
                    <YoutubeEmbed embedId={WelcomVid} />
                </div>
            </div>
            <div className='homepage-btn'>
                <Button btnName="Let's Go!" path='/signup' />
            </div>
            <div className='homeModal'>
                <Modal
                    className="modalHover"
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description">
                    <Box className="modalHover-box" >
                        <h1>Bienvenue sur DYL !</h1>
                        <ul className='modalHover-container'>
                            <li className='modalHover-container-text'>Ici vous pourrez illustrer votre quotidien à l'aide de sons, d'images et bien plus.</li>
                            <h3 className='modalHover-h3'>Pour bien commencer :</h3>
                            <li className='modalHover-container-step'>1. Inscrivez-vous et connectez-vous </li>
                            <li className='modalHover-container-step'>2. Accédez à votre dashboard </li>
                            <li className='modalHover-container-step'>3. Créez une nouvelle carte afin d'illustrer votre journée </li>

                            <li className='modalHover-container-text'>Pour plus de précision vous pouvez lire la vidéo de présentation de DYL.</li>

                            {/* <li className='modalHover-container-text'>Bloaz pal. Abardaez burzhud. C’har asied. Merc’her arrebeuri. Pegañ skouarn. Hor kleñved. Bobl sioul. Tregastell broust. Gouere unan. Sellout askorn.</li> */}
                        </ul>
                        <button className='modalHover-button'>
                            <Link to='/login'>Connexion</Link>
                        </button>
                        <button className='modalHover-button'>
                            <Link to='/signup'>Inscription</Link>
                        </button>
                        <button className='modalHover-skipButton' onClick={handleClose}>Passer</button>

                    </Box>
                </Modal>
            </div>
        </>
    );
};

HomePage.propTypes = {
    className: PropTypes.string,
};
HomePage.defaultProps = {
    className: '',
};
export default React.memo(HomePage);
