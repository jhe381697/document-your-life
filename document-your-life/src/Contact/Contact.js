/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */

import React, { useState } from 'react';
import { send } from 'emailjs-com';
import{ init } from '@emailjs/browser';
init("user_sueC3QU4o0Lqhn8No1D2h");
import './contact.scss';

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
  send(
    'service_q906umf',
    'template_hnng7zu',
    {name, company, phone, email, message},
    'user_sueC3QU4o0Lqhn8No1D2h'
  )
  .then((response) => {
        completedForm()
        setName("");
        setCompany("");
        setPhone("");
        setEmail("");
        setMessage("");
    console.log('message sent successfully', response.status, response.text);
  })
};

return (
  <div className="contact-container">
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


