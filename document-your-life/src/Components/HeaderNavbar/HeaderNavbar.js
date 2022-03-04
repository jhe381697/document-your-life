/* eslint-disable react/jsx-key */
import PropTypes from 'prop-types';
import './headerNavbar.scss';
import React, { memo } from 'react';

// react-router-dom
//==================
import { Link } from "react-router-dom";
//==================

const HeaderNavbar = ({ handleConnection, IsConnected }) => {

    return (
        <div className='HeaderNavbar'>
            <div className='HeaderNavbar-logo'>
                {/* TODO Add logo */}
            </div>
            <Link className='HeaderNavbar-link' to='/about' >À propos</Link>
            <Link className='HeaderNavbar-link' to='/contact' >Contact</Link>
            <Link className='HeaderNavbar-link' to='/profil' >Profil</Link>
            {/* condition if connected then show  link to logout and if disconnected show link to login */}
            {IsConnected ?
                <Link className='HeaderNavbar-link' to='/login' >Connexion</Link> : null}
            {!IsConnected ?
                <Link onClick={handleConnection} className='HeaderNavbar-link' to='/' >Déconnexion</Link> : null}
        </div>
    );
};

HeaderNavbar.propTypes = {
    IsConnected: PropTypes.bool.isRequired,
    handleConnection: PropTypes.func.isRequired,
};
export default memo(HeaderNavbar);
