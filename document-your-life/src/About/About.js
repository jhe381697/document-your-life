/* eslint-disable react/jsx-key */
import React from 'react';
import PropTypes from 'prop-types';
import './about.scss';

const About = () => {
   return (
       <div className='About'>
            <h2>
                Á propos
            </h2>
        </div>
   );
};

About.propTypes = {
    className: PropTypes.string,
};
About.defaultProps = {
    className: '',
};
export default React.memo(About);
