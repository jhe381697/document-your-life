import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './headerNavbar.scss';

// react-router-dom
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


const HeaderNavbar = () => {
    // TODO lien le setIsCoinnected a l'Api de connection si reponse 200 -> true else false
    const[isConnected,setIsConnected] = useState(true)
   return (
       <Router>
           <Link to='/about' >À propos</Link>
           <Link to='/contact' >Contact</Link>
           {/* condition if connected the show link to disconnect and if disconnected show link to connect */}
           {isConnected ? <Link to='/login' >Connexion</Link> : <Link to='/logout' >Déconnexion</Link>}
       </Router>
   );
};

HeaderNavbar.propTypes = {
    className: PropTypes.string,
};
HeaderNavbar.defaultProps = {
    className: '',
};
export default React.memo(HeaderNavbar);
