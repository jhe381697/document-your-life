/* eslint-disable react/jsx-key */
import React from 'react';
import { useState } from 'react';

import CardEdit from '../CardEdit/CardEdit';
import Emoji from '../Emoji/Emoji';

import './card.scss';


const Card = () => {

  const [isOpen, setIsOpen] = useState(false)

  function handleClick (event) {
    event.preventDefault()  // empêche le rechargement de la page
    console.log("toggle", isOpen)
    setIsOpen(!isOpen)
    }

    return (
        <>
        <div className="card">
          <h2 className="card-date">Aujourdhui</h2>
          <div className="card-mood">
            <h3 className="card-mood-title">My mood</h3> 
            <div className="card-mood-infos">
              <Emoji />
              <p className="card-mood-infos-label">Label</p>
            </div>
          </div>
          <div className="card-resume">
            <h3 className="card-resume-title">My day</h3>
            <div className="card-resume-infos">
            {/* Faire un .map pour appeler tous les médiums sélectionnés par l'utilisateur */}
              <div className="card-resume-medium">Medium</div>
            </div>
          </div>
          <button onClick={handleClick}>New Day !</button>
        </div>
        {!isOpen? <CardEdit toggle={handleClick}/> : null}
        </>
    );
};

export default React.memo(Card);