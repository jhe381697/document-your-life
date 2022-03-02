/* eslint-disable react/jsx-key */
import React from 'react';
import PropTypes from 'prop-types';
import './headerNavbar.scss';

// react-router-dom
//==================
import { Link } from "react-router-dom";
//==================

// ******MUI********
//==================

//==================

const HeaderNavbar = ({ connectionStatus}) => {
    // response=== response API/log


    return (
            <div className='HeaderNavbar'>
                <div className='HeaderNavbar-logo'></div>
            <Link className='HeaderNavbar-link' to='/about' >À propos</Link>
            <Link className='HeaderNavbar-link'  to='/contact' >Contact</Link>
            {/* condition if connected then show  link to logout and if disconnected show link to login */}
            {connectionStatus ? <Link className='HeaderNavbar-link' to='/login' >Connexion</Link> : <Link className='HeaderNavbar-link' to='/logout' >Déconnexion</Link>}
            </div>
    );
};

HeaderNavbar.propTypes = {
    connectionStatus: PropTypes.bool,
};
HeaderNavbar.defaultProps = {
    className: '',
};
export default React.memo(HeaderNavbar);
