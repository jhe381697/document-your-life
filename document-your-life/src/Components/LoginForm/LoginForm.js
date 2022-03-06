/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
import React, { useContext, useEffect, useState } from 'react';

// react-router-dom
import { useNavigate } from "react-router-dom";

// scss
import './loginForm.scss';

import LoginAxios from '../../service/AuthApi';
import Notify from '../../utils/notifyFunc';
import Auth from '../../contexts/Auth';
import { ToastContainer } from 'react-toastify';



const LoginForm = () => {
    const { isAuthenticated, setIsAuthenticated } = useContext(Auth);
    const [user,setUser]=useState({
        email:"",
        password:""
    })
    let navigate = useNavigate();
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
    async function handleSubmit(e) {
        e.preventDefault();
try{
    const response = await LoginAxios(user)
    setIsAuthenticated(response)
    navigate('/profil')
    console.log(response)

} catch ({ response }) {
    Notify("Attention, votre identifiant ou votre mot de passe est incorrect.", "warning")
      console.log('asdfasdfasdfasdfasdf')
    
}

    }
    const handlechange = ({currentTarget}) => {
        const { name, value } = currentTarget;
        setUser({...user , [name]: value})
    }

    useEffect(() => {
     if(isAuthenticated){
         // eslint-disable-next-line react/prop-types
         navigate('/dashboard/calendar')
     }
    }, [navigate, isAuthenticated])
    
    return (
        <div className='formLogin'>
            <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
            <h2 className='formLogin-title'>Connexion</h2>
            <form className='formLogin-form' onSubmit={handleSubmit}>
                <p className='formLogin-form-title'>Email</p>
                <input
                    className='formLogin-form-input'
                    name='email'
                    onChange={handlechange}
                    type="email"
                    placeholder='Entrez votre Email' />

                <p className='formLogin-form-title'>Mot de passe</p>
                <input
                    className='formLogin-form-input'
                    name='password'
                    onChange={handlechange}
                    type="password"
                    placeholder='Entrez votre Mot de passe' />
                <div className='button-container'>
                    <button type="submit" className="AllButton">
                        <p className='AllButton-text'>Envoyer</p>
                    </button>
                </div>
            </form>
        </div>
    );
};

LoginForm.propTypes = {
};
export default React.memo(LoginForm);
