import React from 'react';
import Logo from '../../LogoDyl/dyllogo.png'
import './Spinner.scss'

// == Composant
const Spinner = () => <img src={Logo} className="spinner"/>;

// == Export
export default React.memo(Spinner);
