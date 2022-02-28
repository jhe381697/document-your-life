/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './headerNavbar.scss';

// react-router-dom
//==================
import { Link } from "react-router-dom";
import axiosLogStatusBool from '../../utils/isConnectedFunc';
//==================

// ******MUI********
//==================

//==================

const HeaderNavbar = () => {
    // response=== response API/log
    const response = 200
    // TODO lien le setIsCoinnected a l'Api de connection si reponse 200 -> true else false
    const [isConnected, setIsConnected] = useState(false)

    useEffect(() => {
        setIsConnected(axiosLogStatusBool(response))
    },[])


    return (
            <div className='HeaderNavbar'>
                <div className='HeaderNavbar-logo'></div>
            <Link className='HeaderNavbar-link' to='/about' >À propos</Link>
            <Link className='HeaderNavbar-link'  to='/contact' >Contact</Link>
            {/* condition if connected then show  link to logout and if disconnected show link to login */}
            {isConnected ? <Link className='HeaderNavbar-link' to='/login' >Connexion</Link> : <Link className='HeaderNavbar-link' to='/logout' >Déconnexion</Link>}
            </div>
    );
};

HeaderNavbar.propTypes = {
    className: PropTypes.string,
};
HeaderNavbar.defaultProps = {
    className: '',
};
export default React.memo(HeaderNavbar);
