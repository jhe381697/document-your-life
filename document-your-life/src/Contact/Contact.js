/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */

import React, { useState } from 'react';
import { send } from 'emailjs-com';
import{ init } from '@emailjs/browser';
init("EhkiYWclsW8HG6kVA");
import './contact.scss';
import notifyFunc from '../utils/notifyFunc'
import Notify from '../utils/notifyFunc';
import { ToastContainer } from 'react-toastify';

const Contact = () => {

// States liées aux inputs
const [name, setName] = useState("");
const [company, setCompany] = useState("");
const [phone, setPhone] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");

  // Message en cas de succès de l'envoi
  const completedForm = () => {
    // Je stocke ma div contenant mon message
    let formMess = document.querySelector('.form-message');
    // J'agis sur ma div d'alerte
    formMess.innerHTML = 'Le message a bien été envoyé !';
    formMess.style.opacity = '1';
    formMess.style.background = '#c0ce03';
  }

// envoi et remise à zéro des données du formulaire
const handleSubmit = (e) => {
  e.preventDefault();
  console.log('before acces ok')
  if( name && company && phone && email && message !== "" ){
  send(
    'service_cajrxoq',
    'template_tz4rg6x',
    {name, company, phone, email, message},
    'EhkiYWclsW8HG6kVA'
  ).then((response) => {
        completedForm()
        setName("");
        setCompany("");
        setPhone("");
        setEmail("");
        setMessage("");
    console.log('message sent successfully', response.status, response.text);
  })
}else{
  console.log('acces not ok')
  notifyFunc('Tous les champs doivent être remplis.', 'warning' )
}
};

return (
  <div className="contact-container">
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
  <form className="contact-form">
    <h2>Contactez-nous!</h2>
    <div className="form-content">
      <input
        className="input"
        type="text"
        id="name"
        name="name"
        onChange={(e) => setName(e.target.value)}
        placeholder="Nom"
        value={name}
        autoComplete="off"
      />
      <input
      className="input"
        type="text"
        id="company"
        name="company"
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Société"
        value={company}
      />
      <input
      className="input"
        type="text"
        id="phone"
        name="phone"
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Téléphone"
        value={phone}
      />
        <input
        className="input"
          type="mail"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          value={email}
       />   
      <textarea
      className="textarea"
        id="message"
        name="message"
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message"
        value={message}
      />
    </div>
    <input
      className="button"
      type="button"
      value="Envoyer"
      onClick={handleSubmit}
    />
    <div className="form-message"></div>
  </form>
</div>
  
);
};

export default React.memo(Contact);


