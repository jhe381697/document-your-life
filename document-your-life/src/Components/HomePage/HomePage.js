/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-undef */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// Scss
import './homePage.scss';


import YoutubeEmbed from "../../utils/YoutubeEmbed/YoutubeEmbed";

// Npm package

// React Router Dom
import { Link } from "react-router-dom";

const HomePage = () => {
    // enter the end of a youtube link
    const WelcomVid = 'o1eHKf-dMwo' 
    useEffect(() => {
     
    }, [])
    
    return (
        <>
        <div className='homepage'>
            <h2 className='homepage-title'> Document Your Life </h2>
            <div>
             <YoutubeEmbed embedId={WelcomVid} />
            </div>
        </div>
            <Link to="/signup" className='homepage-link'>{/* Add cusctom button */}Let's go!</Link>
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
