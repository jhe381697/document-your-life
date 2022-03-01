/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// react-router-dom
import { Link } from "react-router-dom";

// scss
import './loginForm.scss';

import loginAxios from '../../Login/LoginRequest';

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [submited, setSubmited] = useState(true)
    /**
     * @function handleSubmit
     * @param {*} e 
     * use to prevent reload
     * set a condition for the submit
     * conditions:
     * -checkbox checked
     * -all inputs completed 
     * -and same passwort and password confirmation
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(loginAxios.response)
        setSubmited(!submited)

    }


    return (
        <div className='formLogin'>
            <h2 className='formLogin-title'>Connexion</h2>
            <form className='formLogin-form' onSubmit={handleSubmit}>
                <p className='formLogin-form-title'>Email</p>
                <input
                    className='formLogin-form-input'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder='Entrez votre Email' />

                <p className='formLogin-form-title'>Mot de passe</p>
                <input
                    className='formLogin-form-input'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder='Entrez votre Mot de passe' />
                <div className='button-container'>
                <button type="submit" onSubmit={handleSubmit} className="AllButton">
                    <p className='AllButton-text'>Envoyer</p>  
                    </button>
                </div>

                <Link to="/dashboard/calendar">TODO remov link</Link>
            </form>
        </div>
    );
};

LoginForm.propTypes = {
    className: PropTypes.string,
};
LoginForm.defaultProps = {
    className: '',
};
export default React.memo(LoginForm);
