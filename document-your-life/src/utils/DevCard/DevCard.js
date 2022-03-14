/* eslint-disable react/jsx-key */
import React from 'react';
import PropTypes from 'prop-types';
import './devCard.scss';

const DevCard = ({ name, role, github, avatar }) => {
    return (
      <div className='devCard-container'>
        <a title='GitHub Pages' className='devCard-link' href={github} target='_blank' rel= 'noreferrer' >
        <div className='devCard'>
          <img className='devCard-avatar' src={avatar}></img>
          <h3 className='devCard-name'>{name}</h3>
          <p>{role}</p>
        </div>
        </a>
      </div>
    );
};

DevCard.propTypes = {
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
};
export default React.memo(DevCard);
