/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-undef */
import React  from 'react';
import PropTypes from 'prop-types';
// Scss
import './homePage.scss';

// Components
import YoutubeEmbed from "../../utils/YoutubeEmbed/YoutubeEmbed";
import Button from '../../utils/Button/Button';

// Npm package

// React Router Dom

const HomePage = () => {
    // enter the end of a youtube link
    const WelcomVid = 'o1eHKf-dMwo' 
    
    return (
        <>
        <div className='homepage'>
            <h2 className='homepage-title'> Document Your Life </h2>
            <div>
             <YoutubeEmbed embedId={WelcomVid} />
            </div>
        </div>
        <div className='homepage-btn'>
            <Button btnName="Let's Go!" path='/signup'/>
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
