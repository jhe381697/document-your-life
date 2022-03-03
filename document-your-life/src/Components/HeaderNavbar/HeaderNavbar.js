/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import './headerNavbar.scss';

// react-router-dom
//==================
import { Link } from "react-router-dom";
//==================

// ******MUI********
//==================

//==================

const HeaderNavbar = () => {
    // response=== response API/log

    const [logStatusBool, setLogStatusBool] = useState(false)

     
           let tokenState= localStorage.getItem("token")

           useEffect(() => {
    if (tokenState === null ){
        setLogStatusBool(true)
    } else (setLogStatusBool(false))
               if (logStatusBool === false)(
                   localStorage.removeItem("token")
               )
           }, [])
        
    return (
            <div className='HeaderNavbar'>
                <div className='HeaderNavbar-logo'></div>
            <Link className='HeaderNavbar-link' to='/about' >À propos</Link>
            <Link className='HeaderNavbar-link'  to='/contact' >Contact</Link>
            {/* condition if connected then show  link to logout and if disconnected show link to login */}
            <a className='HeaderNavbar-link' href='/login' >{!logStatusBool? "Connexion" : "Déconnexion"}</a>
            </div>
    );
};

HeaderNavbar.propTypes = {
};
HeaderNavbar.defaultProps = {
    className: '',
};
export default React.memo(HeaderNavbar);
