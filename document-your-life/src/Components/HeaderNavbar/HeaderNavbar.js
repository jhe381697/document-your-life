/* eslint-disable react/jsx-key */
import PropTypes from 'prop-types';
import './headerNavbar.scss';
import React, { memo, useContext } from 'react';
// import logo from '../../LogoDyl/dyllogo.png'
// react-router-dom
//==================
import { Link, useLocation } from "react-router-dom";
import Auth from '../../contexts/Auth';
//==================

const HeaderNavbar = ({ handleConnection }) => {
    const { isAuthenticated } = useContext(Auth);
    const LocationURL = useLocation()
    return (
        <div className='HeaderNavbar'>
            {/* <img className='HeaderNavbar-logo' src={logo} /> */}
            {LocationURL.pathname === '/' || LocationURL.pathname === '/login' || LocationURL.pathname === '/signup' ? (
                <>
                    <div className='HeaderNavbar-link-bottom-container'> 
                    {LocationURL.pathname !== '/signup' && <>
                    <Link className='HeaderNavbar-link-bottom' to='/about' >À propos</Link>
                    <Link className='HeaderNavbar-link-bottom' to='/contact' >Contact</Link>
                    </>}
                </div>
                <div className='HeaderNavbar-copyright-bottom-container'> 
                    {LocationURL.pathname !== '/signup' && <>
                    <span className='HeaderNavbar-copyright-bottom' >©</span>
                    </>}
                </div>
                    </>
            )
                :
                null}
            {/* condition if connected then show  link to logout and if disconnected show link to login */}
            {!isAuthenticated ? (
                <>
                    {LocationURL.pathname === '/' ?
                        <Link className='HeaderNavbar-link' to='/login' >Connexion</Link> :
                        <Link className='HeaderNavbar-link' to='/' >Accueil</Link>

                    }

                </>
            ) : (
                <>
                    <Link className='HeaderNavbar-link' to='/Dashboard/calendar' >Dashboard</Link>
                    {LocationURL.pathname !== '/profil' &&
                    <Link className='HeaderNavbar-link' to='/profil' >Profil</Link>}
                    {LocationURL.pathname === '/profil' &&
                        <Link onClick={handleConnection} className='HeaderNavbar-link' to='/' >Déconnexion</Link>}

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
