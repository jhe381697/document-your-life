/* eslint-disable react/jsx-key */
import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

// React Router Dom
import { Link } from "react-router-dom";
const Button = ({btnName, path,}) => {
   return (
           <button className="AllButton"><Link to={path} className='AllButton-text'>{btnName}</Link> </button>
   );
};

Button.propTypes = {
    btnName: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
};
Button.defaultProps = {
};
export default React.memo(Button);
