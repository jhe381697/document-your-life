/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
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
    useEffect(() => {
       loginAxios(email, password)

    }, submited)


    return (
        <div className='formLogin'>
            <h2 className='formLogin-title'>Inscription</h2>
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
                <button type="submit" onSubmit={handleSubmit} className="formLogin-form-btn">
                    Envoyer
                </button>

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
