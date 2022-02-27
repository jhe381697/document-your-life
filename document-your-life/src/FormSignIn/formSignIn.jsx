import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './formSignIn.scss';

const FormSignIn = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConf, setPasswordConf] = useState('')
    const [checkbox, setCheckbox] = useState(false)
   /**
     * 
     * @param {event} e 
     * change checkbox value ( true or false ) with onChange on checkbox
     */
    const handleCheckbox = (e) => {
    console.log(e.target.checked)
        setCheckbox(!checkbox)
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
        if(
            checkbox === true
         && password === passwordConf 
         && firstName !== ''
         && lastName !== ''
         && email !== ''
         && password !== ''
         && passwordConf !== ''
         ){
        console.log('submited')
        
        }else{
                console.log('please check form')
                return null
            }
    }

 
   return (
       <div className='formSignin'>
            <h2 className='formSignin-title'>Inscription</h2>
                <form className='formSignin-form' onSubmit={handleSubmit}>

                <p className='formSignin-form-title'>Prénom</p>
                <input 
                className='formSignin-form-input'
                value={firstName}
                onChange={(e)=>setFirstName(e.target.value)} 
                type="text"
                placeholder='Entrez votre prénom'/>

                <p className='formSignin-form-title'>Nom</p>
                <input
                className='formSignin-form-input'
                value={lastName}
                onChange={(e)=>setLastName(e.target.value)}
                type="text"
                placeholder='Entrez votre nom'/>

                <p className='formSignin-form-title'>Email</p>
                <input
                className='formSignin-form-input'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                type="email"
                placeholder='Entrez votre Email'/>

                <p className='formSignin-form-title'>Mot de passe</p>
                <input
                className='formSignin-form-input'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                type="password"
                placeholder='Entrez votre Mot de passe'/>
                <input
                className='formSignin-form-input'
                value={passwordConf}
                onChange={(e)=>setPasswordConf(e.target.value)}
                type="password"
                placeholder='Confirmez votre Mot de passe'/>
                <div className='formSignin-form-checkbox'>
                <input className='formSignine-form-checkbox-input' type="checkbox" name='checkbox' onChange={handleCheckbox}  />
                <label> J'accepte les conditions d'utilisation</label>
                </div>
          <button type="submit" onSubmit={handleSubmit} className="formSignin-form-btn">
            Envoyer
          </button>
                
                </form>
       </div>
   );
};

FormSignIn.propTypes = {
    className: PropTypes.string,
};
FormSignIn.defaultProps = {
    className: '',
};
export default React.memo(FormSignIn);
