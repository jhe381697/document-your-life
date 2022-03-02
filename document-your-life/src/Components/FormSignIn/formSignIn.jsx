/* eslint-disable no-useless-escape */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './formSignIn.scss';

// react-router-dom
import { useNavigate } from "react-router-dom";

// axios post request
import SignupAxios from '../../RequestsAxios/SignUp';

// package npm 
import PasswordChecklist from "react-password-checklist"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Notify from '../../utils/notifyFunc';

const FormSignIn = () => {
  let navigate = useNavigate();

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConf, setPasswordConf] = useState('')
    const [checkbox, setCheckbox] = useState(false)
    const [checkboxText, setCheckboxText] = useState(false)
    const [showModal, setShowModal] = useState(true)


   // password conditions
    // const [passwordLength, setPasswordLength] = useState(false)
    const [isValid, setIsValid] = useState(false)
    // Singup notification



   /**
     * 
     * @param {event}
     * change checkbox value ( true or false ) with onChange on checkbox
     */
    const handleCheckbox = (e) => {
    console.log(e.target.checked)
        setCheckbox(!checkbox)
    }
    const handleIsValid = (e) => {
        setIsValid(e)
        console.log(e,'sdf')
    }
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
    const handleSubmit =(e) => {
    e.preventDefault();
    let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if( checkbox === true
         && firstName !== ''
         && lastName !== ''
         && email !== ''
         && isValid === true
         && reg.test(email) 
         ){
            SignupAxios(email,firstName,lastName,password,passwordConf)
            setShowModal(false)
            Notify(`Salut ${firstName}, Bravo pour ton inscription`,"success")
            console.log('submited')
            navigate('/login', { replace: true })
            }
        else{
            Notify(`Une erreur est survenue lors de l'inscription`,"error")
                console.log('please check form')
                setCheckboxText(true)
                return null
            }
            console.log(isValid)
    }


   return (
       <>
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
        />{showModal?
       <div className='formSignin'>
            <h2 className='formSignin-title'>Inscription</h2>
                <form className='formSignin-form' onSubmit={handleSubmit}>

                <h3 className='formSignin-form-title'>Prénom</h3>
                <input 
                className='formSignin-form-input'
                value={firstName}
                onChange={(e)=>setFirstName(e.target.value)} 
                type="text"
                placeholder='Entrez votre prénom'/>

                <h3 className='formSignin-form-title'>Nom</h3>
                <input
                className='formSignin-form-input'
                value={lastName}
                onChange={(e)=>setLastName(e.target.value)}
                type="text"
                placeholder='Entrez votre nom'/>

                <h3 className='formSignin-form-title'>Email</h3>
                <input
                className='formSignin-form-input'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                type="email"
                placeholder='Entrez votre Email'/>

                <h3 className='formSignin-form-title'>Mot de passe</h3>
                <input
                className='formSignin-form-input'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                type="password"
                placeholder='Entrez votre Mot de passe'/>
              
                <PasswordChecklist
                className='formSignin-form-checklist'
				rules={["minLength","specialChar","number","capital"]}
				minLength={8}
				value={password}
				valueAgain={passwordConf}
				onChange={handleIsValid}
				messages={{
					minLength: "8 caractères minimum.",
					specialChar: "1 caractère spécial minimum.",
					number: "1 chiffre minimum.",
					capital: "1 majuscule minimum.",
				}}/>
 
                
                <input
                className='formSignin-form-input'
                value={passwordConf}
                onChange={(e)=>setPasswordConf(e.target.value)}
                type="password"
                placeholder='Confirmez votre Mot de passe'/>
                
                <PasswordChecklist
                className='formSignin-form-checklist'
				rules={["match"]}
				minLength={8}
				value={password}
				valueAgain={passwordConf}
				onChange={handleIsValid}
				messages={{
					match: "Mots de passe identiques.",
				}}/>
                <div className='formSignin-form-checkbox'>
                <input className='formSignine-form-checkbox-input' type="checkbox" name='checkbox' onChange={handleCheckbox}/>
                <p> J'accepte les conditions d'utilisation </p>
                {checkboxText? <p className='formSignin-form-checkbox-error'>Acceptez les conditions d'utilisation </p>: null}
                </div>
                <div className='button-container'>
          <button onSubmit={handleSubmit} type="submit"  className="AllButton">
           <p className='AllButton-text'>C'est parti!</p>
          </button>
                </div>
                </form>
       </div> 
        : null
                }</>
   );
};

FormSignIn.propTypes = {
    className: PropTypes.string,
};
FormSignIn.defaultProps = {
    className: '',
};
export default React.memo(FormSignIn);
