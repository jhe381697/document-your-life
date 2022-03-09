/* eslint-disable react/jsx-key */
import React from 'react';
import PropTypes from 'prop-types';
import './devCard.scss';

const DevCard = ({ name, github, avatar }) => {
    return (
      <a title='Cliquez pour accéder à nos github' className='devCard-link' href={github}>
      <div className='devCard'>
        <img className='devCard-avatar' src={avatar}></img>
        <h3 className='devCard-name'>{name}</h3>
      </div>
      </a>
    );
};

DevCard.propTypes = {
    name: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
};
export default React.memo(DevCard);
