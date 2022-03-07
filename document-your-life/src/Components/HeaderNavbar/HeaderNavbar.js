/* eslint-disable react/jsx-key */
import PropTypes from 'prop-types';
import './headerNavbar.scss';
import React, { memo, useContext } from 'react';

// react-router-dom
//==================
import { Link } from "react-router-dom";
import Auth from '../../contexts/Auth';
//==================

const HeaderNavbar = ({ handleConnection }) => {
    const { isAuthenticated } = useContext(Auth);

    return (
        <div className='HeaderNavbar'>
            <div className='HeaderNavbar-logo'>
                {/* TODO Add logo */}
            </div>
            <Link className='HeaderNavbar-link' to='/about' >À propos</Link>
            <Link className='HeaderNavbar-link' to='/contact' >Contact</Link>
            {/* condition if connected then show  link to logout and if disconnected show link to login */}
            {!isAuthenticated ? (
                <>
                    <Link className='HeaderNavbar-link' to='/login' >Connexion</Link>

                </>
            ) : (
                <>
                    <Link className='HeaderNavbar-link' to='/profil' >Profil</Link>
                    <Link onClick={handleConnection} className='HeaderNavbar-link' to='/' >Déconnexion</Link>
                </>
            )}
        </div>
    )
};

HeaderNavbar.propTypes = {
    IsConnected: PropTypes.bool.isRequired,
    handleConnection: PropTypes.func.isRequired,
};
export default memo(HeaderNavbar);
